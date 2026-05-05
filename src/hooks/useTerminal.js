import { useState, useRef, useEffect, useCallback } from "react";
import commands from "../data/commands";
import { allCommandsAndData } from "../data/commands";
import { defaultTheme } from "../data/themes";

export function useTerminal() {
    const [history, setHistory] = useState([{ command: "help", output: commands.help }]);
    const [input, setInput] = useState("");
    const [normalMode, setNormalMode] = useState(true);
    const [toggleAvailableCommands, setToggleAvailableCommands] = useState(false);
    const historyRef = useRef(null);
    const commandInputRef = useRef(null);
    const [commandHistory, setCommandHistory] = useState([]);
    const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);
    const [clearedOnce, setClearedOnce] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [holdHistory, setHoldHistory] = useState([]);
    const [currentTheme, setCurrentTheme] = useState(defaultTheme);
    const [currentColors, setCurrentColors] = useState(defaultTheme);
    const [showAnimations, setShowAnimations] = useState(true);

    useEffect(() => {
        if (normalMode) {
            setHoldHistory(history);
            setHistory(allCommandsAndData);
        } else if (!normalMode && clearedOnce) {
            setHistory(holdHistory);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [normalMode]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setClearedOnce(true);
    }, [history]);

    useEffect(() => {
        setClearedOnce(false);
    }, []);

    useEffect(() => {
        if (commandInputRef.current) {
            commandInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (input === "") {
            setCommandHistoryIndex(commandHistory.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    useEffect(() => {
        setCurrentColors(currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        if (historyRef.current) {
            const lastItem = history[history.length - 1];
            if (lastItem && lastItem.output.length < 1000) {
                if (!normalMode) {
                    historyRef.current.scrollTop = historyRef.current.scrollHeight;
                }
            }
        }
    }, [history, normalMode]);

    const executeCommand = useCallback(() => {
        if (input === "clear") {
            setShowAnimations(false);
            setHistory([]);
        } else if (commands[input]) {
            setHistory(prev => [...prev, { command: input, output: commands[input] }]);
        } else {
            setHistory(prev => [...prev, { command: input, output: `Command not found: ${input}` }]);
        }
        setInput("");
    }, [input]);

    const handleCommandClick = useCallback((cmd) => {
        if (cmd === 'clear') {
            setHistory([]);
            return;
        }
        setHistory(prev => [...prev, { command: cmd, output: commands[cmd] }]);
    }, []);

    const setTheme = useCallback((theme) => {
        setCurrentTheme(theme);
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Enter") {
            executeCommand();
            setCommandHistory(prev => [...prev, input]);
            setCommandHistoryIndex(prev => prev + 1);
        } else if (e.key === "ArrowUp") {
            if (commandHistory.length > 0 && commandHistoryIndex > 0) {
                const newIndex = commandHistoryIndex - 1;
                setCommandHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            if (commandHistory.length > 0 && commandHistoryIndex < commandHistory.length - 1) {
                const newIndex = commandHistoryIndex + 1;
                setCommandHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else {
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const matchingCommands = Object.keys(commands).filter(cmd =>
                cmd.startsWith(input)
            );
            if (matchingCommands.length === 1) {
                setInput(matchingCommands[0]);
            }
        }
    }, [input, commandHistory, commandHistoryIndex, executeCommand]);

    const toggleNormalMode = useCallback(() => {
        setNormalMode(prev => !prev);
    }, []);

    return {
        history,
        input,
        setInput,
        normalMode,
        toggleNormalMode,
        toggleAvailableCommands,
        setToggleAvailableCommands,
        windowWidth,
        currentTheme,
        currentColors,
        showAnimations,
        historyRef,
        commandInputRef,
        handleKeyDown,
        handleCommandClick,
        setTheme,
    };
}
