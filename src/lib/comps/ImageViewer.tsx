import React, { useState } from 'react';
import LoadingAnimation from "./LoadingAnimation";
import styles from "./ImageViewer.module.css";
import closeIcon from "./close.svg";

interface ImageViewerProps {
    src: string,
    onClose?: (...args: any) => void
}
export default function ImageViewer({
    src,
    onClose = (...args: any) => { },
}: ImageViewerProps) {
    const [showLoader, setShowLoader] = useState(true);

    if (!src) return <></>;
    return (
        <div className={styles.imageViewer}>
            <div className={styles.imageViewerBg} onClick={onClose} />
            <img alt="closeIcon" src={closeIcon} className={styles.imageViewerCloseIcon} onClick={onClose} />
            <LoadingAnimation loading={showLoader} />
            <img alt="viewer" src={src} className={styles.imageViewerImg} onLoad={() => setShowLoader(false)} onError={() => setShowLoader(false)} />
        </div>
    )
}