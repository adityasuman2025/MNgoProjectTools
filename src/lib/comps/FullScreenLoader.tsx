import React from 'react';
import Loader from "./Loader";
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
                <Loader loading styles={{ loaderClassName }} />
                {children}
            </div>
        </div>
    )
}