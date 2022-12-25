import React from 'react';
import "./SignInUpButton.css";

export default function SignInUpButton({ otherText, buttonText = "Button", onClick }: { [key: string]: any }) {
    return (
        <div className="signInUpBtnContainer">
            {otherText ? <span className="signInUpText">{otherText}</span> : null}
            <span className="signInUpBtn" onClick={onClick}>{buttonText}</span>
        </div>
    );
}