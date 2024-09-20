export const FB_ID_TOKEN_KEY = 'fb-id-token';

export function getCookie(cookieName: string) {
    try {
        let name = cookieName + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);

            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return null;
    } catch { }

    return null;
}

export function setCookie(cname: string, cvalue: string, inpExpires: Date, path: string = "/") {
    try {
        const d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + (<any>(inpExpires || d)).toUTCString();

        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + (path || "/");
        return true;
    } catch {
        return false;
    }
}

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export function getLoggedUserToken(loggedUserTokenCookieName: any) {
    return getCookie(loggedUserTokenCookieName);
}

export async function logout() {
    localStorage.clear();
    deleteAllCookies();
}
