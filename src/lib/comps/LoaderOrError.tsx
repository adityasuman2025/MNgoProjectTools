import React from "react";
import Loader from "./Loader";

interface LoaderOrErrorProps {
    isLoading: boolean,
    hasError?: boolean,
    loaderRenderer?: any,
    errorRenderer?: any,
    children: any
}
export default function LoaderOrError({
    isLoading,
    hasError,
    loaderRenderer = <Loader loading />,
    errorRenderer = <p>something went wrong</p>,
    children
}: LoaderOrErrorProps) {
    return (
        <>
            {
                (isLoading) ? (
                    loaderRenderer
                ) : (hasError) ? (
                    errorRenderer
                ) : children
            }
        </>
    )
}