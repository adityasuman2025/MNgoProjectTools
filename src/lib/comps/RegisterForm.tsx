import React, { useState } from 'react';
import { validateUsername, validateEmail, validateNumber } from "../utils";
import ActionBtn from "./ActionBtn";
import getLogoImg from "../getLogoImg";
import "./LoginSignUpForm.css";

const FIELDS = [
    { type: "text", placeholder: "Username", key: "username", autoFocus: true },
    { type: "email", placeholder: "Email", key: "email" },
    { type: "password", placeholder: "Password", key: "password" },
    { type: "password", placeholder: "Confirm Password", key: "confPassword" },
    { type: "password", placeholder: "Passcode", key: "passcode", maxLength: 4 },
    { type: "password", placeholder: "Confirm Passcode", key: "confPasscode", maxLength: 4 },
];

export default function RegisterForm({
    className = "",
    inputClassName = "",
    btnClassName = "",
    projectTitle = "MNgo",
    logoImg = getLogoImg(),
    isRegisteringUser,
    showError,
    onRegisterClick,
}: { [key: string]: any }) {
    const [state, setState] = useState<{ [key: string]: any }>(FIELDS.reduce((acc, i) => ({ ...acc, [i.key]: "" }), {}));

    function handleRegisterBtnClick(e: any) {
        e.preventDefault();

        if (isRegisteringUser) return;

        const { username, email, password, confPassword, passcode, confPasscode } = state || {};
        if (username !== "" && email !== "" && password !== "" && confPassword !== "" && passcode !== "" && confPasscode !== "") {
            if (!validateUsername(username)) return (showError && showError("Username cannot contain symbol and spaces"));
            if (!validateEmail(email)) return (showError && showError("Invalid Email id format"));
            if (password !== confPassword) return (showError && showError("Password do not match"));
            if (!validateNumber(passcode)) return (showError && showError("Passcode must be a number"));
            if (passcode.length !== 4) return (showError && showError("Passcode must be 4 digits long"));
            if (passcode !== confPasscode) return (showError && showError("Passcode do not match"));

            onRegisterClick && onRegisterClick(username, username, email, password, passcode);
        } else showError && showError("Please fill all the input fields");
    }

    return (
        <form onSubmit={handleRegisterBtnClick} className={`formContainer ${className}`}>
            <img className="logoImg" alt="logoImg" src={logoImg} width={200} height={200} />
            <div className="logoTitle">{projectTitle}</div>

            {
                FIELDS.map(({ type, placeholder, key, maxLength, autoFocus }) => (
                    <input
                        {...{ placeholder, type, key, ...(maxLength ? { maxLength } : {}), ...(autoFocus ? { autoFocus } : {}) }}
                        className={`formInputField ${inputClassName}`}
                        value={state[key]}
                        onChange={(e) => setState(prev => ({ ...prev, [key]: e.target.value }))}
                    />
                ))
            }

            <ActionBtn
                className={btnClassName}
                showLoader={isRegisteringUser}
                text="Register"
                onClick={handleRegisterBtnClick}
            />
            <br />
        </form>
    )
}
