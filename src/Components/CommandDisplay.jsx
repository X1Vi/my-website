import React, { useState, useEffect, useRef } from 'react';

function CommandDisplay({ entry, visibility, currentColors, asciiArtForSomethingCommand, normalMode, lastToggledCommands, setLastToggledCommands }) {
    const [initialVisibility] = useState(() => {
        // Only use saved state if in normal mode, otherwise use the visibility prop
        if (normalMode) {
            const savedState = sessionStorage.getItem(`visibility_${entry.command}`);
            return savedState !== null ? JSON.parse(savedState) : visibility;
        }
        return true; // Always visible when not in normal mode
    });
    const [_visibility, setVisibility] = useState(initialVisibility);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(2000);

    useEffect(() => {
        if ((_visibility || !normalMode) && contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height + 50);
        }
    }, [_visibility, entry, normalMode]);

    useEffect(() => {
        if (normalMode) {
            const savedState = sessionStorage.getItem(`visibility_${entry.command}`);
            if (savedState !== null) {
                setVisibility(JSON.parse(savedState));
            } else {
                setVisibility(visibility);
            }
        } else {
            // Force visibility when not in normal mode
            setVisibility(true);
        }
    }, [normalMode, entry.command, visibility]);

    const handleToggle = () => {
        if (!normalMode) return;

        setVisibility((prev) => {
            const newVisibility = !prev;
            sessionStorage.setItem(`visibility_${entry.command}`, JSON.stringify(newVisibility));
            setLastToggledCommands((prevCommands) => {
                if (newVisibility) {
                    return [...prevCommands, entry.command];
                } else {
                    return prevCommands.filter(cmd => cmd !== entry.command);
                }
            });
            return newVisibility;
        });
    };

    // Determine cursor style and actual visibility based on mode
    const cursorStyle = normalMode ? "pointer" : "default";
    const displayVisibility = normalMode ? _visibility : true;

    return (
        <>
            <p style={{ margin: "7px 0" }} onClick={handleToggle}>
                <span style={{
                    fontWeight: "bold",
                    color: currentColors.command,
                    cursor: cursorStyle,
                    userSelect: "none"
                }}>root@x1vi~ $ {entry.command}</span>
            </p>
            <div style={{
                maxHeight: displayVisibility ? `${contentHeight}px` : '0',
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
                                    opacity: displayVisibility ? 1 : 0,
                                    transition: `opacity 0.3s ${displayVisibility ? 'ease-in 0.2s' : 'ease-out'}`
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
                            opacity: displayVisibility ? 1 : 0,
                            transition: `opacity 0.3s ${displayVisibility ? 'ease-in 0.2s' : 'ease-out'}`
                        }}>
                            {entry.command === "something" ? (
                                <>
                                    <pre style={{
                                        margin: "5px 0",
                                        padding: "8px",
                                        backgroundColor: currentColors.codeblock,
                                        overflowX:'auto',
                                        display: "block",
                                        borderRadius: "20px"
                                    }}>
                                        {asciiArtForSomethingCommand}
                                    </pre>
                                    <pre style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
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
                                        paddingBottom: "20px"
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