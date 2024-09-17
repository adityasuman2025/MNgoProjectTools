import React, { useState } from 'react';
import Loader from "./Loader";
import moduleStyle from "./ImageViewer.module.css";
import closeIcon from "./close.svg";
import leftIcon from "./left.svg";

interface ImageViewerProps {
    isArrowVisible?: boolean,
    isLeftActive?: boolean,
    isRightActive?: boolean,
    onLeftClick?: (...args: any) => void
    onRightClick?: (...args: any) => void

    isImageEncrypted?: boolean,
    encryptionKey?: string,
    src: string,
    onClose?: (...args: any) => void
}
export default function ImageViewer({
    isArrowVisible = false,
    isLeftActive = false,
    isRightActive = false,
    onLeftClick = (...args: any) => { },
    onRightClick = (...args: any) => { },

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

            <img className={`${moduleStyle.arrowBtn} ${isLeftActive ? '' : moduleStyle.disabled} ${showLoader || !isArrowVisible ? moduleStyle.hidden : ''}`}
                alt="<" src={leftIcon} onClick={onLeftClick}
            />

            <Loader loading={showLoader} />
            <img src={src} className={moduleStyle.imageViewerImg}
                style={{ display: isImageVisible ? "block" : "none" }}
                onLoad={displayImage} onError={handleError}
            />

            <img className={`${moduleStyle.arrowBtn} ${isRightActive ? '' : moduleStyle.disabled} ${showLoader || !isArrowVisible ? moduleStyle.hidden : ''} ${moduleStyle.rightArrow}`}
                alt=">" src={leftIcon} onClick={onRightClick}
            />
        </div>
    )
}