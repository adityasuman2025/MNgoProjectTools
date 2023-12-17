import React, { useState, useEffect } from 'react';
import { sendRequestToAPI } from "../apiUtils";

export default function useFetch({
    urls = [],
    respTransformer,
}: {
    urls: { url: string, method?: string, body?: any }[],
    respTransformer?: (params: { respData: any, rqstData: any }, idx: number) => any,
}) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        if (!urls || !urls.length) return setIsLoading(false);

        setIsLoading(true);
        const apiCallPromises = (urls || []).map(({ url, method, body }) => sendRequestToAPI(url || "", "", method || "GET", body || {}));
        Promise.all(apiCallPromises)
            .then(resp => {
                const transformedResp: any[] = [];
                resp.forEach((value: any, idx: number) => {
                    if (value) {
                        if (respTransformer) transformedResp.push(respTransformer({ respData: value, rqstData: urls?.[idx] }, idx))
                        else transformedResp.push(value);
                    }
                });

                setData(transformedResp);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
    }, []);

    return [isLoading, error, data];
}