import encryptionUtil from "./encryptionUtil";
import { NO_INTERNET_ERROR } from "./constants";
import dayjs from "./dayjs";

const { decryptText, encryptText, md5Hash } = encryptionUtil;

async function getUserDetails(usersRef: any, userToken: string) {
    console.log("getUserDetails")
    try {
        let toReturn = { statusCode: 500, data: {}, msg: "" };

        await usersRef
            .child(userToken)
            .once('value')
            .then(async (resp: any) => {
                const response = resp.val();
                const { name, email, username } = response || {};

                if (username) {
                    toReturn.statusCode = 200;
                    toReturn.msg = "success";
                    toReturn.data = { name, email, username };
                } else {
                    toReturn.msg = "user not found";
                }
            })
            .catch((error: any) => {
                toReturn.msg = error.message;
            });

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function verifyLogin(usersRef: any, username: string, password: string, encryptionKey: string) {
    console.log("verifyLogin")
    try {
        let toReturn = { statusCode: 500, data: {}, msg: "", token: "" };

        await usersRef
            .once('value')
            .then(async (resp: any) => {
                const response: { [key: string]: any } = resp.val() || {};
                const loggedUserDetails = Object.values(response).filter((user: any) => {
                    return ((user.username === username) && (decryptText(user.password, encryptionKey) === password))
                });
                if (loggedUserDetails.length === 1) {
                    const { name, email, username, userToken } = loggedUserDetails[0] || {};
                    toReturn.statusCode = 200;
                    toReturn.msg = "success";
                    toReturn.data = { name, email, username };
                    toReturn.token = userToken;
                } else {
                    toReturn.msg = "invalid login credentials";
                }
            })
            .catch((error: any) => {
                toReturn.msg = error.message;
            });
        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function registerNewUser(usersRef: any, username: string, name: string, email: string, password: string, passcode: string, encryptionKey: string) {
    console.log("registerNewUser")
    try {
        let toReturn = { statusCode: 500, data: false, msg: "" };

        const userToken = md5Hash(username + encryptionKey);
        await usersRef
            .child(userToken)
            .once('value')
            .then(async (resp: any) => {
                const response = resp.val();
                if (response) {
                    toReturn.msg = "username is already taken";
                } else {
                    await usersRef
                        .child(userToken)
                        .set({
                            userToken,
                            username,
                            name,
                            email,
                            password: encryptText(password, encryptionKey),
                            passcode: encryptText(passcode, encryptionKey),
                            lastActive: dayjs().format(),
                            addedOn: dayjs().format(),
                            userChatRooms: {}
                        },
                            (error: any) => {
                                try {
                                    if (error) {
                                        toReturn.msg = error.message;
                                    } else {
                                        toReturn.statusCode = 200;
                                        toReturn.msg = "success";
                                    }
                                } catch (error: any) {
                                    toReturn.msg = error.message;
                                }
                            });
                }
            })
            .catch((error: any) => {
                toReturn.msg = error.message;
            });

        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

async function verifyPassCode(usersRef: any, userToken: string, passcode: string, encryptionKey: string) {
    console.log("verifyPassCode")
    try {
        let toReturn = { statusCode: 500, data: false, msg: "" };

        await usersRef
            .child(userToken)
            .once('value')
            .then(async (resp: any) => {
                const response = resp.val();
                const { passcode: dbPassCode } = response || {};

                if (decryptText(dbPassCode, encryptionKey) === passcode) {
                    toReturn.statusCode = 200;
                    toReturn.msg = "success";
                } else {
                    toReturn.statusCode = 400;
                    toReturn.msg = "wrong pass code";
                }
            })
            .catch((error: any) => {
                toReturn.msg = error.message;
            });
        return toReturn;
    } catch {
        return NO_INTERNET_ERROR;
    }
}

export default { getUserDetails, verifyLogin, registerNewUser, verifyPassCode }