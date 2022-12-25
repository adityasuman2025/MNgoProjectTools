import React from "react";
import "./LoadingAnimation.css";

export default function LoadingAnimation({
    dark,
    loading = false,
    className = "",
    loaderClassName = ""
}: { [key: string]: any }) {
    return loading ?
        <div className={className} style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
            <div className={["loadingAnimation", (dark ? "darkLoader" : ""), loaderClassName].join(" ")} />
        </div>
        : null;
}