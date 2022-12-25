import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './lib/comps/RegisterForm';
import ActionBtn from './lib/comps/ActionBtn';
import SnackBar from './lib/comps/SnackBar';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <>
            <ActionBtn text="login" showLoader />
            <RegisterForm />
            <SnackBar open msg="sd" />
        </>
    )
}