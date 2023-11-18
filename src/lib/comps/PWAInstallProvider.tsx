import React, { useState, useRef, useEffect, createContext, useContext, ReactElement } from "react";
import { isMobile, isAndroid, isFirefox, isIOS, isOpera, browserVersion } from "mobile-device-detect";
import Modal from "./Modal";
import styles from "./PWAInstallProvider.module.css";

const SHARE_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" /><path d="M24 7h2v21h-2z" /><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z" /></svg>;
const HOME_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700"><path d="M334.1 67.2c-2.9.8-26.6 23.5-61.4 58.5-.4.5-14.9 15-32.3 32.3l-33.2 33.2-32.7 32.7-32.3 32.3-29.5 29.8c-32.2 32.5-36.7 38.2-37.4 47.4-.5 6.4-.3 7 6.2 17 3.6 5.6 6.6 6.8 17.8 6.9 15.3.2 16-.1 27.4-11.3 5.6-5.4 10.5-10.5 11-11.2.4-.8 3.4-2.9 6.7-4.7 9.9-5.5 9.1-14.1 9.3 93.2.3 104.7.6 110.8 6.1 119.4 1.7 2.6 3.7 6.4 4.5 8.3s3 5.4 5 7.8c2 2.3 3.8 5 4.2 6 .6 1.7 4.2 4.6 13.3 10.9l7.6 5.4c1.5 1.2 5.6 3 9 4 3.3.9 8.3 2.7 11 3.9 3.4 1.5 8.3 2.5 16 3.2 6.3.5 59.9.7 125.1.6l119-2L486 587c6.6-2.2 8.6-3.1 18-8.5 7.1-4.1 22.6-19.8 24.1-24.4.7-2 2.5-5.1 4-6.9 2.9-3.2 3.2-4.2 4.4-11.7.4-2.2 1.6-6.9 2.8-10.5 2.2-6.4 2.2-7.3 2.7-100l.8-93.7c.1-.2 1.3-1 2.6-1.8 3.5-2.3 4.7-1.4 18.4 12.6 6.4 6.7 12.8 12.7 14.2 13.4 3.5 1.7 15.3 2.6 22.8 1.7 5.8-.8 6.7-1.2 10.3-5.2 2.3-2.4 4.5-5.2 5-6.1 1.2-2.3 1.2-20.1-.1-23.3-.5-1.4-57.7-59.4-127.1-128.8L358.1 66.9c-6.4-1.1-19.9-.9-24 .3zm16.7 63.2c3.3 1.8 135.4 134.1 137.3 137.6 1.2 2.1 1.5 22.8 1.7 118.9l-.6 124.6c-1.1 9.3-2 11-10.9 20.1-3.4 3.5-6.5 5.6-9.1 6.4-2.8.7-40.5 1-124.6.8l-120.5-.3-2.8-2.3c-1.5-1.2-4.2-3.2-6-4.5-2.1-1.4-4.7-5.1-7.4-10.3l-4.1-8.2.1-120.2.1-120.3 2.8-4.5c1.5-2.5 32.9-34.8 69.7-71.8 49.3-49.6 67.6-67.3 69.3-67.4 1.3 0 3.5.6 5 1.4zM340.3 272c-6.6 4-6.7 4.9-7.3 42.1-.4 25.7-.8 34-1.8 35.2-2.5 2.9-10.8 3.7-40.1 3.7h-28.9l-4.8 3.2c-3.1 2.2-5.7 4.9-7.2 8-2.1 4.1-2.3 5.1-1.2 8.2 1.7 5.1 6.8 10.2 11.5 11.5 2.2.5 17.4 1.2 33.7 1.5 24 .4 30.3.8 32.7 2.1 6.1 3.1 6.1 3.1 6.1 35.5.1 16.2.5 31.4.9 33.8 1.4 7.2 8.5 13.2 15.7 13.2 2.9 0 4.6-.9 8.3-4.2 2.5-2.3 5.1-5.3 5.8-6.7.9-1.9 1.2-11.9 1.3-34.8V392l2.9-3.2 2.9-3.3h31.4l31.3-.1 6-2.9c5.7-2.8 6.1-3.3 7.2-7.9 1.4-5.7.5-11.6-2.4-14.8-1-1.1-3.6-3.1-5.9-4.4-4.1-2.4-4.3-2.4-36.8-2.7l-32.8-.2-1.9-2.4c-1.8-2.2-1.9-4.3-1.9-33.6 0-17.2-.3-32.6-.6-34.2s-2.5-5-4.9-7.6c-4.2-4.6-4.4-4.7-10.1-4.7-4.1 0-6.9.6-9.1 2z" /></svg>;
const ELLIPSIS_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="context-fill" /></svg>;

interface InstallDialogProps {
    styles?: { [key: string]: string },
    open?: boolean,
    title?: string,
    platform?: string,
    onClose?: (...args: any) => void,
    onSubmit?: (...args: any) => void,
}
function InstallDialog({
    styles: {
        yesClassName = "",
    } = {},
    open = false,
    title = "",
    platform = "",
    onClose = (...args: any) => { },
    onSubmit = (...args: any) => { },
}: InstallDialogProps) {
    platform = PLATFORMS.OPERA;

    function renderOkBtn() {
        return <div className={styles.pwaInstallBtns}><button className={yesClassName} onClick={onClose}>Ok</button></div>
    }

    return (
        <Modal open={open} title={title || "Install Web App"} onClose={onClose} >
            <div>
                {platform === PLATFORMS.NATIVE && (
                    <div className={styles.pwaInstallBtns}>
                        <button className={yesClassName} onClick={onSubmit}>Install</button>
                        <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                    </div>
                )}
                {platform === PLATFORMS.IDEVICE && (
                    <div>
                        <div className={styles.pwaContentLine}><div>Tap the share button:</div> {SHARE_SVG}</div>
                        then find and tap 'Add to Home Screen'

                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.FIREFOX && (
                    <div>
                        <div className={styles.pwaContentLine}><div>Tap this icon on the address bar:</div> {HOME_SVG}</div>
                        then tap '+Add to Homescreen'

                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.FIREFOX_NEW && (
                    <div>
                        <div className={styles.pwaContentLine}><div>Tap the ellipsis button:</div> {ELLIPSIS_SVG}</div>
                        then tap 'Install'

                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.OPERA && (
                    <div>
                        <div className={styles.pwaContentLine}><div>Tap the ellipsis button:</div> {ELLIPSIS_SVG}</div>
                        <div className={styles.pwaContentLine}>then tap '{HOME_SVG} Home screen'</div>
                        then tap 'Install'

                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.OTHER && (
                    <div>
                        Unfortunately the install feature is not supported by your browser.
                        {renderOkBtn()}
                    </div>
                )}
            </div>
        </Modal>
    )
}

export const PLATFORMS = {
    NATIVE: "native", // currently: Chrome, Edge mobile, Samsung internet
    FIREFOX: "firefox",
    FIREFOX_NEW: "firefox_new", // above version 79
    OPERA: "opera",
    IDEVICE: "idevice",
    OTHER: "other", // don't know, so will do nothing
}
export function getDevice() {
    let platform = PLATFORMS.OTHER;
    if (window.hasOwnProperty("BeforeInstallPromptEvent")) {
        platform = PLATFORMS.NATIVE;
    } else if (isMobile && isAndroid && isFirefox && +browserVersion >= 79) {
        platform = PLATFORMS.FIREFOX_NEW;
    } else if (isMobile && isAndroid && isFirefox) {
        platform = PLATFORMS.FIREFOX;
    } else if (isOpera && isAndroid && isMobile) {
        platform = PLATFORMS.OPERA;
    } else if (isIOS && isMobile) {
        platform = PLATFORMS.IDEVICE;
    }
    return platform;
}

const platform = getDevice();
const PWAInstallContext = createContext(Promise.reject);
export const useReactPWAInstall = () => useContext(PWAInstallContext);

export default function PWAInstallProvider({ children, enableLogging }: { children: ReactElement, enableLogging: Boolean }) {
    const awaitingPromiseRef = useRef<any>();
    const deferredprompt = useRef<any>(null);
    const [dialogState, setDialogState] = useState<any>(null);
    const [contextValue, setContextValue] = useState<any>({
        supported: supported,
        isInstalled: isInstalled,
        pwaInstall: openDialog,
    });

    useEffect(() => {
        console.log("device", platform)
        window.addEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
        return function cleanup() {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPromptEvent);
        };
    }, []);

    function logger(message: any) {
        if (enableLogging) {
            console.log(message);
        }
    }

    function isInstalled() {
        //@ts-ignore
        if (window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches) {
            logger("isInstalled: true. Already in standalone mode");
            return true;
        }
        logger("isInstalled: false.");
        return false;
    }

    function supported() {
        if (deferredprompt.current != null && platform === PLATFORMS.NATIVE) {
            logger("supported: true - native platform");
            return true;
        }
        if (platform !== PLATFORMS.NATIVE && platform !== PLATFORMS.OTHER) {
            logger("supported: true - manual support");
            return true;
        }
        logger("supported: false");
        return false;
    }

    function handleBeforeInstallPromptEvent(event: any) {
        event.preventDefault();
        deferredprompt.current = event;
        logger("beforeinstallprompt event fired and captured");
        setContextValue({
            supported: supported,
            isInstalled: isInstalled,
            pwaInstall: openDialog,
        });
    }

    function openDialog(options: any) {
        setDialogState(options);
        return new Promise((resolve, reject) => {
            awaitingPromiseRef.current = { resolve, reject };
        });
    }

    function handleClose() {
        setDialogState(null);
        if (awaitingPromiseRef.current) {
            awaitingPromiseRef.current.reject();
        }
    }

    function handleInstall() {
        logger("handleInstall called");
        setDialogState(null);
        if (deferredprompt.current != null) {
            return deferredprompt.current
                .prompt()
                .then(() => deferredprompt.current.userChoice)
                .then((choiceResult: any) => {
                    if (choiceResult.outcome === "accepted") {
                        logger("PWA native installation succesful");
                        if (awaitingPromiseRef.current) {
                            awaitingPromiseRef.current.resolve();
                        }
                    } else {
                        logger("User opted out by cancelling native installation");
                        if (awaitingPromiseRef.current) {
                            awaitingPromiseRef.current.reject();
                        }
                    }
                })
                .catch((err: any) => {
                    if (awaitingPromiseRef.current) {
                        awaitingPromiseRef.current.resolve();
                    }
                    logger("Error occurred in the installing process: " + err);
                });
        } else {
            if (awaitingPromiseRef.current) {
                awaitingPromiseRef.current.resolve();
            }
        }
    }

    return (
        <>
            <PWAInstallContext.Provider value={contextValue} children={children} />
            <InstallDialog
                open={Boolean(dialogState)}
                onSubmit={handleInstall}
                onClose={handleClose}
                platform={platform}
                {...dialogState}
            />
        </>
    )
}
//ref: https://github.com/zoltangy/react-pwa-install