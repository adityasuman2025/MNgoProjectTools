import React, { useState } from 'react';
import ActionBtn from "./ActionBtn";
import "./VerifyPassCode.css";

export default function VerifyPassCode({
    className,
    titleClassName,
    inputClassName,
    btnClassName,
    isVerifyingPasscode,
    onVerifyClick,
}: { [key: string]: any }) {
    const [passcode, setPasscode] = useState("");

    function handleVerifyBtnClick(e: any) {
        e.preventDefault();
        if (isVerifyingPasscode) return;

        onVerifyClick && onVerifyClick(passcode);
    }

    return (
        <form className={`verifyPasscodeContainer ${className}`} onSubmit={handleVerifyBtnClick}>
            <div className={`darkTitle ${titleClassName}`}>Verify Passcode</div>
            <input
                type="password"
                className={`formInputField ${inputClassName}`}
                placeholder="Enter Passcode"
                autoFocus
                maxLength={4}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
            />

            <ActionBtn
                className={btnClassName}
                dark={true}
                showLoader={isVerifyingPasscode}
                text="Verify"
                onClick={handleVerifyBtnClick}
            />
        </form>
    );
}
