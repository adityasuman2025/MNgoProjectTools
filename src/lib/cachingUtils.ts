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

export function setInWindowObjCache(cacheKey: any, key: any, value: any) {
    try {
        if (typeof window === 'undefined') return console.log('Window object does not exist');
        if (!key || !cacheKey) return;

        window[cacheKey] = window[cacheKey] || {};
        window[cacheKey][key] = value;
    } catch (e) { }
}

export function getInWindowObjCache(cacheKey: any, key: any, defaultVal = undefined) {
    try {
        if (typeof window === 'undefined') return defaultVal;
        if (!key || !cacheKey) return defaultVal;

        return window[cacheKey][key]
    } catch (e) {
        return defaultVal;
    }
}

export function deleteInWindowObjCache(cacheKey: any, key: any) {
    try {
        if (typeof window === 'undefined') return console.log('Window object does not exist');
        if (!key || !cacheKey) return;

        const { [key]: _, ...rest }: any = window[cacheKey] || {};
        window[cacheKey] = rest;
    } catch (e) { }
}
