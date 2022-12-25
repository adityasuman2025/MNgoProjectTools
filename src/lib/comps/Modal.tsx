import React from "react";
import "./Modal.css";

export default function Modal({
    className = "",
    titleClassName = "",
    contentClassName = "",
    open = false,
    title,
    children,
    onClose,
}: { [key: string]: any }) {
    return (
        <>
            {
                !open ? null :
                    <>
                        <div className="modalBackGrnd" onClick={onClose}></div>

                        <div className={["modal", className].join(" ")}>
                            <div className="modalHeader">
                                <div className={titleClassName}>{title}</div>
                                <div className="modalCloseBtn" onClick={onClose}></div>
                            </div>

                            <div className={["modalContent", contentClassName].join(" ")}>{children}</div>
                        </div>
                    </>
            }
        </>
    )
}