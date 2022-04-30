import React from 'react';
import ReactDOM from 'react-dom';
import { SnackBar, LoadingAnimation } from "./lib";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <LoadingAnimation loading />
            <SnackBar open msg="yoyo" />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);