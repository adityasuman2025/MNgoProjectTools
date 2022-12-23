import encryptionUtil from "./encryptionUtil";
import { NO_INTERNET_ERROR } from "./constants";
import utils from "./utils";
import dayjs from "./dayjs";

const { decryptText, encryptText, md5Hash } = encryptionUtil;

async function getUserDetails(baseUrl: string, usersRef: any, userToken: string) {
    console.log("getUserDetails")
    try {
        let toReturn = { statusCode: 500, data: {}, msg: "something went wrong" };

        if (baseUrl) {
            const response = await utils.sendRequestToAPI(baseUrl, `/${usersRef}/${userToken}.json`);
            const { name, email, username } = response || {};
            if (username) {
                toReturn = { ...toReturn, statusCode: 200, msg: "success" };
                toReturn.data = { name, email, username };
            } else {
                toReturn.msg = "user not found";
            }
        }

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function verifyLogin(baseUrl: string, usersRef: any, username: string, password: string, encryptionKey: string) {
    console.log("verifyLogin")
    try {
        let toReturn: any = { statusCode: 500, data: {}, msg: "something went wrong" };

        if (baseUrl) {
            const userToken = md5Hash(username + encryptionKey);
            const response = await utils.sendRequestToAPI(baseUrl, `/${usersRef}/${userToken}.json`) || {};

            if (Object.keys(response).length) {
                if (decryptText(response.password, encryptionKey) === password) {
                    const { name, email, username } = response || {};
                    toReturn = { ...toReturn, statusCode: 200, msg: "success" };
                    toReturn.data = { name, email, username };
                    toReturn.token = userToken;
                } else {
                    toReturn.msg = "wrong password";
                }
            } else {
                toReturn.msg = "username not found";
            }
        }

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function registerNewUser(baseUrl: string, usersRef: any, username: string, name: string, email: string, password: string, passcode: string, encryptionKey: string) {
    console.log("registerNewUser")
    try {
        let toReturn: any = { statusCode: 500, data: {}, msg: "something went wrong" };

        if (baseUrl) {
            const userToken = md5Hash(username + encryptionKey);
            const checkUser = await getUserDetails(baseUrl, usersRef, userToken);
            if (checkUser.statusCode === 200) {
                toReturn = { ...toReturn, statusCode: 400, msg: "username is already taken" };
            } else {
                const response = await utils.sendRequestToAPI(baseUrl, `/${usersRef}/${userToken}.json`, "PUT", {
                    userToken,
                    username,
                    name,
                    email,
                    password: encryptText(password, encryptionKey),
                    passcode: encryptText(passcode, encryptionKey),
                    lastActive: dayjs().format(),
                    addedOn: dayjs().format(),
                    userChatRooms: {}
                }) || {};
                if (response.username) {
                    toReturn = { ...toReturn, statusCode: 200, msg: "success" };
                } else {
                    toReturn.msg = "failed to register";
                }
            }
        }

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function verifyPassCode(baseUrl: string, usersRef: any, userToken: string, passcode: string, encryptionKey: string) {
    console.log("verifyPassCode")
    try {
        let toReturn: any = { statusCode: 500, data: {}, msg: "something went wrong" };

        if (baseUrl) {
            const response = await utils.sendRequestToAPI(baseUrl, `/${usersRef}/${userToken}.json`) || {};
            if (decryptText(response.passcode, encryptionKey) === passcode) {
                toReturn = { ...toReturn, statusCode: 200, msg: "success" };
            } else {
                toReturn = { ...toReturn, statusCode: 400, msg: "wrong pass code" };
            }
        }

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

export default { getUserDetails, verifyLogin, registerNewUser, verifyPassCode }