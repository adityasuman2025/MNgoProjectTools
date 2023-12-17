export function getCacheRegular(key: string, defaultVal?: string) {
    try {
        const str = localStorage.getItem(key);
        return JSON.parse(str || defaultVal || "{}");
    } catch (e) { }
    return JSON.parse(defaultVal || "{}");
}

export function setCacheRegular(key: string, val: any) {
    try {
        const str = JSON.stringify(val || {});
        localStorage.setItem(key, str);
    } catch (e) { }
}