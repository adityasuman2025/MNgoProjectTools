import React from "react";
import "./index.css";

import utils from "./utils";
import encryptionUtil from "./encryptionUtil";
import dayjs from "./dayjs";
import authApis from "./authApis";

const LoadingAnimation = React.lazy(() => import("./components/LoadingAnimation"));
const SnackBar = React.lazy(() => import("./components/SnackBar"));
const ConfirmDialog = React.lazy(() => import("./components/ConfirmDialog"));
const Modal = React.lazy(() => import("./components/Modal"));
const PWAInstallProvider = React.lazy(() => import("./components/PWAInstallProvider"));
import { useReactPWAInstall } from "./components/PWAInstallProvider";

export { utils, encryptionUtil, dayjs, authApis, LoadingAnimation, SnackBar, ConfirmDialog, Modal, PWAInstallProvider, useReactPWAInstall };