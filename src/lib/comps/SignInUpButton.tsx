import React from 'react';
import styles from "./SignInUpButton.module.css";

interface SignInUpButtonProps {
    otherText?: string,
    buttonText?: string,
    onClick?: (...args: any) => void,
}
export default function SignInUpButton({
    otherText,
    buttonText = "Button",
    onClick = (...args: any) => { },
}: SignInUpButtonProps) {
    return (
        <div className={styles.signInUpBtnContainer}>
            {otherText ? <span className={styles.signInUpText}>{otherText}</span> : null}
            <span className={styles.signInUpBtn} onClick={onClick}>{buttonText}</span>
        </div>
    );
}