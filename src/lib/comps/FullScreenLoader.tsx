import React from 'react';
import LoadingAnimation from "./LoadingAnimation";
import styles from "./FullScreenLoader.module.css";

interface FullScreenLoaderProps {
    styles?: { [key: string]: string },
    children?: React.ReactNode,
}
export default function FullScreenLoader({
    styles: {
        className = "",
        loaderClassName = "",
    } = {},
    children,
}: FullScreenLoaderProps) {
    return (
        <div className={`${styles.fullScreen} ${className}`}>
            <div>
                <LoadingAnimation loading styles={{ loaderClassName }} />
                {children}
            </div>
        </div>
    )
}