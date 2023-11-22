import React from "react";
import LoadingAnimation from "./LoadingAnimation";

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
    loaderRenderer = <LoadingAnimation loading />,
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