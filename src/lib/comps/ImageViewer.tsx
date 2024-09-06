import React, { useState, useEffect } from 'react';
import { decryptUrlTextFileIntoBase64Str } from "../encryptionUtils";
import Loader from "./Loader";
import moduleStyle from "./ImageViewer.module.css";
import closeIcon from "./close.svg";

interface ImageViewerProps {
    isImageEncrypted?: boolean,
    encryptionKey?: string,
    src: string,
    onClose?: (...args: any) => void
}
function ImageViewerComp({
    src,
    onClose = (...args: any) => { },
}: ImageViewerProps) {
    const [showLoader, setShowLoader] = useState(true);

    if (!src) return <></>;
    return (
        <>
            <div className={moduleStyle.imageViewerBg} onClick={onClose} />
            <img alt="closeIcon" src={closeIcon} className={moduleStyle.imageViewerCloseIcon} onClick={onClose} />
            <Loader loading={showLoader} />
            <img alt="viewer" src={src} className={moduleStyle.imageViewerImg} onLoad={() => setShowLoader(false)} onError={() => setShowLoader(false)} />
        </>
    )
}

export default function ImageViewer({
    isImageEncrypted = false,
    encryptionKey = "",
    src,
    onClose = (...args: any) => { },
}: ImageViewerProps) {
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
        <div className={moduleStyle.imageViewer}>
            {
                imageSrc ? <ImageViewerComp src={imageSrc} onClose={onClose} /> :
                    <Loader loading={true} />
            }
        </div>
    )
}