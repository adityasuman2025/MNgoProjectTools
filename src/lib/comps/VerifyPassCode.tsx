import React, { useState } from 'react';
import ActionBtn from "./ActionBtn";
import styles from "./VerifyPassCode.module.css";

interface VerifyPassCodeProps {
    styles?: { [key: string]: string },
    isVerifyingPasscode?: boolean,
    onVerifyClick?: (...args: any) => void,
}
export default function VerifyPassCode({
    styles: {
        className = "",
        titleClassName = "",
        inputClassName = "",
        btnClassName = "",
    } = {},
    isVerifyingPasscode = false,
    onVerifyClick = (...args: any) => { },
}: VerifyPassCodeProps) {
    const [passcode, setPasscode] = useState("");

    function handleVerifyBtnClick(e: any) {
        e.preventDefault();
        if (isVerifyingPasscode) return;

        onVerifyClick && onVerifyClick(passcode);
    }

    return (
        <form className={`${styles.verifyPasscodeContainer} ${className}`} onSubmit={handleVerifyBtnClick}>
            <div className={`${styles.darkTitle} ${titleClassName}`}>Verify Passcode</div>
            <input
                type="password"
                className={`${styles.formInputField} ${inputClassName}`}
                placeholder="Enter Passcode"
                autoFocus
                maxLength={4}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
            />

            <ActionBtn
                styles={{ className: btnClassName }}
                dark={true}
                showLoader={isVerifyingPasscode}
                text="Verify"
                onClick={handleVerifyBtnClick}
            />
        </form>
    );
}
