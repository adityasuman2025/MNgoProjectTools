import React, { useState } from 'react';
import LoadingAnimation from "./LoadingAnimation";
import styles from "./ImageWithLoader.module.css";

interface ImageWithLoader {
    styles?: { [key: string]: string },
    src: string,
    onClick?: (...args: any) => void,
}
export default function ImageWithLoader({
    styles: {
        className = "",
        loaderClassName = "",
    } = {},
    src,
    onClick = (...args: any) => { }
}: ImageWithLoader) {
    const [showLoader, setShowLoader] = useState(true);
    const [isImageVisible, setIsImageVisible] = useState(false);

    function displayImage() {
        setShowLoader(false);
        setIsImageVisible(true);
    }

    if (!src) return <></>;
    return (
        <div className={`${styles.imageWithLoaderContainer} ${className}`} >
            <LoadingAnimation dark loading={showLoader}
                styles={{ loaderClassName: loaderClassName }}
            />
            <img alt="viewer" src={src} className={styles.imageWithLoaderImg}
                style={{ display: isImageVisible ? "block" : "none" }}
                onLoad={displayImage}
                onClick={onClick}
                onError={() => setShowLoader(false)}
            />
        </div>
    )
}