import { decryptText, encryptText } from "./encryptionUtils";

export function getCachedFromLStorage(key: string, encryptionKey: string, defaultVal: any = null) {
    try {
        const encrStr = localStorage.getItem(key);
        if (encrStr) {
            const str = decryptText(encrStr, encryptionKey);
            if (str) return JSON.parse(str);
            else return defaultVal;
        } else return defaultVal;
    } catch (e) {
        return defaultVal;
    }
}

export function cacheInLStorage(key: string, val: any, encryptionKey: string) {
    try {
        if (!val || !key || !encryptionKey) return;

        const str = JSON.stringify(val);
        const encrStr = encryptText(str, encryptionKey);
        localStorage.setItem(key, encrStr);
    } catch (e) { }
}
