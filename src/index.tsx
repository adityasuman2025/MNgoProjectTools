import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import ActionBtn from './lib/comps/ActionBtn';
import BottomModal from './lib/comps/BottomModal';
import ConfirmDialog from './lib/comps/ConfirmDialog';
import FileInput from './lib/comps/FileInput';
import FullScreenLoader from './lib/comps/FullScreenLoader';
import ImageViewer from './lib/comps/ImageViewer';
import ImageWithLoader from './lib/comps/ImageWithLoader';
import InstallPWABtn from './lib/comps/InstallPWABtn';
import LoadingAnimation from './lib/comps/LoadingAnimation';
import LoginForm from './lib/comps/LoginForm';
import Modal from './lib/comps/Modal';
import RegisterForm from './lib/comps/RegisterForm';
import SnackBar from './lib/comps/SnackBar';
import VerifyPassCode from './lib/comps/VerifyPassCode';
import { makeCookie, getCookieValue } from './lib/utils';
import { encryptText, decryptText } from './lib/encryptionUtil';

// import ActionBtn from './dist/comps/ActionBtn';
// import ConfirmDialog from './dist/comps/ConfirmDialog';
// import ImageViewer from './dist/comps/ImageViewer';
// import ImageWithLoader from './dist/comps/ImageWithLoader';
// import InstallPWABtn from './dist/comps/InstallPWABtn';
// import LoadingAnimation from './dist/comps/LoadingAnimation';
// import LoginForm from './dist/comps/LoginForm';
// import Modal from './dist/comps/Modal';
// import RegisterForm from './dist/comps/RegisterForm';
// import SnackBar from './dist/comps/SnackBar';
// import VerifyPassCode from './dist/comps/VerifyPassCode';
// import { makeCookie, getCookieValue } from './dist/utils';
// import { encryptText, decryptText } from './dist/encryptionUtil';


function App() {
    useEffect(() => {
        const COOKIE_EXPIRATION_MINS = 30 * 24 * 60; // 30 days

        let COOKIE_EXPIRATION_TYM = new Date();
        COOKIE_EXPIRATION_TYM.setTime(COOKIE_EXPIRATION_TYM.getTime() + (COOKIE_EXPIRATION_MINS * 60 * 1000));

        makeCookie("biro", "isBack", COOKIE_EXPIRATION_TYM)

        const cook = getCookieValue("biro");
        console.log("cookie", cook)

        const enc = encryptText("yo biro", "yoyo");
        const dec = decryptText(enc, "yoyo");
        console.log("dec", dec)
    }, []);

    return (
        <>
            <ActionBtn
                text="df"
                onClick={(e: any) => {
                    console.log(e)
                }}
            />

            <BottomModal

            >
                yo biro
            </BottomModal>

            {/* <ConfirmDialog
                open={true}
                title="yo biro"
                content="nyc pik"
                onClose={(e: any) => {
                    console.log(e)
                }}
            /> */}

            <FileInput onChange={(e) => { console.log(e.target.files) }} />

            <FullScreenLoader>
                <h1 className='mngo-text-2xl'>Welcome to the MNgo Quiz</h1>
            </FullScreenLoader>

            {/* <ImageViewer
                src={"https://firebasestorage.googleapis.com/v0/b/documents-b4b54.appspot.com/o/Achievement%2FWeb%20Vital%20-%20Notes%20App.png?alt=media"}
                onClose={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <ImageWithLoader
                src={"https://firebasestorage.googleapis.com/v0/b/documents-b4b54.appspot.com/o/Achievement%2FWeb%20Vital%20-%20Notes%20App.png?alt=media"}
                onClick={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <InstallPWABtn
                onSuccess={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <LoadingAnimation loading /> */}

            {/* <LoginForm showError={(e: any) => console.log(e)} hideSignUpBtn /> */}

            {/* 
            <Modal open
                title='yo biro'
                onClose={(e: any) => {
                    console.log(e)
                }}
            >
                <div>yo biro</div>
            </Modal> */}

            {/* <RegisterForm
                showError={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <SnackBar
                open msg="hello world"
                onClose={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <VerifyPassCode
                onVerifyClick={(e: any) => {
                    console.log(e)
                }}
            /> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
