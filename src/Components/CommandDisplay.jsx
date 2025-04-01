import React, { useState, useEffect, useRef } from 'react';

function CommandDisplay({ entry, visibility, currentColors, asciiArtForSomethingCommand }) {
    const [_visibility, setVisibility] = useState(true);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(2000); // Default large value

    // Measure actual content height when visibility changes
    useEffect(() => {
        if (_visibility && contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height + 50); // Add padding to ensure everything is visible
        }
    }, [_visibility, entry]);

    return (
        <>
            <p style={{ margin: "7px 0" }} onClick={() => setVisibility((prev) => !prev)}>
                <span style={{
                    fontWeight: "bold",
                    color: currentColors.command,
                    cursor: "pointer",
                    userSelect: "none"
                }}>root@x0vi $ {entry.command}</span>
            </p>
            <div style={{
                maxHeight: _visibility ? `${contentHeight}px` : '0',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-out',
                marginLeft: "15px",
                lineHeight: "1.5"
            }}>
                <div ref={contentRef}>
                    {Array.isArray(entry.output) ? (
                        <div>
                            {entry.output.map((item, idx) => (
                                <div key={idx} style={{
                                    marginBottom: "8px",
                                    opacity: _visibility ? 1 : 0,
                                    transition: `opacity 0.3s ${_visibility ? 'ease-in 0.2s' : 'ease-out'}`
                                }}>
                                    {item.name ? (
                                        item.link ? (
                                            <div>
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        color: currentColors.link,
                                                        textDecoration: "underline"
                                                    }}
                                                >
                                                    {item.name}
                                                </a>
                                                {item.contributions && (
                                                    <p style={{
                                                        wordWrap: 'break-word',
                                                        marginTop: "4px",
                                                        marginBottom: "4px",
                                                        paddingLeft: "10px",
                                                        borderLeft: `2px solid ${currentColors.border}`
                                                    }}>
                                                        {item.contributions}
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <p style={{
                                                    fontWeight: "bold",
                                                    margin: "5px 0"
                                                }}>{item.name}</p>
                                                <div
                                                    style={{
                                                        marginLeft: "10px",
                                                        lineHeight: "1.4"
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: item.details }}
                                                />
                                            </div>
                                        )
                                    ) : (
                                        <p style={{ margin: "3px 0" }}>{item}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            opacity: _visibility ? 1 : 0,
                            transition: `opacity 0.3s ${_visibility ? 'ease-in 0.2s' : 'ease-out'}`
                        }}>
                            {entry.command === "something" ? (
                                <>
                                    <pre style={{
                                        margin: "5px 0",
                                        padding: "8px",
                                        backgroundColor: currentColors.codeblock,
                                        borderRadius: "3px",
                                        overflowX: "auto",
                                        whiteSpace: "pre-wrap",
                                        display: "block",
                                        borderRadius:"20px"
                                    }}>
                                        {asciiArtForSomethingCommand}
                                    </pre>
                                    <pre style={{
                                        margin: "5px 0 20px 0", // Extra bottom margin
                                        padding: "8px",
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        borderRadius: "3px",
                                        overflowX: "auto",
                                        whiteSpace: "pre-wrap",
                                        display: "block"
                                    }}>
                                        {entry.output}
                                    </pre>
                                </>
                            ) : (
                                <div
                                    style={{
                                        wordWrap: "break-word",
                                        textAlign: "left",
                                        overflowX: "auto",
                                        lineHeight: "1.5",
                                        marginLeft: "10px",
                                        paddingBottom: "20px" // Ensure bottom content is visible
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<p style="margin: 5px 0">${entry.output}</p>`
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default CommandDisplay;