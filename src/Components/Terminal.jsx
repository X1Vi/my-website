import React, { useState, useRef, useEffect } from "react";
import AsciiAnimator from "./AsciiAnimator";

const commands = {
    about: `

    Hi, I go around by my nick name X1Vi.

    I’m a Full Stack & Mobile Developer, Open Source Contributor, Hobbyist Game Developer.  
    
    I have 1.4+ year of professional experience in a fast paced environments with aggressive deadlines.

    I like to work in different fields like Web, Game, Moble Development, Art, FreeCAD.
    

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#+++++%%%%%%%%%%%%%%%%%%%%%#+++++%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+....-%%%%%%%%%%%%%%%%%%%%%*::..:%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.......:::.%%=::....:..:#%%-.::..:::::#%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+==..:====-:::==:::.......:===:::=====:::==*%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-..::-+++++:::::::::::::::::::::-+++++:::::=%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+:::..+++++++++++::=++++++++++:::=++++++++++:::..+%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+.....+++++++++++===++++++++++===+++++++++++:....+%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%+.....++++++++++++++++++++++++++++++++++++++:::..+%%
    %%%%%%%%%%%%%%%%%%%%%%:...........::.......-++++++++@@*++++++++++@@@*+++++++:::::=%%%%%
    %%%%%%%%%%%%%%%%%%%---:...................::::=+++++@@*++++++++++@@@*++++=:::::*##%%%%%
    %%%%%%%%%%%%%%#####:::::::::::::::::::::::::::=+++++%%*++++++++++%%%+++++-..:::#%%%%%%%
    %%%%%%%%%%%%%*::..::::+++++++++++++++++++++++++++++++++++++++++++++++++++-..:::#%%%%%%%
    %%%%%%%%%%%:.:::..:++++++++++++++++++++++++++++++++++++**********++++++++-..:::#%%%%%%%
    %%%%%%%%%##::::::::+++++++++++++++++++++++++++++++++++***********++++++++-..:::#%%%%%%%
    %%%%%%%%-:::.:++++++++++++++++++++++++++++++++++++++**%@@#*****@@***+++++-..:::#%%%%%%%
    %%%%%+:::::===++++++++++++++++++++++++++++++++++++++**%@@#*****@@***+++++-:::::#%%%%%%%
    %%%%%*==:::--=++++++++++++++++++++++++++++++++++++++++#%%******%%*++++=---::==+%%%%%%%%
    %%%%%%%%-....:+++++++++++++++++++++++++++++++++++++++++**********+++++=:....%%%%%%%%%%%
    %%%%%%%%%%%.......:+++++++++++++++++++++++++++++++++++++++++++++++++:...:=%%%%%%%%%%%%%
    %%%%%%%%%%%++=....:---+++++++++++++++++++++++++++++++++++=----------:.-++*%%%%%%%%%%%%%
    %%%%%%%%%%%%%*.......:+++++++++++++++++++++++++++++++++++-:...........=%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%::::::::=++++++++++:::+++++++++++:::::::.....:.::#%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%*++:...:=++++++++++:..+++++++++++:...:=++++++++++%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%:...:=++++++++++:..+++++++++++:::::*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%:...:=++++=::::::..+++++-:::::::*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%##+:::::::::.......::::::::..:##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%*::::.::::::.::::.....::::::%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%-..::-%%%%%%%%.....*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%######%%%%%%%%#####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    `,



    techstack: [
        {
            "name": "Full Stack Development",
            "details": "MERN Stack (MongoDB, Express.js, React, Node.js), Django, REST API, Socket.io"
        },
        {
            "name": "Mobile Development",
            "details": "React Native"
        },
        {
            "name": "Game Development",
            "details": "Godot, Bevy"
        },
        {
            "name": "Version Control & Collaboration",
            "details": "Git, GitHub, Lazygit"
        },
        {
            "name": "Cloud Infrastructure & DevOps",
            "details": "Docker, CI/CD, Microservices"
        },
        {
            "name": "Design & Prototyping",
            "details": "Figma, GIMP, Pixel, Pixelroma, Aseprite"
        },
        {
            "name": "API Testing & Tools",
            "details": "Postman"
        },
        {
            "name": "Database Management",
            "details": "MongoDB, MySQL, PostgreSQL, SQLite"
        },
        {
            "name": "Programming Languages",
            "details": "Python, Rust, Golang, TypeScript, GDScript, JavaScript"
        },
        {
            "name": "Web Scraping",
            "details": "Web scraping using Python"
        },
        {
            "name": "Operating Systems",
            "details": "Windows, Linux (Ubuntu, Parrot, Kali), WSL"
        },
        {
            "name": "Security & Penetration Testing",
            "details": "Burp Suite, Metasploit, MOBSf, ZAP"
        },
    ],

    // experience: [
    //     "Developed and managed a microservices architecture with 8 microservices.",
    //     "Designed an image compression system reducing file sizes by up to 90%.",
    //     "Integrated anti-root detection in a React Native app for security.",
    //     "Developed an image metadata stripping feature for privacy.",
    //     "Implemented Tilled and Eazebuzz payment APIs.",
    //     "Created a Slack bot for real-time Django server error notifications.",
    //     "Patched a session login vulnerability, improving security.",
    //     "Developed a custom graphing library using react-native-svg.",
    // ],

    open_source: [
        {
            name: "Bluesky",
            contributions: `
            Working on issues were lying around since 2023 in bluesky.
            
            Added a QR code generation feature for easy profile sharing, designed a custom scroll bar for bluesky's homepage,
            fixed an issue where users couldn’t unfollow blocked accounts.`,
            link: "https://github.com/bluesky-social/social-app/pulls/X1Vi"
        },
        {
            name: "UseMemos",
            contributions: "Fixed Mermaid diagram theme inconsistencies, resolved memo collapsing issues, and corrected a bug with the 'Disallow Password Authentication' switch to prevent misconfigurations.",
            link: "https://github.com/usememos/memos/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "LazyGit",
            contributions: "Added a feature to filter commit history by date range, making it easier for users to navigate and inspect specific commits.",
            link: "https://github.com/jesseduffield/lazygit/pulls/X1Vi"
        },
        {
            name: "FreeCodeCamp",
            contributions: "Introduced persistent pane state saving to eliminate manual layout adjustments and improved the debugging workflow by allowing repeated tests on the same challenge.",
            link: "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "Mattermost",
            contributions: "Enhanced the emoji picker by making selections persistent across sessions, improving user convenience.",
            link: "https://github.com/mattermost/mattermost/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        }
    ],

    education:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering (2019–2023).",

    socials: [
        { name: "Itch.io", link: "https://saintelgrandosmokio.itch.io" },
        { name: "GitHub", link: "https://github.com/X1Vi" },
        { name: "Medium", link: "https://medium.com/@x1vi" },
        { name: "Bluesky", link: "https://bsky.app/profile/x1vizi.bsky.social" },
        {
            name: "Sponsor Me",
            link: "https://buymeacoffee.com/x1vi_donateforopensource",
        },
    ],

    my_games: [
        {
            name: "Puzzle Game",
            link: "https://saintelgrandosmokio.itch.io/puzzlegame",
        },
        {
            name: "Sky Shader",
            link: "https://saintelgrandosmokio.itch.io/sky-shader",
        },
        {
            name: "Water Shader",
            link: "https://saintelgrandosmokio.itch.io/water-shader",
        },
        {
            name: "Maze Game Concept",
            link: "https://saintelgrandosmokio.itch.io/mazegameconcept",
        },
    ],
    video_editing: [
        {
            name: "Youtube Shorts",
            link: "https://www.youtube.com/@youranonymousyoutuber4051/shorts",
        },
    ],

    help: "Available commands: about, techstack, open_source, education, socials, games, clear, help, something",
    something: `
    
    ++++++++++++++++++++++:................:+++++++++++++++++++++++++++++++++++
    ++++++++++++++++++++++++++++++++++++++++++++++-..................=++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++=-..........::......=++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++=::..........:=+*-......=+++++++++++++++++++=====++++++++++
    ++++++++++++++++++++++++++++++++++++++++*-...........:****+-.......:=++++++++++++=::.......::=++++++
    +++++++++++++++++++++++++++++++++++++++**+-........:=******+:........:=++++++++-...............-++++
    ++++++++++++++++++++++++++++++++++++++*****+-:.......-*****=.........:=++=====:............-:...:+++
    +++++++++++++++=-:--:-++++++++++++++++*******+......=***##**+....-******+:..................+:..:*++
    ++++++++++++=:........:=*+++++++++++++=...=************###**************#=:...:=:..........:+*****++
    ++++++***++-..........:=**++++++++++++=:...:#*********######********#######+++*+..........-+******++
    ++*%%%%%#-..........-=+**=.:++++++=::......+####***#########%##**##########****+-....:**+****####*++
    *%%%%%%%#-..........=*+-:...:-===:.........:###############%%############%%*******==+****#######++++
    %%%%%%%#-..........-+*.....................:+##############%%%##########%%##***********#######*+****
    %%%%%#=..........:+**#*:...................+###############%%%%#######%%%######**##################%
    %%%#:.............=***#**+..............-######%%#########%%%%%%%%%%%%%%%%#######################%%%
    %%*:.............-+**#****+:....:.....:+#####%%%%%%######%%%%%%%%%%%%%%%%%%%#########%%%%%%%%%%%%%%%
    %%*:............-+**##*******+***+=-=+**#####%%%%%%%%###%%%%%%%%%%%%%%%%%%%%%%%%%######%%%%%%%%%%%%%
    %%%#:..........:=****##*****************####%%%%%%%%%####%%%%%%%%%%%%%%%%%%%%%%%%%#######%%%%%%%%%%%
    %%%%=...........:-+***##***************#####%%%%%%%%%%##%%%%%%%%%#%%%%%%%%%%%%%%%%%%####%%%%%%%%%%%%
    %%%+=.............:=**#####**********########%%%%%%%%########%%%%**#%%%%%%%%####%%%#####%%%###%%%%%%
    #:.................-**#####*******##########%%%%%%%%%#########%%%##++++*########################%%%%
    :.................:+**########**##########%%%%%%%%%%%########**+...-+++++###########################
    ...........:=+++==+++++###############%%%%%%%%%%%%%%%##*********=...+++++*##########################
    +=-::::::-+++++++++++++*############%%%%%%%%%%%%%%%%%%*****=-=****+=+++++++*##########*#############
    +++++++++++++++++++++*###%%#####%%%%%%%%%%%%%%%%%%%%#*****-...-+**+++++++++++++***++++++*##########*
    ++++++++++++++++++++*######%#####%%%%%%%%%%%%%%%%%%#******:.....=+++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++#######%#####%%%%%######%%%%%##****+::--=++++++++++++++++++++++++++++++++++++++
    ++++++++++++++++++++++######%%##############+-%%%+:*#***=:++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++*#####%################*:....:+###**+-+++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++*######%######%###########****+*********+++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++*############%%%%%%%%%%#*****=:...:=******+++++++++++++++++++++++++++++++++++++++++
    ++++++++++++++++*##########%%%%%%%%%%%%******=.......=****++++++++++++++++++++++++++++++++++++++++++
    ++++++++++++++++*-...+#######%%%%%%%%##*****-.........:-++++++++++++++++++++++++++++++++++++++++++++
    ++++++++++++++++-:....+#####*#%%%%%%%##*****=+-::.....:=+++++++++==+++++-::....::=++++++++++++++++++
    +++++++++++++++++:....-*#*******#%%%#####**++++++++++++++++++-:......::...........:-++++++++++++++++
    ++++++++++++++++++=:....-********#######*++++++++++++++++++-........................-+++++++++++++++
    ++++++++++++++++++=::...:********########*++++++++++++++++-..........................=++++++++++++++
    +++++++++++++++++=:....-+********#######*#+++++++++++++++=.........................:++++++++++++++++
    +++--:...:=-....::...:*********######***%%+++++++++++++=-.........................:+*+++++++++++++++
    :.....................*********######**%%%*++++++++++**:........................:+*****=::=+++++++++
    .....................=**********#####**#%%%*+**####*#***+=--+:.............:=+++*****+:....=++++++++
    ==+**+==+*-........:+**********#####***%%%%%%%%%%%%##*********+:........:=*********=:......:++++++++
    ************+=---=*********#########*#%%%##%%%%%##%###**********+--::--+**********=........-+++==---
    **************************#############################*************************+-:.........:::.....
    ***************************###############==#####%%%%%########*************##**+....................
    #***********************################=....=####%%%%############********####*-....................
    #####*******************###****#%%%%%%%%......%######################***#####**+:...................
    #########****###*******###******#%%%%%%%-....=-:+#######%%%%%%%%############*****+=:................
    ###################**#####******%%%%%%#..-+*+--:..#%%%%%%%%#*#%%%###########*******+=--:......:....-
    %%%%%%%%#####%%%#%%#######%%##%%%%%%%%*.:=******=:-+%%%%%%+.-*#%%%%%#########**********+=---=+*+=++*
    ***+++*%%%%%%#*++++*****%%%%%%%%%%#=.:*%:=***#***+...%%%%%%#**%%%%%%%#########********************++
    ++++++++++++++++++++++++*%%%%%%%%=..::.:-+**#####*****%%##%%%%###%%#*##%%%%%%##***********#*******++
    ++++++++++++++++++++++++++*%%%%%%=-=******########*****+:.:-%%%#%%%:-*##%%%%####****############*+++
    +++++++++++++++++++++++++++++#%%%#*****::*##**##########****#%%%%%%%*##%%%%#####%#############*+++++
    
    Just clouds turned into ASCII art from my pixel art.
    Why not see my bluesky to see more of what I've been up to or sponsor me ?
    Check out the 'socials' command for more info.`,
    clear: "Terminal cleared.",

};
const asciiArt = {
    art: `
                                                    
   ,--,     ,--,       ,---,                        
   |'. \\   / .\`|    ,\`--.' |        ,---.   ,--,    
   ; \\ \`\\ /' / ;   /    /  :       /__./| ,--.'|    
   \`. \\  /  / .'  :    |.' '  ,---.;  ; | |  |,     
    \\  \\/  / ./   \`----':  | /___/ \\  | | \`--'_     
     \\  \\.'  /       '   ' ; \\   ;  \\ ' | ,' ,'|    
      \\  ;  ;        |   | |  \\   \\  \\: | '  | |    
     / \\  \\  \\       '   : ;   ;   \\  ' . |  | :    
    ;  /\\  \\  \\      |   | '    \\   \\   ' '  : |__  
  ./__;  \\  ;  \\     '   : |     \\   \`  ; |  | '.'| 
  |   : / \\  \\  ;    ;   |.'      :   \\ | ;  :    ; 
  ;   |/   \\  ' |    '---'         '---"  |  ,   /  
  \`---'     \`--\`                           ---\`-'   
                                                    
  `
};

const Terminal = () => {
    const [history, setHistory] = useState([{ command: "name", output: asciiArt.art }]);
    const [input, setInput] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [toggleAvailableCommands, setToggleAvailableCommands] = useState(false);
    const historyRef = useRef(null); // Ref for the history container
    const commandInputRef = useRef(null); // Ref for the command input
    const [_commands, setCommands] = useState([]);
    const [_commandsIndex, setCommandsIndex] = useState(-1);
    const [clearedOnce, setClearedOnce] = useState(false);

    useEffect(() => {
        setClearedOnce(true)
    }, [history])

    useEffect(()=>{
        setClearedOnce(false)
    },[])
    useEffect(() => {
        commandInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (input === "") {
            setCommandsIndex(_commands.length);
        }
    }, [input])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const executeCommand = () => {
        if (input === "clear") {
            setHistory([]); // Clears the terminal history
        } else if (commands[input]) {
            setHistory([...history, { command: input, output: commands[input] }]);
        } else {
            setHistory([
                ...history,
                { command: input, output: `Command not found: ${input}` },
            ]);
        }
        setInput("");
    };

    const handleCommandClick = (_command) => {
        if (_command === 'clear') {
            setHistory([])
            return;
        }
        setHistory([...history, { command: _command, output: commands[_command] }]);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const colors = {
        dark: {
            background: "black",
            text: "lime",
            command: "lightgreen",
            link: "lightblue",
            border: "lime",
        },
        light: {
            background: "white",
            text: "black",
            command: "green",
            link: "blue",
            border: "green",
        },
        pinkish: {
            background: "black",
            text: "hotpink",
            command: "pink",
            link: "lightcoral",
            border: "deeppink",
        },
        bluish: {
            background: "navy",
            text: "deepskyblue",
            command: "aqua",
            link: "lightskyblue",
            border: "cyan",
        }
    };
    const currentColors = isDarkMode ? colors.pinkish : colors.light;

    // Scroll to the bottom of the terminal whenever the history changes
    useEffect(() => {
        if (historyRef.current) {
            const lastItem = history[history.length - 1];
            if (lastItem && lastItem.output.length < 1000) {
                // Adjust the length threshold as needed
                historyRef.current.scrollTop = historyRef.current.scrollHeight;
            }
        }
    }, [history]);

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
            <div style={{ display: "flex", flexDirection: 'row-reverse', justifyContent: "space-between", marginBottom: "20px" }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        padding: "10px",
                        backgroundColor: currentColors.background,
                        color: currentColors.text,
                        border: `2px solid ${currentColors.border}`,
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    Toggle Theme
                </button>

            </div>

            {toggleAvailableCommands ?
                <>

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
                    <button
                        onClick={() => setToggleAvailableCommands(!toggleAvailableCommands)}
                        style={{
                            padding: "10px",
                            backgroundColor: currentColors.background,
                            color: currentColors.text,
                            border: `2px solid ${currentColors.border}`,
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        {toggleAvailableCommands ? "Hide Commands" : "Show Commands"}
                    </button>
                </>

                :

                <button
                    onClick={() => setToggleAvailableCommands(!toggleAvailableCommands)}
                    style={{
                        padding: "10px",
                        backgroundColor: currentColors.background,
                        color: currentColors.text,
                        border: `2px solid ${currentColors.border}`,
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    {toggleAvailableCommands ? "Hide Commands" : "Show Commands"}
                </button>
            }

            <div ref={historyRef} style={{ flexGrow: 1, overflowY: "auto" }}>
                {history.map((entry, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        {!clearedOnce ? 
                        <AsciiAnimator />
                        : null}
                        <p>
                            <span style={{ fontWeight: "bold" }}>&gt; {entry.command}</span>
                        </p>
                        {Array.isArray(entry.output) ? (
                            <div style={{ marginLeft: "10px" }}>
                                {entry.output.map((item, idx) => (
                                    <p key={idx}>
                                        {item.name ? (
                                            item.link ? (
                                                <>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: currentColors.link }}
                                                    >
                                                        {item.name}
                                                    </a>
                                                    {item.contributions ? (
                                                        <p>{item.contributions}</p>
                                                    ) : null}
                                                </>
                                            ) : (
                                                `${item.name}: ${item.details}`
                                            )
                                        ) : (
                                            item
                                        )}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `<pre>${entry.output}</pre>`,
                                }}
                            />

                        )}
                    </div>
                ))}
            </div>

            <input
                ref={commandInputRef}
                style={{
                    backgroundColor: currentColors.background,
                    color: currentColors.text,
                    border: "none",
                    borderBottom: `1px solid ${currentColors.border}`,
                    fontSize: "16px",
                    outline: "none",
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        executeCommand()
                        setCommands([..._commands, input])
                        setCommandsIndex(_commands.length + 1)
                    }
                    else if (e.key === "ArrowUp") {
                        if (_commands.length > 0 && _commandsIndex > 0) {
                            setCommandsIndex(_commandsIndex - 1);
                            setInput(_commands[_commandsIndex - 1]);
                        }
                    }
                    else if (e.key === "ArrowDown") {
                        if (_commands.length > 0 && _commandsIndex < _commands.length - 1) {
                            setCommandsIndex(_commandsIndex + 1);
                            setInput(_commands[_commandsIndex + 1]);
                        } else {
                            setInput("");
                        }
                    }
                }}
                placeholder="Type a command..."
            />
        </div>
    );
};

export default Terminal;
