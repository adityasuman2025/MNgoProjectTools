import React, { useRef } from "react";

interface FileInputProps {
    accept?: string,
    multiple?: boolean,
    children?: React.ReactNode,
    onChange?: (...args: any) => void,
}
export default function FileInput({
    accept = "file/*",
    multiple = false,
    children = <button>Upload</button>,
    onChange = (...args: any) => { },
}: FileInputProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleUploadClick() {
        fileInputRef.current && fileInputRef.current.click();
    }

    return (
        <>
            <input
                ref={fileInputRef}
                style={{ display: "none" }}
                type="file"
                name="myMedia"
                onChange={onChange}
                accept={accept}
                multiple={multiple}
            />

            <div onClick={handleUploadClick}>
                {children}
            </div>
        </>
    )
}