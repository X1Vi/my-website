import React, { useState, useRef, useEffect } from "react";
import AsciiAnimator from "./AsciiAnimator";
const Name = "X1Vi";
const commands = {
    about: `<strong>I am a Full Stack Mobile Developer</strong>. I have worked in fast-paced startup environments with aggressive deadlines, allowing me to adapt quickly and deliver high-quality solutions under pressure.<br><br>  

    I contribute to open-source projects such as <strong>Bluesky (30M+ users)</strong>, <strong>FreeCodeCamp</strong>, <strong>UseMemos</strong>, <strong>Mattermost</strong>, and <strong>LazyGit</strong>, working with large-scale systems and collaborating with global communities to enhance software quality and user experience.<br>  
    My experience maintaining and improving codebases with <strong>millions of users</strong> has strengthened my ability to follow best practices for scalability and performance.<br><br>  
    
    You can support me by <strong>sponsoring me on Buy Me a Coffee</strong>, check the "socials" command.<br>
    `,



    techstack: [
        {
            "name": "Full Stack Development",
            "details": "<strong>MERN Stack</strong> (MongoDB, Express.js, React, Node.js), <strong>Django</strong>, <strong>REST API</strong>, <strong>Socket.io</strong>"
        },
        {
            "name": "Mobile Development",
            "details": "<strong>React Native</strong>"
        },
        {
            "name": "Game Development",
            "details": "<strong>Godot</strong>, <strong>Bevy</strong>"
        },
        {
            "name": "Version Control & Collaboration",
            "details": "<strong>Git</strong>, <strong>GitHub</strong>, <strong>Lazygit</strong>"
        },
        {
            "name": "Cloud Infrastructure & DevOps",
            "details": "<strong>Docker</strong>, <strong>CI/CD</strong>, <strong>Microservices</strong>"
        },
        {
            "name": "Design & Prototyping",
            "details": "<strong>Figma</strong>, <strong>GIMP</strong>, <strong>Pixel</strong>, <strong>Pixelroma</strong>, <strong>Aseprite</strong>"
        },
        {
            "name": "API Testing & Tools",
            "details": "<strong>Postman</strong>"
        },
        {
            "name": "Database Management",
            "details": "<strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>SQLite</strong>"
        },
        {
            "name": "Programming Languages",
            "details": "<strong>Python</strong>, <strong>Rust</strong>, <strong>Golang</strong>, <strong>TypeScript</strong>, <strong>GDScript</strong>, <strong>JavaScript</strong>"
        },
        {
            "name": "Web Scraping",
            "details": "<strong>Web scraping using Python</strong>"
        },
        {
            "name": "Operating Systems",
            "details": "<strong>Windows</strong>, <strong>Linux</strong> (Ubuntu, Parrot, Kali), <strong>WSL</strong>"
        },
        {
            "name": "Security & Penetration Testing",
            "details": "<strong>Burp Suite</strong>, <strong>Metasploit</strong>, <strong>MOBSf</strong>, <strong>ZAP</strong>"
        }
    ]
    ,

    resume: `Summary<br>
    I am a Full Stack Mobile Developer specializing in React Native and React, transforming Figma designs into functional apps with seamless payment gateways, REST APIs, third-party integrations, Bluetooth (thermal printers), image optimization, and custom graph libraries.<br>  
    Beyond mobile development, I have experience with security tools like Metasploit, Burp Suite, ZAP, and MOBSf, as well as dev tools like Docker, Git, and GitHub.<br>  
    I’m proficient in Linux, contribute to open-source projects like Bluesky, FreeCodeCamp, Mattermost, and Memos, and continuously expand my knowledge in machine learning and AI.<br>  
    I have worked on codebases with over 30 million users and increasing, showcasing my ability to contribute to large-scale projects with significant impact.<br><br>  
    
    Experience<br>  
    <strong>Full Stack Mobile Developer</strong><br>  
    React Native, Django, Docker, Git, GitHub, Linux<br>  
    May 2024 – December<br>  
    • Developed and managed a microservices architecture with about 8 microservices, ensuring scalability and maintainability of the system.<br>  
    • Implemented an image compression system that reduced file sizes by up to 90%, significantly cutting down bandwidth costs and server load, saving substantial resources.<br>  
    • Integrated an advanced anti-root detection mechanism in the React Native app, preventing exploitation on rooted devices and ensuring a secure user experience.<br>  
    • Developed an image metadata and geo-location stripping feature, ensuring that sensitive user information is removed from uploaded images, enhancing privacy.<br>  
    • Led the integration of Tilled payment API for U.S. customers, implementing a full-stack solution covering both frontend UI and backend transaction processing.<br>  
    • Implemented Eazebuzz payment API within the Django backend, enabling seamless transactions for users.<br>  
    • Created a Slack bot using Python to notify teams of Django server errors in real time, allowing non-technical team members to access logs without SSH access.<br>  
    • Identified and patched a session login vulnerability that could allow unauthorized access, improving application security.<br>  
    • Developed a custom graphing library using react-native-svg, which powered a merchant landing page with interactive heatmaps and analytics visualizations, improving insights for business owners.<br><br>  
    
    <strong>Mobile Developer Intern</strong><br>  
    React Native, Git, GitHub<br>  
    3 Months<br>  
    • Engineered a Bluetooth communication system enabling seamless integration with thermal printers, allowing for quick and efficient bill printing directly from the mobile app.<br>  
    • Developed various inventory management systems, streamlining stock and staff tracking processes, leading to improved operational efficiency.<br><br>  
    
    <strong>Open Source Contributions (Ongoing & Merged)</strong><br>  
    (Check the "open_source" command for more info)<br><br>  
    
    <strong>Bluesky (30M+ users)</strong> (React Native, TypeScript, Golang)<br>  
    Bluesky Ongoing PRs – Implemented a QR code generation feature, allowing users to quickly share their profiles, improving user connectivity and engagement.<br>  
    Designed and built a custom scroll bar for the Bluesky homepage to make it clear that the component was scrollable, solving a usability issue where users were previously confused.<br>  
    Additionally, resolved a critical issue where users were unable to unfollow blocked accounts, ensuring a smoother and more consistent user experience.<br><br>  
    
    <strong>UseMemos (4.6M Docker Pulls)</strong> (React, TypeScript, Golang, Air)<br>  
    Merged PRs – Fixed Mermaid diagram theme inconsistencies, resolved memo collapsing issues, and fixed a bug where the Disallow Password Authentication switch was incorrectly enabled for users without an identity provider configured.<br>  
    This fix ensured that authentication settings could only be changed when an identity provider was properly set up, preventing misconfiguration and improving security.<br><br>  
    
    <strong>LazyGit (1M+ users)</strong> (Golang)<br>  
    Lazygit Ongoing PRs – Added a feature to filter commit history by date range, allowing users to efficiently navigate and inspect specific commits within a defined time frame.<br><br>  
    
    <strong>FreeCodeCamp (1M+ users)</strong> (React, TypeScript, Gatsby, MongoDB)<br>  
    Merged PRs – Introduced persistent pane state saving, eliminating the need for users to manually readjust layouts.<br>  
    Implemented an enhanced debugging system allowing developers to repeatedly run tests on the same challenge without being automatically redirected to the next one, significantly improving workflow efficiency.<br><br>  
    
    <strong>Mattermost (500K+ users)</strong> (React, TypeScript)<br>  
    Merged PRs – Enhanced emoji picker functionality by allowing persistent selection across sessions.<br><br>  
    
    <strong>Education</strong><br>  
    Bachelor of Technology (B.Tech) in Computer Science and Engineering (2019–2023)<br>`,

    open_source: [
        {
            name: "Bluesky",
            contributions: `
            Working on issues were lying around since 2023 in bluesky.
            
            Added a QR code generation feature for easy profile sharing,
            designed a custom scroll bar for bluesky's homepage,
            fixed an issue where users couldn’t unfollow blocked
            accounts.`,
            link: "https://github.com/bluesky-social/social-app/pulls/X1Vi"
        },
        {
            name: "UseMemos",
            contributions: `Fixed Mermaid diagram theme inconsistencies,resolved 
            memo collapsing issues, and corrected a bug with the
            Disallow Password Authentication' switch to prevent misconfigurations.`,
            link: "https://github.com/usememos/memos/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "LazyGit",
            contributions: `Added a feature to filter 
            commit history by date range, making it easier for users
            to navigate and inspect specific commits.`,
            link: "https://github.com/jesseduffield/lazygit/pulls/X1Vi"
        },
        {
            name: "FreeCodeCamp",
            contributions: `Introduced persistent pane state saving to eliminate
            manual layout adjustments and improved the debugging workflow by
            allowing repeated tests on the same challenge.`,
            link: "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "Mattermost",
            contributions: `Enhanced the emoji picker by making selections
            persistent across sessions, improving user convenience.`,
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

    games: [
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

    help: "Available commands: about, ls, techstack, open_source, education, resume, socials, games, clear, help, something, video_editing",
    ls: "Available commands: about, ls,  techstack, open_source, education, resume, socials, games, clear, help, something, video_editing",

    something: `
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

const something = `
    +   +++++++++++++++++++++:................:+++++++++++++++++++++++++++++++++++
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
`
const colors = {
    dark: {
        background: "#1e1e1e",
        text: "#d4d4d4",
        command: "#569cd6",
        link: "#9cdcfe",
        border: "#5a5a5a", // Lightened border color
        codeblock: "#2d2d2d"
    },
    pinkish: {
        background: "#2c001e",
        text: "#ffb3b3",
        command: "#ff66b2",
        link: "#ff99cc",
        border: "#ff80b3", // Lightened border color
        codeblock: "#3d0030"
    },
    bluish: {
        background: "#001f3f",
        text: "#d0e7ff",
        command: "#66b2ff",
        link: "#99ccff",
        border: "#3385cc", // Lightened border color
        codeblock: "#002b5c"
    },
    terminal: {
        background: "#1e1e1e",
        text: "#d4d4d4",
        command: "#569cd6",
        link: "#9cdcfe",
        border: "#5a5a5a", // Lightened border color
        codeblock: "#2d2d2d"
    },
    greenish: {
        background: "#002b1c",
        text: "#b3ffcc",
        command: "#66ff99",
        link: "#99ffcc",
        border: "#80ffb3", // Lightened border color
        codeblock: "#003d2e"
    },
    orangish: {
        background: "#3f2b00",
        text: "#ffd0b3",
        command: "#ff9966",
        link: "#ffcc99",
        border: "#cc8533", // Lightened border color
        codeblock: "#5c3d00"
    },
    purplish: {
        background: "#1f003f",
        text: "#e7d0ff",
        command: "#b266ff",
        link: "#cc99ff",
        border: "#8533cc", // Lightened border color
        codeblock: "#2b005c"
    },
    yellowish: {
        background: "#3f3f00",
        text: "#ffffb3",
        command: "#ffff66",
        link: "#ffff99",
        border: "#cccc33", // Lightened border color
        codeblock: "#5c5c00"
    },
    reddish: {
        background: "#3f0000",
        text: "#ffb3b3",
        command: "#ff6666",
        link: "#ff9999",
        border: "#cc3333", // Lightened border color
        codeblock: "#5c0000"
    },
    cyan: {
        background: "#003f3f",
        text: "#b3ffff",
        command: "#66ffff",
        link: "#99ffff",
        border: "#33cccc", // Lightened border color
        codeblock: "#005c5c"
    },
    brownish: {
        background: "#3f2b1f",
        text: "#ffd7b3",
        command: "#ff9966",
        link: "#ffcc99",
        border: "#cc8533", // Lightened border color
        codeblock: "#5c3d2b"
    }
};


// light: {
//     background: "#ffffff",
//     text: "#333333",
//     command: "#007acc",
//     link: "#0066cc",
//     border: "#e0e0e0", // Lightened border color
//     codeblock: "#f5f5f5"
// },

const Terminal = () => {
    const [history, setHistory] = useState([{ command: "help", output: commands.help }]);
    const [input, setInput] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [toggleAvailableCommands, setToggleAvailableCommands] = useState(false);
    const historyRef = useRef(null); // Ref for the history container
    const commandInputRef = useRef(null); // Ref for the command input
    const [_commands, setCommands] = useState([]);
    const [_commandsIndex, setCommandsIndex] = useState(-1);
    const [clearedOnce, setClearedOnce] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [holdHistory, setHoldHistory] = useState([])
    const [normalMode, setSwitchNormalMode] = useState(false)
    const [currentTheme, setCurrentTheme] = useState(colors.pinkish)
    const [currentColors, setCurrentColors] = useState(colors.pinkish)
    const allCommandsAndData = [
        { command: "about", output: commands.about },
        { command: "techstack", output: commands.techstack },
        { command: "resume", output: commands.resume },
        { command: "open_source", output: commands.open_source },
        { command: "education", output: commands.education },
        { command: "socials", output: commands.socials },
        { command: "games", output: commands.games },
    ];

    useEffect(() => {

        if (normalMode) {
            setHoldHistory(history)
            setHistory(allCommandsAndData)
        }
        else if (!normalMode && clearedOnce) {
            setHistory(holdHistory)
        }
    }, [normalMode])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize(); // Call handler right away so state gets updated with initial window size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setClearedOnce(true)
    }, [history])

    useEffect(() => {
        setClearedOnce(false)
    }, [])
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
        const themes = Object.values(colors);
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setCurrentTheme(themes[nextIndex]);

        console.log(currentTheme);
    };

    useEffect(()=>{
        setCurrentColors(currentTheme)
    },[currentTheme])

    

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
                    onClick={() => setSwitchNormalMode(!normalMode)}
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
                        borderRadius: "4px", // Added for a smoother look
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px ${currentColors.border}`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    {normalMode ? "Hacker Mode" : "Normal Mode"}

                    {/* Scanner line animation */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "2px",
                        backgroundColor: currentColors.text,
                        opacity: 0.7,
                        animation: "scanLine 2s linear infinite",
                        filter: `drop-shadow(0 0 5px ${currentColors.text})`, // Added glow effect
                    }}></div>

                    {/* Terminal border flicker */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: `2px solid ${currentColors.border}`,
                        opacity: 0,
                        animation: "borderFlicker 3s infinite",
                        filter: `drop-shadow(0 0 5px ${currentColors.border})`, // Added glow effect
                    }}></div>

                    {/* Terminal text glow pulse */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        boxShadow: `inset 0 0 10px ${currentColors.text}`, // Increased glow size
                        opacity: 0,
                        animation: "glowPulse 4s infinite",
                    }}></div>

                    {/* Hover ripple effect */}
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "0",
                        height: "0",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        transform: "translate(-50%, -50%)",
                        transition: "width 0.4s ease, height 0.4s ease, opacity 0.4s ease",
                        pointerEvents: "none",
                        opacity: 0,
                    }}></div>

                    {/* Required keyframe animations */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
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
            `}} />
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
                    {/* <button
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
                    </button> */}
                </>

                :
                null
                // <button
                //     onClick={() => setToggleAvailableCommands(!toggleAvailableCommands)}
                //     style={{
                //         padding: "10px",
                //         backgroundColor: currentColors.background,
                //         color: currentColors.text,
                //         border: `2px solid ${currentColors.border}`,
                //         cursor: "pointer",
                //         fontSize: "16px",
                //     }}
                // >
                //     {toggleAvailableCommands ? "Hide Commands" : "Show Commands"}
                // </button>
            }

            <div ref={historyRef} style={{
                flexGrow: 1,
                overflowY: "auto",
                fontFamily: "monospace",
                padding: "12px",
                background: `linear-gradient(135deg, ${currentColors.codeblock} 0%, ${'yellow'} 250%)`,
                color: currentColors.text,
                borderRadius: "4px"
            }}>
                {history.map((entry, index) => (
                    <div key={index} style={{
                        marginBottom: "20px",
                        borderBottom: `1px solid ${currentColors.border}`,
                        paddingBottom: "10px"
                    }}>
                        {!clearedOnce ? (
                            <div style={{ marginBottom: "10px" }}>
                                <AsciiAnimator />
                                <pre style={{
                                    margin: "0",
                                    overflow: "auto",
                                    maxWidth: "100%"
                                }}>{asciiArt.art}</pre>
                            </div>
                        ) : null}

                        <p style={{ margin: "8px 0" }}>
                            <span style={{
                                fontWeight: "bold",
                                color: currentColors.command
                            }}>root@x1vi $ {entry.command}</span>
                        </p>

                        {Array.isArray(entry.output) ? (
                            <div style={{
                                marginLeft: "15px",
                                lineHeight: "1.5"
                            }}>
                                {entry.output.map((item, idx) => (
                                    <div key={idx} style={{
                                        marginBottom: "8px"
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
                                                            textWrap: 'break-word',
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
                            <div>
                                {entry.command === "something" ? (
                                    <pre style={{
                                        margin: "5px 0",
                                        padding: "8px",
                                        backgroundColor: currentColors.background,
                                        borderRadius: "3px",
                                        overflowX: "auto"
                                    }}>{something}</pre>
                                ) : null}
                                <div
                                    style={{
                                        wordWrap: "break-word",
                                        textAlign: "left",
                                        overflowX: "auto",
                                        lineHeight: "1.5",
                                        marginLeft: "10px"
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<p style="margin: 5px 0">${entry.output}</p>`
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {windowWidth > 1024 ? (
                    <p style={{ fontWeight: "bold", display: "flex" }}>root@{Name.toLowerCase()} $</p>
                ) : null}
                {!normalMode ?


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
                            else if (e.key === "Tab") {
                                e.preventDefault();
                                const matchingCommands = Object.keys(commands).filter(command =>
                                    command.startsWith(input)
                                );
                                if (matchingCommands.length === 1) {
                                    setInput(matchingCommands[0]);
                                }
                            }
                        }}
                        placeholder="Type 'help' to see the commands"
                    />
                    : null}
            </div>
        </div >
    );
};

export default Terminal;
