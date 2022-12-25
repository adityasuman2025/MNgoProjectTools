import React from "react";
import PWAInstallProvider, { useReactPWAInstall } from './PWAInstallProvider';
import pwaImg from "./pwa.webp";
import "./InstallPWABtn.css";

export default function InstallPWABtn({ className, title, onSuccess, onError }: { [key: string]: any }) {
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
        <div className={["pwaBtn", className].join(" ")} onClick={handleClick}>
            <img alt="pwaImg" src={pwaImg} width={67} height={50} />
            Install Web App
        </div>
    )
}
