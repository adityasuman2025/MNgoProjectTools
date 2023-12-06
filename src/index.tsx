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
import Loader from './lib/comps/Loader';
import LoginForm from './lib/comps/LoginForm';
import Modal from './lib/comps/Modal';
import RegisterForm from './lib/comps/RegisterForm';
import SnackBar from './lib/comps/SnackBar';
import VerifyPassCode from './lib/comps/VerifyPassCode';
import { makeCookie, getCookieValue } from './lib/utils';
import { encryptText, decryptText } from './lib/encryptionUtil';
import getLogoImg from './lib/getLogoImgXxs';

// import ActionBtn from './dist/comps/ActionBtn';
// import ConfirmDialog from './dist/comps/ConfirmDialog';
// import ImageViewer from './dist/comps/ImageViewer';
// import ImageWithLoader from './dist/comps/ImageWithLoader';
// import InstallPWABtn from './dist/comps/InstallPWABtn';
// import Loader from './dist/comps/Loader';
// import LoginForm from './dist/comps/LoginForm';
// import Modal from './dist/comps/Modal';
// import RegisterForm from './dist/comps/RegisterForm';
// import SnackBar from './dist/comps/SnackBar';
// import VerifyPassCode from './dist/comps/VerifyPassCode';
// import { makeCookie, getCookieValue } from './dist/utils';
// import { encryptText, decryptText } from './dist/encryptionUtil';

const solution = `<div id="modalDescription" class="_mngo-modal-content_1r8h7_53"><div class=""><a id="t.ff6afe46f968dd172d90286dd11b224bed228eed"></a><a id="t.0"></a><table class="c34"><tbody><tr class="c83"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Data Structure</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Insertion</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Deletion</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Access</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Search</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Iteration</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c9 c6">Size</span></p></td></tr><tr class="c40"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td></tr><tr class="c47"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c4">MAP: map = new Map()</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.set(key, val)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.delete(key)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.get(key)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.has(key)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.keys(), map.values(), map.entries()</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">map.size</span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(log n)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(log n)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(log n)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(log n)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(1)</span></p></td></tr><tr class="c40"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td></tr><tr class="c37"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c4">OBJECT: obj = { }</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">obj[key] = val</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">delete obj[key]</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">obj[key]</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">obj.hasOwnProperty(key)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Object.keys(obj), Object.values(obj), Object.entries(obj)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Object.keys(obj).length, Object.values(obj).length, Object.entries(obj).length</span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td></tr><tr class="c43"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td></tr><tr class="c40"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td></tr><tr class="c37"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c4">SET: set = new Set()</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.add(val)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.delete(val)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.has(val)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.has(val)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.values()</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">set.size</span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td></tr><tr class="c43"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(1)</span></p></td></tr><tr class="c40"><td class="c67" colspan="1" rowspan="1"><p class="c5"><span class="c8"></span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c18"><span class="c8"></span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c4">ARRAY: arr = [ ]</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr.push(val), arr.unshift(val)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr.pop(), arr.shift()</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr[idx]</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr.indexOf(val), arr.includes(val)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr.forEach()</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">arr.length</span></p></td></tr><tr class="c20"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c6">At the end</span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">push: O(1)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">pop: O(1)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Average: O(1)</span></p></td></tr><tr class="c37"><td class="c67" colspan="1" rowspan="1"><p class="c19"><span class="c6">At the Beginning </span></p></td><td class="c29" colspan="1" rowspan="1"><p class="c19"><span class="c4">unshift: O(n)</span></p></td><td class="c35" colspan="1" rowspan="1"><p class="c19"><span class="c4">shift: O(n)</span></p></td><td class="c65" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(1)</span></p></td><td class="c42" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c63" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(n)</span></p></td><td class="c22" colspan="1" rowspan="1"><p class="c19"><span class="c4">Worst: O(1)</span></p></td></tr></tbody></table></div></div>`

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
            {/* <img src={getLogoImg()} /> */}

            <Loader loading />

            <LoginForm
            />

            <ActionBtn
                text="df"
                onClick={(e: any) => {
                    console.log(e)
                }}
            />

            {/* <BottomModal>
                <div className="" dangerouslySetInnerHTML={{ __html: solution }} />
            </BottomModal> */}

            {/* <ConfirmDialog
                open={true}
                title="yo biro"
                content="nyc pik"
                onClose={(e: any) => {
                    console.log(e)
                }}
            /> */}

            {/* <FileInput onChange={(e) => { console.log(e.target.files) }} />

            <FullScreenLoader>
                <h1 classNameName='mngo-text-2xl'>Welcome to the MNgo Quiz</h1>
            </FullScreenLoader> */}

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
