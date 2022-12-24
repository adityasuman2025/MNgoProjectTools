import React from "react";

export default function ConfirmDialog({
    className = "",
    titleClassName = "",
    contentClassName = "",
    yesBtnClassName = "",
    noBtnClassName = "",
    isDialogOpen = false,
    dialogText = "",
    dialogDetails = "",
    hideBtns = false,
    onClose,
    onConfirm,
}: { [key: string]: any }) {
    return (
        <>
            {
                !isDialogOpen ? null :
                    <>
                        <div className="modalBackGrnd" onClick={onClose}></div>

                        <div className={["dialog", className].join(" ")}>
                            <div className="dialogHeader">
                                <div className={titleClassName}>{dialogText}</div>
                                <div className="dialogCloseBtn" onClick={onClose}></div>
                            </div>

                            <div className={["dialogContent", contentClassName].join(" ")}>
                                <div>{dialogDetails}</div>

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