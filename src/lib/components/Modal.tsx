import React from "react";

export default function Modal({
    className = "",
    titleClassName = "",
    contentClassName = "",
    isOpen = false,
    title,
    children,
    onClose,
}: { [key: string]: any }) {
    return (
        <>
            {
                !isOpen ? null :
                    <>
                        <div className="modalBackGrnd" onClick={onClose}></div>

                        <div className={["modal", className].join(" ")}>
                            <div className="dialogHeader">
                                <div className={titleClassName}>{title}</div>
                                <div className="dialogCloseBtn" onClick={onClose}></div>
                            </div>

                            <div className={["dialogContent", contentClassName].join(" ")}>{children}</div>
                        </div>
                    </>
            }
        </>
    )
}