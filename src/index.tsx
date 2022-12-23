import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackBar, LoadingAnimation } from "./lib";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Comp />);

function Comp() {
    return (
        <div>
            <LoadingAnimation loading />
            <SnackBar open msg="yoyo" />
        </div>
    )
}