import React from "react";
import "./index.css";

import utils from "./utils";
import encryptionUtil from "./encryptionUtil";
import dayjs from "./dayjs";
import authApis from "./authApis";
const LoadingAnimation = React.lazy(() => import("./components/LoadingAnimation"));
const SnackBar = React.lazy(() => import("./components/SnackBar"));
const ConfirmDialog = React.lazy(() => import("./components/ConfirmDialog"));

export { utils, encryptionUtil, dayjs, authApis, LoadingAnimation, SnackBar, ConfirmDialog };