import React, { useState } from 'react';
import { validateUsername, validateEmail, validateNumber } from "../utils";
import ActionBtn from "./ActionBtn";
import getLogoImg from "../getLogoImg";
import "./LoginSignUpForm.css";

function cx(...args: string[]) {
    return args.join(" ");
}

export default function RegisterForm({
    className,
    inputClassName,
    btnClassName,
    projectTitle = "MNgo",
    logoImg = getLogoImg(),
    isRegisteringUser,
    showError,
    onRegisterClick,
}: { [key: string]: any }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [passcode, setPasscode] = useState("");
    const [confPasscode, setConfPasscode] = useState("");

    function handleRegisterBtnClick(e: any) {
        e.preventDefault();

        if (isRegisteringUser) return;

        if (username !== "" && email !== "" && password !== "" && confPassword !== "" && passcode !== "" && confPasscode !== "") {
            if (!validateUsername(username)) {
                showError && showError("Username cannot contain symbol and spaces");
                return;
            }
            if (!validateEmail(email)) {
                showError && showError("Invalid Email id format");
                return;
            }
            if (password !== confPassword) {
                showError && showError("Password do not match");
                return;
            }
            if (!validateNumber(passcode)) {
                showError && showError("Passcode must be a number");
                return;
            }
            if (passcode.length !== 4) {
                showError && showError("Passcode must be 4 digits long");
                return;
            }
            if (passcode !== confPasscode) {
                showError && showError("Passcode do not match");
                return;
            }

            onRegisterClick && onRegisterClick(username, username, email, password, passcode);
        } else {
            showError && showError("Please fill all the input fields");
        }
    }

    return (
        <form onSubmit={handleRegisterBtnClick} className={cx("formContainer", className)}>
            <img className="logoImg" alt="logoImg" src={logoImg} width={200} height={200} />
            <div className="logoTitle">{projectTitle}</div>
            <input
                type="text"
                className={cx("formInputField", inputClassName)}
                placeholder="Username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="email"
                className={cx("formInputField", inputClassName)}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                className={cx("formInputField", inputClassName)}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type="password"
                className={cx("formInputField", inputClassName)}
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
            />

            <input
                type="password"
                className={cx("formInputField", inputClassName)}
                placeholder="Passcode"
                value={passcode}
                maxLength={4}
                onChange={(e) => setPasscode(e.target.value)}
            />

            <input
                type="password"
                className={cx("formInputField", inputClassName)}
                placeholder="Confirm Passcode"
                value={confPasscode}
                maxLength={4}
                onChange={(e) => setConfPasscode(e.target.value)}
            />

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
