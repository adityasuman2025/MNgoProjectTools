import React, { useState, useRef, useEffect, createContext, useContext, ReactElement } from "react";
import { isMobile, isAndroid, isFirefox, isIOS, isOpera, browserVersion } from "mobile-device-detect";
import Modal from "./Modal";
import "./PWAInstallProvider.css";

function InstallDialog({
    yesClassName,
    open,
    title,
    platform,
    onClose,
    onSubmit,
}: { [key: string]: any }) {
    function renderOkBtn() {
        return <div className="pwaInstallBtns"><button className={yesClassName} onClick={onClose}>Ok</button></div>
    }

    return (
        <Modal open={open} title={title || "Install Web App"} onClose={onClose} >
            <div>
                {platform === PLATFORMS.NATIVE && (
                    <div className="pwaInstallBtns">
                        <button className={yesClassName} onClick={onSubmit}>Install</button>
                        <button className="cancelBtn" onClick={onClose}>Cancel</button>
                    </div>
                )}
                {platform === PLATFORMS.IDEVICE && (
                    <div>
                        <div className="pwaContentLine">
                            <div>Tap the share button:</div>
                            <svg viewBox="0 0 50 50">
                                <path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" />
                                <path d="M24 7h2v21h-2z" />
                                <path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z" />
                            </svg>
                        </div>

                        then find and tap 'Add to Home Screen'
                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.FIREFOX && (
                    <div>
                        <div className="pwaContentLine">
                            <div>Tap this icon on the address bar:</div>
                            <svg viewBox="0 0 700.000000 700.000000">
                                <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)">
                                    <path
                                        d="M3341 6328 c-29 -8 -266 -235 -614 -585 -4 -5 -149 -150 -323 -323
-173 -173 -323 -323 -332 -332 -9 -9 -156 -157 -327 -327 -170 -170 -316 -316
-323 -323 -7 -7 -140 -141 -295 -298 -322 -325 -367 -382 -374 -474 -5 -64 -3
-70 62 -170 36 -56 66 -68 178 -69 153 -2 160 1 274 113 56 54 105 105 110
112 4 8 34 29 67 47 99 55 91 141 93 -932 3 -1047 6 -1108 61 -1194 17 -26 37
-64 45 -83 8 -19 30 -54 50 -78 20 -23 38 -50 42 -60 6 -17 42 -46 133 -109
26 -18 60 -42 76 -54 15 -12 56 -30 90 -40 33 -9 83 -27 110 -39 34 -15 83
-25 160 -32 63 -5 599 -7 1251 -6 1029 3 1145 5 1190 20 28 9 79 26 115 38 66
22 86 31 180 85 71 41 226 198 241 244 7 20 25 51 40 69 29 32 32 42 44 117 4
22 16 69 28 105 22 64 22 73 27 1000 3 514 7 936 8 937 1 2 13 10 26 18 35 23
47 14 184 -126 64 -67 128 -127 142 -134 35 -17 153 -26 228 -17 58 8 67 12
103 52 23 24 45 52 50 61 12 23 12 201 -1 233 -5 14 -577 594 -1271 1288
-1233 1232 -1264 1262 -1308 1269 -64 11 -199 9 -240 -3z m167 -632 c33 -18
1354 -1341 1373 -1376 12 -21 15 -228 17 -1189 2 -660 -1 -1199 -6 -1246 -11
-93 -20 -110 -109 -201 -34 -35 -65 -56 -91 -64 -28 -7 -405 -10 -1246 -8
l-1205 3 -28 23 c-15 12 -42 32 -60 45 -21 14 -47 51 -74 103 l-41 82 1 1202
1 1203 28 45 c15 25 329 348 697 718 493 496 676 673 693 674 13 0 35 -6 50
-14z"
                                    ></path>
                                    <path
                                        d="M3403 4280 c-66 -40 -67 -49 -73 -421 -4 -257 -8 -340 -18 -352 -25
-29 -108 -37 -401 -37 l-289 0 -48 -32 c-31 -22 -57 -49 -72 -80 -21 -41 -23
-51 -12 -82 17 -51 68 -102 115 -115 22 -5 174 -12 337 -15 240 -4 303 -8 327
-21 61 -31 61 -31 61 -355 1 -162 5 -314 9 -338 14 -72 85 -132 157 -132 29 0
46 9 83 42 25 23 51 53 58 67 9 19 12 119 13 348 l0 323 29 32 29 33 314 0
313 1 60 29 c57 28 61 33 72 79 14 57 5 116 -24 148 -10 11 -36 31 -59 44 -41
24 -43 24 -368 27 l-328 2 -19 24 c-18 22 -19 43 -19 336 0 172 -3 326 -6 342
-3 16 -25 50 -49 76 -42 46 -44 47 -101 47 -41 0 -69 -6 -91 -20z"
                                    ></path>
                                </g>
                            </svg>
                        </div>

                        then tap '+Add to Homescreen'
                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.FIREFOX_NEW && (
                    <div>
                        <div className="pwaContentLine">
                            <div>Tap the ellipsis button:</div>
                            <svg viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                    fill="context-fill"
                                    fillOpacity=".8"
                                ></path>
                            </svg>
                        </div>

                        then tap 'Install'
                        {renderOkBtn()}
                    </div>
                )}
                {platform === PLATFORMS.OPERA && (
                    <div>
                        <div className="pwaContentLine">
                            <div>Tap the ellipsis button:</div>
                            <svg viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                    fill="context-fill"
                                    fillOpacity=".8"
                                ></path>
                            </svg>
                        </div>
                        <div className="pwaContentLine">
                            then tap '
                            <svg viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4zm2 .51A.51.51 0 0 1 7.51 4h8.98a.51.51 0 0 1 .51.51v13.98a.51.51 0 0 1-.51.51H7.51a.51.51 0 0 1-.51-.51V4.51zM10.5 20a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3z"
                                    fill="context-fill"
                                    fillOpacity=".8"
                                ></path>
                            </svg>
                            Home screen'
                        </div>

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