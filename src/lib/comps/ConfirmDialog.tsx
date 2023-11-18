import React from "react";
import styles from "./ConfirmDialog.module.css";

interface ConfirmDialogProps {
    styles?: { [key: string]: string },
    open?: boolean,
    title?: string,
    content?: string,
    hideBtns?: boolean,
    onClose?: (...args: any) => void,
    onConfirm?: (...args: any) => void,
}
export default function ConfirmDialog({
    styles: {
        className = "",
        titleClassName = "",
        contentClassName = "",
        yesBtnClassName = "",
        noBtnClassName = "",
    } = {},
    open = false,
    title = "",
    content = "",
    hideBtns = false,
    onClose = (...args: any) => { },
    onConfirm = (...args: any) => { },
}: ConfirmDialogProps) {
    return (
        <>
            {
                !open ? null :
                    <>
                        <div className={styles.modalBackGrnd} onClick={onClose}></div>

                        <div className={`${styles.dialog} ${className}`}>
                            <div className={styles.dialogHeader}>
                                <div className={titleClassName}>{title}</div>
                                <div className={styles.dialogCloseBtn} onClick={onClose}></div>
                            </div>

                            <div className={`${styles.dialogContent} ${contentClassName}`}>
                                <div>{content}</div>

                                {
                                    hideBtns ? null :
                                        <div className={styles.dialogBtns}>
                                            <button className={yesBtnClassName} onClick={onConfirm}>Yes</button>
                                            <button className={`${styles.dialogNo} ${noBtnClassName}`} onClick={onClose}>No</button>
                                        </div>
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}