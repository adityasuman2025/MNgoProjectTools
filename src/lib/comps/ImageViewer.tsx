import React, { useState } from 'react';
import Loader from "./Loader";
import moduleStyle from "./ImageViewer.module.css";
import closeIcon from "./close.svg";

interface ImageViewerProps {
    isImageEncrypted?: boolean,
    encryptionKey?: string,
    src: string,
    onClose?: (...args: any) => void
}
export default function ImageViewer({
    src,
    onClose = (...args: any) => { },
}: ImageViewerProps) {
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

    if (!src) return <></>;
    return (
        <div className={moduleStyle.imageViewer}>
            <div className={moduleStyle.imageViewerBg} onClick={onClose} />
            <img alt="closeIcon" src={closeIcon} className={moduleStyle.imageViewerCloseIcon} onClick={onClose} />
            <Loader loading={showLoader} />
            <img src={src} className={moduleStyle.imageViewerImg}
                style={{ display: isImageVisible ? "block" : "none" }}
                onLoad={displayImage} onError={handleError}
            />
        </div>
    )
}