import AES from "crypto-js/aes";
import Utf8 from 'crypto-js/enc-utf8'
import MD5 from "crypto-js/md5";
// import { Utf8, AES, MD5 } from "crypto-js";
import { getInWindowObjCache, setInWindowObjCache } from "./cachingUtils";

export function encryptText(text: string, encryptionKey: string) {
    try {
        const encryptedValue = AES.encrypt(text, encryptionKey).toString();
        return encryptedValue;
    } catch {
        return null;
    }
}

export function decryptText(enryptedValue: string, encryptionKey: string) {
    let value = null;
    try {
        const decrypted = AES.decrypt(enryptedValue, encryptionKey);
        value = Utf8.stringify(decrypted);
    } catch {
        return null;
    }

    return value;
}

export function md5Hash(text: string) {
    try {
        return MD5(text).toString();
    } catch {
        return null;
    }
}

export function encryptFileIntoText(imageFile: any, encryptionKey: string) {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader();
        reader.onload = () => {
            const encryptedImage = encryptText(reader.result, encryptionKey);
            const blob = new Blob([encryptedImage], { type: 'text/plain' }); // enrypted image string is saved as text file
            resolve(blob);
        };
        reader.onerror = (error: any) => reject(error);
        reader.readAsDataURL(imageFile);
    });
}

export async function decryptUrlTextFileIntoBase64Str(textFileUrl: string, encryptionKey: string, cacheKey: string) {
    if (!textFileUrl) return "";

    // check if image base64 string is already cached
    const cachedValue = getInWindowObjCache(cacheKey, textFileUrl);
    if (cachedValue !== undefined) return cachedValue; // if image base64 string is already cached, return it to avoid calling image api again
    // check if image base64 string is already cached

    try {
        const response = await fetch(textFileUrl);
        const textFileContent = await response.text();

        const base64Str = decryptText(textFileContent, encryptionKey);

        setInWindowObjCache(cacheKey, textFileUrl, base64Str); // caching the base64 image string for future use to avoid calling image api again

        return base64Str;
    } catch (e) {
        return "";
    }
}