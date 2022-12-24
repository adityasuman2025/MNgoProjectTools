//error variables
export const SOMETHING_WENT_WRONG_ERROR = { statusCode: 500, msg: "Something went wrong" };
export const NO_INTERNET_ERROR = { statusCode: 500, msg: "API Connection Failed" };
export const PLATFORMS = {
    NATIVE: "native", // currently: Chrome, Edge mobile, Samsung internet
    FIREFOX: "firefox",
    FIREFOX_NEW: "firefox_new", // above version 79
    OPERA: "opera",
    IDEVICE: "idevice",
    OTHER: "other", // don't know, so will do nothing
};