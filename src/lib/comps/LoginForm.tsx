import React, { useState } from 'react';
import ActionBtn from "./ActionBtn";
import SignInUpButton from "./SignInUpButton";
import getLogoImg from "../getLogoImg";
import "./LoginSignUpForm.css";

function cx(...args: string[]) {
    return args.join(" ");
}

export default function LoginForm({
    className,
    inputClassName,
    btnClassName,
    projectTitle = "MNgo",
    logoImg = getLogoImg(),
    isLoggingUser,
    children,
    showError,
    onLoginClick,
    onSignUpClick,
}: { [key: string]: any }) {
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
        <div className={cx("formContainer", className)}>
            <img className="logoImg" alt="logoImg" src={logoImg} width={200} height={200} />
            <div className="logoTitle">{projectTitle}</div>

            <form onSubmit={handleLoginBtnClick} className={"formContainer"}>
                <input
                    type="text"
                    className={cx("formInputField", inputClassName)}
                    placeholder="Username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className={cx("formInputField", inputClassName)}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ActionBtn
                    className={btnClassName}
                    showLoader={isLoggingUser}
                    text="Login"
                    onClick={handleLoginBtnClick}
                />
            </form>

            <SignInUpButton otherText="Don't have an account yet?" buttonText="Signup" onClick={onSignUpClick} />

            <br />{children}<br />
        </div>
    )
}