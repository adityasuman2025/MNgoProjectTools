import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
    styles?: { [key: string]: string },
    open?: boolean,
    title?: string,
    children?: React.ReactNode | String,
    onClose?: (...args: any) => void,
}
export default function Modal({
    styles: {
        className = "",
        titleClassName = "",
        contentClassName = "",
    } = {},
    open = false,
    title = "",
    children = <></>,
    onClose = (...args: any) => { },
}: ModalProps) {
    return (
        <>
            {
                !open ? null :
                    <>
                        <div className={styles.modalBackGrnd} onClick={onClose}></div>

                        <div className={`${styles.modal} ${className}`}>
                            <div className={styles.modalHeader}>
                                <div className={titleClassName}>{title}</div>
                                <div className={styles.modalCloseBtn} onClick={onClose}></div>
                            </div>

                            <div className={`${styles.modalContent} ${contentClassName}`}>{children}</div>
                        </div>
                    </>
            }
        </>
    )
}