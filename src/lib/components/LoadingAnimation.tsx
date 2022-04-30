import React from "react";
import './index.css';

export default function LoadingAnimation({
    dark,
    loading = false,
    className = "",
    loaderClassName = ""
}: {
    dark?: boolean
    loading: boolean
    className?: string
    loaderClassName?: string
}) {
    return loading ?
        <div className={className}>
            <div className={["loadingAnimation", (dark ? "darkLoader" : ""), loaderClassName].join(" ")} />
        </div>
        : null;
}