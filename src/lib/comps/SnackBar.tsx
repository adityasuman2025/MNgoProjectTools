import React, { useEffect, useRef } from "react";
import styles from "./SnackBar.module.css";

interface SnackBarProps {
    styles?: { [key: string]: string },
    boxClassName?: string,
    textClassName?: string,
    open?: boolean,
    duration?: number,
    type?: string,
    msg?: string,
    onClose?: (...args: any) => void,
}
export default function SnackBar({
    styles: {
        boxClassName = "",
        textClassName = "",
    } = {},
    open = false,
    duration = 5000,
    type = "error",
    msg = "",
    onClose = (...args: any) => { },
}: SnackBarProps) {
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current);
        if (open) {
            timeoutRef.current = setTimeout(function () {
                onClose && onClose();
            }, duration);
        }
    }, [msg])

    function renderTypeStyle(type: string) {
        if (type === "error") return styles.errorBox;
        else if (type === "success") return styles.successBox;
        else if (type === "info") return styles.infoBox;
        return "";
    }

    return (
        open ?
            <div className={styles.snackBarContainer}>
                <div className={`${styles.snackBarContent} ${renderTypeStyle(type)} ${boxClassName}`} onClick={onClose}>
                    <span className={`${styles.snackBarText} ${textClassName}`}>{msg}</span>
                </div>
            </div>
            : null
    )
}