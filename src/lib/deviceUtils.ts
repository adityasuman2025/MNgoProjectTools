export const DEVICE_MOBILE = 'Mobile';
export const DEVICE_TABLET = 'Tablet';
export const DEVICE_DESKTOP = 'Desktop';

export const OS_WINDOWS = 'Windows';
export const OS_MAC = 'Mac OS';
export const OS_LINUX = 'Linux';
export const OS_ANDROID = 'Android';
export const OS_IOS = 'iOS';
export const OS_UNKNOWN = 'Unknown OS';

export const BROWSER_FIREFOX = 'Firefox';
export const BROWSER_CHROME = 'Chrome';
export const BROWSER_SAFARI = 'Safari';
export const BROWSER_EDGE = 'Edge';
export const BROWSER_OPERA = 'Opera';
export const BROWSER_UNKNOWN = 'Unknown Browser';

export function detectDevice() {
    const userAgent = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return DEVICE_MOBILE;
    } else if (/Tablet|iPad/i.test(userAgent)) {
        return DEVICE_TABLET;
    } else {
        return DEVICE_DESKTOP;
    }
}

export function detectOperatingSystem() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Windows')) {
        return OS_WINDOWS;
    } else if (userAgent.includes('Mac OS') || userAgent.includes('MacOS')) {
        return OS_MAC;
    } else if (userAgent.includes('Linux')) {
        return OS_LINUX;
    } else if (userAgent.includes('Android')) {
        return OS_ANDROID;
    } else if (userAgent.includes('iOS')) {
        return OS_IOS;
    } else {
        return OS_UNKNOWN;
    }
}

export function detectBrowser() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Firefox')) {
        return BROWSER_FIREFOX;
    } else if (userAgent.includes('Chrome')) {
        return BROWSER_CHROME;
    } else if (userAgent.includes('Safari')) {
        return BROWSER_SAFARI;
    } else if (userAgent.includes('Edge')) {
        return BROWSER_EDGE;
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
        return BROWSER_OPERA;
    } else {
        return BROWSER_UNKNOWN;
    }
}

export function isMobile() {
    return detectDevice() === DEVICE_MOBILE;
}

export function isAndroid() {
    return detectOperatingSystem() === OS_ANDROID;
}

export function isFirefox() {
    return detectBrowser() === BROWSER_FIREFOX;
}

export function isIOS() {
    return detectOperatingSystem() === OS_IOS;
}

export function isOpera() {
    return detectBrowser() === BROWSER_OPERA;
}

export function getDeviceDetails() {
    return {
        device: detectDevice(),
        os: detectOperatingSystem(),
        browser: detectBrowser()
    };
}