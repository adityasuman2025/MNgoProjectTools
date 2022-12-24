import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingAnimation, PWAInstallProvider, useReactPWAInstall } from "./lib";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Comp />);
function Comp() {
    return <PWAInstallProvider enableLogging><App /></PWAInstallProvider>
}

function App() {
    //@ts-ignore
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
    function handleClick() {
        pwaInstall({ title: "Install MNgo Notes Web App", yesClassName: "yesBiro" })
            .then(() => console.log("App installed successfully or instructions for install shown"))
            .catch(() => console.log("User opted out from installing"));
    }

    return (
        <>
            <LoadingAnimation loading />
            <div>
                {supported() && !isInstalled() && (
                    <button type="button" onClick={handleClick}>Install App</button>
                )}
            </div>
        </>
    )
}