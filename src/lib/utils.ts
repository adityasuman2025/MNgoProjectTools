export function getCookieValue(cookieName: string) {
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

export function makeCookie(cname: string, cvalue: string, inpExpires: Date, path: string = "/") {
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

export function validateUsername(name: string) {
    var re = /^[a-zA-Z0-9_]*$/;
    return re.test(name);
}

export function validateName(name: string) {
    var re = /^[a-zA-Z0-9 ]*$/;
    return re.test(name);
}

export function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function validateNumber(number: any) {
    var re = /^[0-9]*$/;
    return re.test(number);
}

export function getLoggedUserToken(loggedUserTokenCookieName: any) {
    return getCookieValue(loggedUserTokenCookieName);
}

export function isEmpty(obj: any) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        //@ts-ignore
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

export async function sendRequestToAPI(baseUrl: string, endpoint: string, method: string = "get", body?: { [key: string]: any }) {
    const requestAddress = baseUrl + endpoint;
    const response = await fetch(requestAddress, {
        method,
        ...(method.toLowerCase() === "get" ? {} : {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body || {})
        })
    });
    return await response.json();
}

export async function logout() {
    localStorage.clear();
    deleteAllCookies();
}

export function cx(...args: string[]) {
    return args.join(" ");
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