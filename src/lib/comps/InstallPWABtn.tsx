import React from "react";
import PWAInstallProvider, { useReactPWAInstall } from './PWAInstallProvider';
import pwaIcon from "./pwa.svg";
import styles from "./InstallPWABtn.module.css";

interface InstallPWABtnProps {
    styles?: { [key: string]: any },
    title?: string,
    onSuccess?: (...args: any) => void,
    onError?: (...args: any) => void,
}
export default function InstallPWABtn({
    styles: {
        className = "",
    } = {},
    title = "",
    onSuccess = (...args: any) => { },
    onError = (...args: any) => { },
}: InstallPWABtnProps) {
    return (
        <PWAInstallProvider enableLogging>
            <Btn className={className} title={title} onSuccess={onSuccess} onError={onError} />
        </PWAInstallProvider>
    )
}

function Btn({ className, title, onSuccess, onError }: { [key: string]: any }) {
    //@ts-ignore
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

    function handleClick() {
        pwaInstall({ title: title || "Install Web App" }).then(() => { onSuccess && onSuccess() }).catch(() => { onError && onError() });
    }

    // if (!supported()) return <></>;
    return (
        <div className={`${styles.pwaBtn} ${className}`} onClick={handleClick}>
            <img alt="pwaIcon" src={pwaIcon} width={67} height={50} />
            Install Web App
        </div>
    )
}
