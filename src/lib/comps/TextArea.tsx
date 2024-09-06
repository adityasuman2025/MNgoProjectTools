import React from "react";

interface TextAreaProps {
    className?: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    onSubmit: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void,
}
function TextArea({ className = "", placeholder = "", value, onChange, onSubmit }: TextAreaProps, ref: any) {
    function handleKeyDown(e: any) {
        if (e.key === 'Enter' && !e.shiftKey) { // Submit the form when only Enter is pressed
            e.preventDefault();
            onSubmit(e);
        }
    };

    return (
        <textarea autoFocus ref={ref} className={className} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={handleKeyDown} />
    );
}

export default React.forwardRef(TextArea);