import AES from "crypto-js/aes";
import Utf8 from 'crypto-js/enc-utf8'
import MD5 from "crypto-js/md5";
// import { Utf8, AES, MD5 } from "crypto-js";

function encryptText(text: string, encryptionKey: string) {
    try {
        const encryptedValue = AES.encrypt(text, encryptionKey).toString();
        return encryptedValue;
    } catch {
        return null;
    }
}

function decryptText(enryptedValue: string, encryptionKey: string) {
    let value = null;
    try {
        const decrypted = AES.decrypt(enryptedValue, encryptionKey);
        value = Utf8.stringify(decrypted);
    } catch {
        return null;
    }

    return value;
}

function md5Hash(text: string) {
    try {
        return MD5(text).toString();
    } catch {
        return null;
    }
}

export default { encryptText, decryptText, md5Hash };