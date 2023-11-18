import React from "react";
import styles from "./LoadingAnimation.module.css";

interface LoadingAnimationProps {
    styles?: { [key: string]: string },
    dark?: boolean,
    loading?: boolean,
}
export default function LoadingAnimation({
    styles: {
        className = "",
        loaderClassName = "",
    } = {},
    dark = false,
    loading = false,
}: LoadingAnimationProps) {
    return loading ?
        <div className={className} style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
            <div className={`${styles.loadingAnimation} ${dark ? styles.darkLoader : ""} ${loaderClassName}`} />
        </div>
        : null;
}