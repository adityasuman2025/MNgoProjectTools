import React from 'react';
import ReactDOM from 'react-dom';
import { SnackBar } from "./lib";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <SnackBar open msg="yoyo" />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);