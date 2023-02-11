import React from 'react';
import LoadingAnimation from "./LoadingAnimation";
import "./ActionBtn.css";

export default function ActionBtn({
    dark,
    className,
    textclassName,
    showLoader,
    text = "Button",
    onClick,
}: { [key: string]: any }) {
    return (
        <button
            className={`actionBtnContainer ${dark ? "darkActionBtnContainer" : ""} ${className}`}
            onClick={!showLoader ? onClick : null}
        >
            {
                showLoader ? <LoadingAnimation dark={!dark} loading={showLoader} /> :
                    <div className={`actionBtnText ${dark ? "darkActionBtnText" : ""} ${textclassName}`}>{text}</div>
            }
        </button>
    )
}