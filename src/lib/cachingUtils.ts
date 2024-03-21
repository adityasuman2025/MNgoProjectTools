export function getCacheRegular(key: string, defaultVal: any = null) {
    try {
        const str = localStorage.getItem(key);
        if (str) return JSON.parse(str);
        else return defaultVal;
    } catch (e) {
        return defaultVal;
    }
}

export function setCacheRegular(key: string, val: any) {
    try {
        if (!val || !key) return;

        const str = JSON.stringify(val);
        localStorage.setItem(key, str);
    } catch (e) { }
}