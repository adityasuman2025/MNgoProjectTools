import React, { useState } from 'react';
import LoadingAnimation from "./LoadingAnimation";
import "./ImageWithLoader.css";

function cx(...args: string[]) {
    return args.join(" ");
}

export default function ImageWithLoader({
    className,
    loaderClassName,
    src,
    onClick,
}: { [key: string]: any }) {
    const [showLoader, setShowLoader] = useState(true);
    const [isImageVisible, setIsImageVisible] = useState(false);

    function displayImage() {
        setShowLoader(false);
        setIsImageVisible(true);
    }

    if (!src) return <></>;
    return (
        <div className={cx("imageWithLoaderContainer", className)} >
            <LoadingAnimation dark loading={showLoader} loaderClassName={loaderClassName} />
            <img alt="viewer" src={src} className="imageWithLoaderImg" style={{ display: isImageVisible ? "block" : "none" }} onLoad={displayImage} onClick={onClick} onError={() => setShowLoader(false)} />
        </div>
    )
}