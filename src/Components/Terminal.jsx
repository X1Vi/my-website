import AsciiAnimator from "./AsciiAnimator";
import CommandDisplay from "./CommandDisplay";
import ThemePicker from "./ThemePicker";
import { useTerminal } from "../hooks/useTerminal";
import commands from "../data/commands";
import { asciiArt, somethingAscii } from "../data/asciiArt";

const Name = "X1Vi";

const keyframeStyles = `
@keyframes scanLine {
    0% { left: -100%; }
    100% { left: 100%; }
}

@keyframes borderFlicker {
    0% { opacity: 0; }
    5% { opacity: 0.8; }
    10% { opacity: 0.3; }
    15% { opacity: 0.6; }
    20% { opacity: 0; }
    100% { opacity: 0; }
}

@keyframes glowPulse {
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }
}

@keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes bgShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes subtleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
}
`;

const Terminal = () => {
    const {
        history,
        input,
        setInput,
        normalMode,
        toggleNormalMode,
        toggleAvailableCommands,
        windowWidth,
        currentColors,
        showAnimations,
        historyRef,
        commandInputRef,
        handleKeyDown,
        handleCommandClick,
        setTheme,
    } = useTerminal();

    const modeButtonLabel = normalMode ? "Hacker Mode" : "Normal Mode";

    return (
        <div
            style={{
                fontFamily: "monospace",
                backgroundColor: currentColors.background,
                color: currentColors.text,
                padding: "20px",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                width: "100vw",
                transition: "background-color 0.6s ease, color 0.6s ease",
            }}
        >
            <style dangerouslySetInnerHTML={{ __html: keyframeStyles }} />

            <div style={{ display: "flex", flexDirection: 'row-reverse', justifyContent: "flex-end", marginBottom: "20px" }}>
                <ThemePicker
                    currentColors={currentColors}
                    onSelectTheme={setTheme}
                />

                <button
                    onClick={toggleNormalMode}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: currentColors.background,
                        color: currentColors.text,
                        border: `2px solid ${currentColors.border}`,
                        cursor: "pointer",
                        fontSize: "16px",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        borderRadius: "4px",
                        animation: "subtleFloat 4s ease-in-out infinite",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px ${currentColors.border}`;
                        e.currentTarget.style.animation = 'none';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.animation = 'subtleFloat 4s ease-in-out infinite';
                    }}
                >
                    {modeButtonLabel}

                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "2px",
                        backgroundColor: currentColors.text,
                        opacity: 0.7,
                        animation: "scanLine 2s linear infinite",
                        filter: `drop-shadow(0 0 5px ${currentColors.text})`,
                    }} />

                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: `2px solid ${currentColors.border}`,
                        opacity: 0,
                        animation: "borderFlicker 3s infinite",
                        filter: `drop-shadow(0 0 5px ${currentColors.border})`,
                    }} />

                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        boxShadow: `inset 0 0 10px ${currentColors.text}`,
                        opacity: 0,
                        animation: "glowPulse 4s infinite",
                    }} />
                </button>
            </div>

            {toggleAvailableCommands && (
                <div style={{ marginBottom: "20px", animation: "fadeSlideIn 0.3s ease-out" }}>
                    <p>
                        <strong>Available Commands (You can also click below if you are too lazy)</strong>
                    </p>
                    <ul>
                        {Object.keys(commands).map((command, index) => (
                            <li
                                key={index}
                                style={{ listStyleType: "none", cursor: "pointer" }}
                                onClick={() => handleCommandClick(command)}
                            >
                                <span style={{ color: currentColors.command }}>
                                    &gt; {command}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div ref={historyRef} style={{
                flexGrow: 1,
                overflowY: "auto",
                fontFamily: "monospace",
                padding: "12px",
                background: `linear-gradient(125deg, ${currentColors.codeblock} 0%, ${currentColors.background} 100%)`,
                color: currentColors.text,
                borderRadius: "4px",
                transition: "background 0.6s ease",
                boxShadow: `inset 0 0 30px ${currentColors.background}80`,
            }}>
                {showAnimations && !normalMode && (
                    <div style={{ marginBottom: "10px", animation: "fadeSlideIn 0.6s ease-out" }}>
                        <AsciiAnimator />
                        <pre style={{
                            margin: "0",
                            overflow: "auto",
                            maxWidth: "100%"
                        }}>{asciiArt}</pre>
                    </div>
                )}

                {history.map((entry, index) => (
                    <div key={`${entry.command}-${index}-${normalMode}`} style={{
                        marginBottom: "20px",
                        borderBottom: `1px solid ${currentColors.border}`,
                        paddingBottom: "10px",
                        animation: `fadeSlideIn 0.4s ease-out ${index * 0.05}s both`,
                    }}>
                        <CommandDisplay
                            entry={entry}
                            visibility={false}
                            currentColors={currentColors}
                            asciiArtForSomethingCommand={somethingAscii}
                            normalMode={normalMode}
                        />
                    </div>
                ))}
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "10px"
            }}>
                {windowWidth > 1024 && (
                    <p style={{
                        fontWeight: "bold",
                        display: "flex",
                        margin: 0,
                        marginRight: "8px"
                    }}>root@{Name.toLowerCase()} $</p>
                )}
                {!normalMode && (
                    <div style={{ position: 'relative', flex: 1 }}>
                        <input
                            ref={commandInputRef}
                            style={{
                                backgroundColor: currentColors.background,
                                color: currentColors.text,
                                border: "none",
                                borderBottom: `0px solid ${currentColors.border}`,
                                fontSize: "16px",
                                outline: "none",
                                width: "90%",
                                caretColor: currentColors.command,
                            }}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type 'help' to see the commands"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
