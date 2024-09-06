import React, { useState, useEffect } from 'react';
import { decryptUrlTextFileIntoBase64Str } from "../encryptionUtils";
import Loader from "./Loader";
import moduleStyle from "./ImageWithLoader.module.css";

interface ImageWithLoader {
    styles?: { [key: string]: string },
    isImageEncrypted?: boolean,
    encryptionKey?: string,
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

    if (!src) return <></>;
    return (
        <>
            <Loader dark loading={showLoader} styles={{ loaderClassName: loaderClassName }} />
            <img alt="viewer" src={src} className={moduleStyle.imageWithLoaderImg}
                style={{ display: isImageVisible ? "block" : "none" }}
                onLoad={displayImage}
                onClick={onClick}
                onError={() => setShowLoader(false)}
            />
        </>
    )
}

export default function ImageWithLoader({
    styles = {},
    isImageEncrypted = false,
    encryptionKey = "",
    src,
    onClick = (...args) => { }
}: ImageWithLoader) {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        if (!src) return;

        if (isImageEncrypted) {
            (async () => {
                const base64Img = await decryptUrlTextFileIntoBase64Str(src, encryptionKey);
                if (base64Img) setImageSrc(base64Img);
                else setImageSrc(src);
            })();
        } else setImageSrc(src);
    }, [src, isImageEncrypted, encryptionKey]);

    if (!src) return <></>;
    return (
        <div className={`${moduleStyle.imageWithLoaderContainer} ${styles.className || ""}`} >
            {
                imageSrc ? <ImageViewerComp src={imageSrc} styles={styles} onClick={onClick} /> :
                    <Loader dark loading={true} styles={{ loaderClassName: styles.loaderClassName }} />
            }
        </div>
    )
}