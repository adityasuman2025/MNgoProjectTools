import React from "react";
import styles from "./BottomModal.module.css";
import closeIcon from './close.svg';

interface BottomModalProps {
    styles?: { [key: string]: string },
    title?: string | React.ReactNode,
    children?: React.ReactNode,
    onCloseClick?: (...args: any) => void,
}
export default function BottomModal({
    styles: {
        backdropClassName = "",
        className = "",
    } = {},
    title = "Modal Title",
    children,
    onCloseClick = (...args: any) => { },
}: BottomModalProps) {
    return (
        <>
            <div
                className={`${styles?.["mngo-modal-backgrnd"]} ${backdropClassName}`}
                onClick={onCloseClick}
            />

            <div
                className={`${styles?.["mngo-modal"]} ${className}`}
                role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription"
            >
                <div className={styles?.["mngo-modal-header"]}>
                    <h2 id="modalTitle" style={{ margin: 0, padding: 0 }}>{title}</h2>
                    <img
                        src={closeIcon} alt="close icon"
                        className={styles?.["mngo-modal-close-icon"]}
                        width={30} height={30}
                        onClick={onCloseClick}
                    />
                </div>

                <div id="modalDescription" className={styles?.["mngo-modal-content"]}>{children}</div>
            </div>
        </>
    )
}