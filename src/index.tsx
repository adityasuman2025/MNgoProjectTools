import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './lib/comps/RegisterForm';
import ActionBtn from './lib/comps/ActionBtn';
import InstallPWABtn from './lib/comps/InstallPWABtn';
import { makeCookie, getCookieValue } from './lib/utils';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    useEffect(() => {
        const COOKIE_EXPIRATION_MINS = 30 * 24 * 60; // 30 days

        let COOKIE_EXPIRATION_TYM = new Date();
        COOKIE_EXPIRATION_TYM.setTime(COOKIE_EXPIRATION_TYM.getTime() + (COOKIE_EXPIRATION_MINS * 60 * 1000));

        makeCookie("biro", "isBack", COOKIE_EXPIRATION_TYM)

        const cook = getCookieValue("biro");
        console.log("cook", cook)
    }, []);

    return (
        <>
            <ActionBtn text="login" showLoader />
            <RegisterForm showError={(e: any) => console.log(e)} />
            <InstallPWABtn />
        </>
    )
}