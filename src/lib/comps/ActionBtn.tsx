import React from 'react';
import LoadingAnimation from "./LoadingAnimation";
import styles from "./ActionBtn.module.css";

interface ActionBtnProps {
    styles?: { [key: string]: string },
    dark?: boolean,
    showLoader?: boolean,
    text?: string,
    onClick?: (...args: any) => void,
}
export default function ActionBtn({
    styles: {
        className = "",
        textclassName = "",
    } = {},
    dark = false,
    showLoader = false,
    text = "Button",
    onClick = (...args: any) => { },
}: ActionBtnProps) {
    return (
        <button
            className={`${styles.actionBtnContainer} ${dark ? styles.darkActionBtnContainer : ""} ${className}`}
            onClick={(e) => !showLoader ? onClick && onClick(e) : null}
        >
            {
                showLoader ? <LoadingAnimation dark={!dark} loading={showLoader} /> :
                    <div className={`${styles.actionBtnText} ${dark ? styles.darkActionBtnText : ""} ${textclassName}`}>{text}</div>
            }
        </button>
    )
}