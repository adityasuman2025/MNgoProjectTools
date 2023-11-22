import React, { useState, useEffect, useRef, forwardRef } from "react";
import FullScreenLoader from "../comps/FullScreenLoader";
import LoaderOrError from '../comps/LoaderOrError';
import { getCacheRegular, setCacheRegular } from "../cachingUtil";
import useFetch from '../hooks/useFetch';

export default function WithData(
    WrappedComponent: any,
    apiUrls: { url: string, method?: string, body?: any }[] = [],
    options: { [key: string]: any } = {}
) {
    const {
        storageDataKey = "",
        loaderOrErrorRenderer = function (hasError: boolean, error: string) {
            return (
                <FullScreenLoader>
                    <h2 style={{ marginTop: 20 }}>{hasError ? error : "loading..."}</h2>
                </FullScreenLoader>
            )
        }
    } = options || {};

    const storageData = getCacheRegular(storageDataKey);

    function WithRef(props: any, ref: any) {
        const innerRef = useRef(); // Create a ref using useRef
        const forwardedRef = ref || innerRef; // Forward the ref to the wrapped component

        const isMounted = useRef<boolean>(false);
        const [data, setData] = useState<any>(null);

        const [loading, error, apiData]: any = useFetch({ urls: apiUrls });

        useEffect(() => {
            isMounted.current = true;

            if (!apiData || !apiData?.length) {
                if (Object.keys(storageData).length) setData(storageData); // if data is present in storage then pick from there
            } else {
                if (storageDataKey) setCacheRegular(storageDataKey, apiData);

                setData(apiData);
            }
        }, [apiData]);

        const dataLength = data?.length || 0;
        return (
            <LoaderOrError
                isLoading={(dataLength === 0) || !isMounted.current}
                loaderRenderer={loaderOrErrorRenderer(error && dataLength === 0, error)}
            >
                <WrappedComponent {...props} data={data} />
            </LoaderOrError>
        )
    }

    return forwardRef(WithRef); // forwardRef is used to pass ref to the wrapped component, to fix given error
    // React Hook cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function 
}
