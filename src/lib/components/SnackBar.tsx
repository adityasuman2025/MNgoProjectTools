import React, { useEffect } from "react";

/* eslint-disable react-hooks/exhaustive-deps */
export default function SnackBar({
    open,
    duration = 5000,
    type = "error",
    msg = "",
    boxclassName,
    textclassName,
    handleClose,
}: {
    open: boolean
    duration?: number
    type?: string
    msg?: string
    boxclassName?: string
    textclassName?: string
    handleClose?: any
}) {
    useEffect(() => {
        setTimeout(function () {
            console.log("hiding snack bar in 5 s");
            handleClose && handleClose();
        }, duration);
    }, [msg])

    function renderTypeStyle(type: string) {
        if (type === "error") {
            return "errorBox";
        } else if (type === "success") {
            return "successBox";
        } else if (type === "info") {
            return "infoBox";
        }

        return "";
    }

    return (
        open ?
            <div className="snackBarContainer">
                <div className={["snackBarContent", renderTypeStyle(type), boxclassName].join(" ")}>
                    <span className={["snackBarText", textclassName].join(" ")}>{msg}</span>
                </div>
            </div>
            : null
    )
}