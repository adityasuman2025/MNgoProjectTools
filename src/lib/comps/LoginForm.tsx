import React, { useState } from 'react';
import ActionBtn from "./ActionBtn";
import SignInUpButton from "./SignInUpButton";
import getLogoImg from "../getLogoImg";
import styles from "./LoginSignUpForm.module.css";

interface LoginFormProps {
    styles?: { [key: string]: string },
    projectTitle?: string,
    logoImg?: any,
    isLoggingUser?: boolean,
    hideSignUpBtn?: boolean,
    children?: React.ReactNode | String,
    showError?: (...args: any) => void,
    onLoginClick?: (...args: any) => void,
    onSignUpClick?: (...args: any) => void,
}
export default function LoginForm({
    styles: {
        className = "",
        inputClassName = "",
        btnClassName = "",
    } = {},
    projectTitle = "MNgo",
    logoImg = getLogoImg(),
    isLoggingUser = false,
    hideSignUpBtn = false,
    children = "",
    showError = (...args: any) => { },
    onLoginClick = (...args: any) => { },
    onSignUpClick = (...args: any) => { },
}: LoginFormProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginBtnClick(e: any) {
        e.preventDefault();

        if (isLoggingUser) return;

        if (username !== "" && password !== "") {
            onLoginClick && onLoginClick(username, password);
        } else {
            showError && showError("Please fill all the input fields");
        }
    }

    return (
        <div className={`${styles.formContainer} ${className}`}>
            <img alt="logoImg" src={logoImg} width={250} height={250} />
            <p className={styles.logoTitle}>{projectTitle}</p>

            <form onSubmit={handleLoginBtnClick} className={styles.formContainer}>
                <input
                    type="text"
                    className={`${styles.formInputField} ${inputClassName}`}
                    placeholder="Username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className={`${styles.formInputField} ${inputClassName}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ActionBtn
                    styles={{
                        className: btnClassName
                    }}
                    showLoader={isLoggingUser}
                    text="Login"
                    onClick={handleLoginBtnClick}
                />
            </form>

            {
                !hideSignUpBtn && <SignInUpButton otherText="Don't have an account yet?" buttonText="Signup" onClick={onSignUpClick} />
            }

            <br />{children}<br />
        </div>
    )
}