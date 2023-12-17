import React, { useState, useEffect, useRef, forwardRef } from "react";
import { getCookie } from "../cookieUtils";
import FullScreenLoader from "../comps/FullScreenLoader";

export default function WithoutAuth(WrappedComponent: any, cookieName: string, fallbackFunc: (...args: any) => void) {
    function WithRef(props: any, ref: any) {
        const innerRef = useRef(); // Create a ref using useRef
        const forwardedRef = ref || innerRef; // Forward the ref to the wrapped component

        const isMounted = useRef<boolean>(false);

        const [isChecking, setIsChecking] = useState<boolean>(true);
        const [isSomeoneLogged, setIsSomeoneLogged] = useState<boolean>(false);

        useEffect(() => {
            isMounted.current = true;

            const token = getCookie(cookieName);
            if (token) setIsSomeoneLogged(true);

            setIsChecking(false);
        }, []);

        if (!cookieName) return <FullScreenLoader />;

        return (
            <>
                {
                    (isChecking || !isMounted.current) ? (
                        <FullScreenLoader />
                    ) : (isSomeoneLogged) ? (
                        <>{fallbackFunc && fallbackFunc()}</>
                    ) : (
                        <WrappedComponent {...props} />
                    )
                }
            </>
        )
    }

    return forwardRef(WithRef); // forwardRef is used to pass ref to the wrapped component, to fix given error
    // React Hook cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function 
}