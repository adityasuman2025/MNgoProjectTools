import React, { Fragment } from 'react';

interface LinkDetectorProps {
    children: string;
    linkRenderor?: (word: string, link: string) => React.ReactNode | string;
}
function LinkDetector({
    children,
    linkRenderor = (word, link) => (
        <a href={link} target="_blank" rel="noopener noreferrer">{word}</a>
    ),
}: LinkDetectorProps) {
    const urlRegex = /(https?:\/\/[^\s/$.?#].[^\s]*$)|(www\.[^\s/$.?#].[^\s]*$)|([a-zA-Z0-9-]+\.+[a-zA-Z]{2,})/i; // Regular expression to match URLs

    const words = children.replace(/\n/g, ' ').split(' ');

    const renderedText = words.map((word, index) => {
        const isLink = urlRegex.test(word);

        if (isLink) {
            const link = (!word.includes("http://") && !word.includes("https://")) ? "http://" + word : word;

            return (
                <Fragment key={index}>
                    {linkRenderor(word, link)}
                    {" "}
                </Fragment>
            );
        }

        return <span key={index}>{word + " "}</span>;
    });

    return <Fragment>{renderedText}</Fragment>;
}

export default React.memo(LinkDetector);