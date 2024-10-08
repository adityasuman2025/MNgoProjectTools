import React, { useState, useEffect } from 'react';
import { decryptUrlTextFileIntoBase64Str } from "../encryptionUtils";
import Loader from "./Loader";
import moduleStyle from "./ImageWithLoader.module.css";

interface ImageWithLoader {
    isImageEncrypted?: boolean,
    encryptionKey?: string,
    useCache?: boolean,
    cacheKey?: string,
    hideOnError?: boolean,

    styles?: { [key: string]: string },
    src: string,
    onClick?: (...args: any) => void,
}
function ImageViewerComp({
    styles: { loaderClassName = "" } = {},
    src,
    onClick = (...args) => { }
}: ImageWithLoader) {
    const [showLoader, setShowLoader] = useState(true);
    const [isImageVisible, setIsImageVisible] = useState(false);

    function displayImage() {
        setShowLoader(false);
        setIsImageVisible(true);
    }

    function handleError() {
        setShowLoader(false);
        setIsImageVisible(true);
    }

    function handleClick(e: any) {
        e.stopPropagation();
        onClick(src); // src will always be base64 string image for case of mngo server images, for other sources, it will be the original image url
    }

    if (!src) return <></>;
    return (
        <>
            <Loader dark loading={showLoader} styles={{ loaderClassName: loaderClassName }} />
            <img src={src} className={moduleStyle.imageWithLoaderImg}
                style={{ display: isImageVisible ? "block" : "none" }}
                onLoad={displayImage} onClick={handleClick} onError={handleError}
            />
        </>
    )
}

export default function ImageWithLoader({
    isImageEncrypted = false,
    encryptionKey = "",
    cacheKey = "",
    hideOnError = false,

    styles = {},
    src,
    onClick = (...args) => { }
}: ImageWithLoader) {
    const [imageSrc, setImageSrc] = useState("");
    const [isImageVisible, setIsImageVisible] = useState(true);

    useEffect(() => {
        if (!src) return;

        if (isImageEncrypted) {
            (async () => {
                const base64Img = await decryptUrlTextFileIntoBase64Str(src, encryptionKey, cacheKey);
                if (base64Img) setImageSrc(base64Img);
                else {
                    if (hideOnError) setIsImageVisible(false);
                    else setImageSrc(src);
                }
            })();
        } else setImageSrc(src);
    }, [src, isImageEncrypted]);

    if (!src) return <></>;
    return (
        <div className={`${moduleStyle.imageWithLoaderContainer} ${styles.className || ""}`} style={isImageVisible ? {} : { display: "none" }}>
            {
                imageSrc ? <ImageViewerComp src={imageSrc} styles={styles} onClick={onClick} /> :
                    <Loader dark loading={true} styles={{ loaderClassName: styles.loaderClassName }} />
            }
        </div>
    )
}