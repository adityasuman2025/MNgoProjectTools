export async function sendRequestToAPI(
    baseUrl: string, endpoint: string, method: string = "get", body: { [key: string]: any },
    options: { [key: string]: any } = {}
) {
    const { throwNotOkError = true } = options || {};

    const requestAddress = baseUrl + endpoint;
    const response = await fetch(requestAddress, {
        method,
        ...(method.toLowerCase() === "get" ? {} : {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body || {})
        })
    });
    const jsonResp = await response.json();

    if (!response.ok && throwNotOkError) throw new Error(jsonResp.message);
    return jsonResp;
}

export async function sendRequestToAPIWithFormData(
    requestAddress: string, formData: any,
    options: { [key: string]: any } = {}
) {
    const { throwNotOkError = true } = options || {};

    const response = await fetch(requestAddress, {
        method: 'POST',
        body: formData,
    });

    const jsonResp = await response.json();

    if (!response.ok && throwNotOkError) throw new Error(jsonResp.message);
    return jsonResp;
}

export async function uploadMediaInChunks(apiUrl: string, file: any, options: { [key: string]: any }) {
    const { chunkSize = 3.5 * 1024 * 1024 } = options || {};

    if (!apiUrl) throw new Error("api url not found");
    if (!file) throw new Error("file not found");

    if (file.size < chunkSize) {
        const formData = new FormData();
        formData.append('file', file);

        return await sendRequestToAPIWithFormData(apiUrl, formData)
    }

    return new Promise(async function (resolve, reject) {
        try {
            const totalChunks = Math.ceil(file.size / chunkSize);

            for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
                const startByte = chunkIndex * chunkSize;
                const endByte = Math.min(startByte + chunkSize, file.size);

                const chunk = file.slice(startByte, endByte);
                const formData = new FormData();
                formData.append('file', chunk);
                formData.append("type", file.type);

                if (chunkIndex === totalChunks - 1) formData.append("isLast", String(true));

                const response = await fetch(apiUrl + "&isChunk=true", { method: 'POST', body: formData }); // 
                const jsonResp = await response.json();

                if (!response.ok) return reject(jsonResp);

                if (chunkIndex === totalChunks - 1) return resolve(jsonResp)
            }
        } catch (e) {
            return reject(e);
        }
    });
}

export async function getChunkedMedia(apiUrl: string, options: { [key: string]: any }) {
    const { chunkSize = 3.5 * 1024 * 1024 } = options || {};

    if (!apiUrl) throw new Error("api url not found");

    const fileUrl = apiUrl + "&isChunk=true";

    let base64String = "";

    // making request for the first chunk
    const response = await fetch(`${fileUrl}&chunkSize=${chunkSize}`);
    const jsonResp = await response.json();

    if (!response.ok) throw new Error(jsonResp.message);

    const { content, totalChunks = 1, type } = jsonResp?.data || {};
    base64String += content || "";

    // if there are more chunks then downloading it
    for (let i = 1; i < totalChunks; i++) {
        const chunkResp = await fetch(`${fileUrl}&chunkIdx=${i}${i === totalChunks - 1 ? "&isLast=true" : ""}`);
        const chunkJsonResp = await chunkResp.json();

        if (!chunkResp.ok) throw new Error(chunkJsonResp.message);

        const { content } = chunkJsonResp?.data || {};
        base64String += content || "";
    }

    if (!base64String) throw new Error("failed to download media");

    // Convert Base64 string to Blob
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);

    const blob = new Blob([bytes], { type });
    const mediaUrl = URL.createObjectURL(blob);

    return mediaUrl;
}