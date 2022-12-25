import React, { useState } from 'react';
import LoadingAnimation from "./LoadingAnimation";
import "./ImageViewer.css";

import closeIcon from "./close.webp";

export default function ImageViewer({ src, onClose }: { [key: string]: any }) {
    const [showLoader, setShowLoader] = useState(true);

    if (!src) return <></>;
    return (
        <div className="imageViewer">
            <div className="imageViewerBg" onClick={onClose} />
            <img alt="closeIcon" src={closeIcon} className="imageViewerCloseIcon" onClick={onClose} />
            <LoadingAnimation loading={showLoader} />
            <img alt="viewer" src={src} className="imageViewerImg" onLoad={() => setShowLoader(false)} onError={() => setShowLoader(false)} />
        </div>
    )
}