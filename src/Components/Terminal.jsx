import AsciiAnimator from "./AsciiAnimator";
import CommandDisplay from "./CommandDisplay";
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
        toggleTheme,
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
                width: "100vw"
            }}
        >
            <div style={{ display: "flex", flexDirection: 'row-reverse', justifyContent: "flex-end", marginBottom: "20px" }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        padding: "10px",
                        backgroundColor: currentColors.background,
                        color: currentColors.text,
                        border: `2px solid ${currentColors.border}`,
                        cursor: "pointer",
                        fontSize: "16px",
                        margin: "4px 4px"
                    }}
                >
                    Toggle Theme
                </button>

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
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px ${currentColors.border}`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
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

                    <style dangerouslySetInnerHTML={{ __html: keyframeStyles }} />
                </button>
            </div>

            {toggleAvailableCommands && (
                <div style={{ marginBottom: "20px" }}>
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
                background: `linear-gradient(125deg, ${currentColors.codeblock} 0%, ${'cyan'} 300%)`,
                color: currentColors.text,
                borderRadius: "4px"
            }}>
                {showAnimations && !normalMode && (
                    <div style={{ marginBottom: "10px" }}>
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
                        paddingBottom: "10px"
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

            <div style={{ display: "flex", flexDirection: "row" }}>
                {windowWidth > 1024 && (
                    <p style={{ fontWeight: "bold", display: "flex" }}>root@{Name.toLowerCase()} $</p>
                )}
                {!normalMode && (
                    <input
                        ref={commandInputRef}
                        style={{
                            backgroundColor: currentColors.background,
                            color: currentColors.text,
                            border: "none",
                            borderBottom: `0px solid ${currentColors.border}`,
                            fontSize: "16px",
                            outline: "none",
                            width: "90%"
                        }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type 'help' to see the commands"
                    />
                )}
            </div>
        </div>
    );
};

export default Terminal;
