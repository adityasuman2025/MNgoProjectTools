import React from 'react';
import LoadingAnimation from "./LoadingAnimation";
import styles from "./FullScreenLoader.module.css";

interface FullScreenLoaderProps {
    styles?: { [key: string]: string },
}
export default function FullScreenLoader({
    styles: {
        className = "",
        loaderClassName = "",
    } = {},
}: FullScreenLoaderProps) {
    return (
        <div className={`${styles.fullScreen} ${className}`}>
            <LoadingAnimation loading styles={{ loaderClassName }} />
        </div>
    )
}