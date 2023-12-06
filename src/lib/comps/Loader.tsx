import React from "react";
import styles from "./Loader.module.css";

interface LoaderProps {
    styles?: { [key: string]: string },
    dark?: boolean,
    loading?: boolean,
}
export default function Loader({
    styles: {
        className = "",
        loaderClassName = "",
    } = {},
    dark = false,
    loading = false,
}: LoaderProps) {
    return loading ?
        <div className={className} style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
            <div className={`${styles.loader} ${dark ? styles.darkLoader : ""} ${loaderClassName}`} />
        </div>
        : null;
}