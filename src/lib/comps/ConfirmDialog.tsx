import React from "react";
import "./ConfirmDialog.css";

export default function ConfirmDialog({
    className = "",
    titleClassName = "",
    contentClassName = "",
    yesBtnClassName = "",
    noBtnClassName = "",
    open = false,
    title = "",
    content = "",
    hideBtns = false,
    onClose,
    onConfirm,
}: { [key: string]: any }) {
    return (
        <>
            {
                !open ? null :
                    <>
                        <div className="modalBackGrnd" onClick={onClose}></div>

                        <div className={["dialog", className].join(" ")}>
                            <div className="dialogHeader">
                                <div className={titleClassName}>{title}</div>
                                <div className="dialogCloseBtn" onClick={onClose}></div>
                            </div>

                            <div className={["dialogContent", contentClassName].join(" ")}>
                                <div>{content}</div>

                                {
                                    hideBtns ? null :
                                        <div className="dialogBtns">
                                            <button className={yesBtnClassName} onClick={onConfirm}>Yes</button>
                                            <button className={["dialogNo", noBtnClassName].join(" ")} onClick={onClose}>No</button>
                                        </div>
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}