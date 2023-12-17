import { decryptText, encryptText } from "./encryptionUtils";

export function getCachedFromLStorage(key: string, encryptionKey: string, defaultVal?: string) {
    try {
        const encrStr = localStorage.getItem(key);
        if (encrStr) {
            const str = decryptText(encrStr, encryptionKey);
            return JSON.parse(str || defaultVal || "{}");
        }
    } catch (e) { }
    return JSON.parse(defaultVal || "{}");
}

export function cacheInLStorage(key: string, val: any, encryptionKey: string) {
    try {
        const str = JSON.stringify(val || {});
        const encrStr = encryptText(str, encryptionKey);
        localStorage.setItem(key, encrStr);
    } catch (e) { }
}
