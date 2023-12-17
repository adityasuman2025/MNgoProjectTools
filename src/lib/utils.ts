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