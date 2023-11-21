import { useState, useEffect, useRef } from "react";
import { getCookieValue } from "mngo-project-tools/utils";
import { FullScreenLoader } from "../comps";

export default function WithoutAuth(WrappedComponent: any, cookieName: string, fallbackFunc: (...args: any) => void) {
    return function (props: any) {
        const isMounted = useRef<boolean>(false);

        const [isChecking, setIsChecking] = useState<boolean>(true);
        const [isSomeoneLogged, setIsSomeoneLogged] = useState<boolean>(false);

        useEffect(() => {
            isMounted.current = true;

            const token = getCookieValue(cookieName);
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
}