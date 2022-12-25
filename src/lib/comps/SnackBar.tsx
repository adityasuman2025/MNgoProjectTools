import React, { useEffect } from "react";
import "./SnackBar.css";

export default function SnackBar({
    boxClassName,
    textClassName,
    open,
    duration = 5000,
    type = "error",
    msg = "",
    handleClose,
}: { [key: string]: any }) {
    useEffect(() => {
        if (open) {
            setTimeout(function () {
                handleClose && handleClose();
            }, duration);
        }
    }, [msg])

    function renderTypeStyle(type: string) {
        if (type === "error") return "errorBox";
        else if (type === "success") return "successBox";
        else if (type === "info") return "infoBox";
        return "";
    }

    return (
        open ?
            <div className="snackBarContainer">
                <div className={["snackBarContent", renderTypeStyle(type), boxClassName].join(" ")} onClick={handleClose}>
                    <span className={["snackBarText", textClassName].join(" ")}>{msg}</span>
                </div>
            </div>
            : null
    )
}