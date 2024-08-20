import React, { Fragment } from 'react';

const URL_REGEX = /(https?:\/\/[^\s/$.?#].[^\s]*$)|(www\.[^\s/$.?#].[^\s]*$)|([a-zA-Z0-9-]+\.+[a-zA-Z]{2,})/i; // Regular expression to match URLs

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
    return (
        <Fragment>
            {children.split('\n').map((line, lineIndex) => { // Split text into lines based on newlines and render each line
                const words = line.split(' '); // Split each line into words

                return (
                    <Fragment key={lineIndex}>
                        {words.map((word, wordIndex) => {
                            const isLink = URL_REGEX.test(word);

                            if (isLink) {
                                const link = !["http://", "https://"].includes(word) ? "http://" + word : word;

                                return (
                                    <Fragment key={`${lineIndex}-${wordIndex}`}>
                                        {linkRenderor(word, link)}
                                        {" "}
                                    </Fragment>
                                );
                            }

                            return (
                                <span key={`${lineIndex}-${wordIndex}`}>
                                    {word}
                                    {wordIndex === words.length - 1 ? null : " "} {/* Add space if not the last word in line */}
                                </span>
                            )
                        })}
                        <br />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default React.memo(LinkDetector);