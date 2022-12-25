import React from 'react';
import ReactDOM from 'react-dom';
import InstallPWABtn from './lib/comps/InstallPWABtn';
import LoadingAnimation from './lib/comps/LoadingAnimation';
import SnackBar from './lib/comps/SnackBar';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <>
            <LoadingAnimation loading />
            <InstallPWABtn className="biro" onError={() => console.log("yo")} />
            <SnackBar open msg="sd" />
        </>
    )
}