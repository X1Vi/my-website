const commands = {
    about: `<strong>I am a Full Stack Developer & Software Engineer</strong> specializing in Rust, React Native, Godot, and TypeScript. I build high-performance systems — from microservices and payment integrations to low-latency async networking (5,000× speed improvement).<br><br>  

    I contribute to open-source projects such as <strong>Bluesky (30M+ users)</strong>, <strong>Godot</strong>, <strong>Redot</strong>, <strong>FreeCodeCamp</strong>, <strong>UseMemos</strong>, <strong>Mattermost</strong>, and <strong>LazyGit</strong>, working with large-scale systems and collaborating with global communities to enhance software quality and user experience.<br>  
    My experience maintaining and improving codebases with <strong>millions of users</strong> has strengthened my ability to follow best practices for scalability and performance.<br><br>  
    
    I'm also a published game developer since 2020 with projects in Godot and Bevy (ECS), and experienced in social media strategy and content creation.<br><br>
    
    You can support me by <strong>sponsoring me on Buy Me a Coffee</strong>, check the "socials" command.<br>
    `,



    techstack: [
        {
            "name": "Programming Languages",
            "details": "<strong>Rust</strong>, <strong>TypeScript</strong>, <strong>Python</strong>, <strong>GDScript</strong>, <strong>C++</strong>, <strong>Go</strong>, <strong>Elixir</strong>, <strong>JavaScript</strong>"
        },
        {
            "name": "Frameworks & Runtimes",
            "details": "<strong>React Native</strong>, <strong>React</strong>, <strong>Django</strong>, <strong>Tokio</strong>, <strong>Actix</strong>, <strong>Axum</strong>, <strong>Serde</strong>, <strong>Bevy (ECS)</strong>"
        },
        {
            "name": "Game Engines & Tools",
            "details": "<strong>Godot</strong>, <strong>Bevy</strong>, <strong>Macroquad</strong>, <strong>Aseprite</strong>, <strong>Shader Development</strong>"
        },
        {
            "name": "Web3 / Blockchain",
            "details": "<strong>Solana</strong>, <strong>Meteora</strong>, <strong>Web3.js</strong>, <strong>DLMM/DAMM Pools</strong>, <strong>Betfair</strong>"
        },
        {
            "name": "Cloud Infrastructure & DevOps",
            "details": "<strong>Docker</strong>, <strong>CI/CD</strong>, <strong>Microservices</strong>, <strong>Git</strong>, <strong>GitHub</strong>, <strong>Linux</strong>"
        },
        {
            "name": "Database Management",
            "details": "<strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>SQLite</strong>"
        },
        {
            "name": "Design & Content",
            "details": "<strong>Figma</strong>, <strong>GIMP</strong>, <strong>Aseprite</strong>, <strong>Canva</strong>, <strong>CapCut</strong>, <strong>KdenLive</strong>"
        },
        {
            "name": "Security & Penetration Testing",
            "details": "<strong>Burp Suite</strong>, <strong>Metasploit</strong>, <strong>MOBSf</strong>, <strong>OWASP ZAP</strong>, <strong>Anti-root Detection</strong>"
        },
        {
            "name": "Social Media & Analytics",
            "details": "<strong>YouTube</strong>, <strong>Bluesky</strong>, <strong>LinkedIn</strong>, <strong>Google Analytics</strong>, <strong>Adobe Express</strong>"
        },
        {
            "name": "Domains",
            "details": "<strong>Web3/Blockchain</strong>, <strong>Low-Latency Systems</strong>, <strong>Game Development</strong>, <strong>Mobile Development</strong>, <strong>Digital Marketing</strong>"
        }
    ],
    resume: `Summary<br>
    Full Stack Developer and Software Engineer with expertise in Rust, React Native, Godot, and TypeScript.<br>
    Experienced in building high-performance systems — from microservices architectures and payment integrations to low-latency async networking (5,000× speed improvement, 1s → 200µs).<br>
    Published game developer since 2020 with projects in Godot and Bevy (ECS). Active open source contributor to projects with 30M+ users including Godot, Bluesky, FreeCodeCamp, Mattermost, LazyGit, and Memos.<br><br>  
    
    Experience<br>  
    <strong>Rust & Web3 Developer</strong><br>  
    Tokio, Actix, Python, TypeScript, Web3.js<br>  
    Present, Remote<br>  
    • Reduced system latency by 5,000× — from 1 second to 200 microseconds (99.98% faster) — by implementing a backup socket connection for seamless failover.<br>  
    • Designed and optimized high-performance async services using Tokio & Actix, processing millions of real-time events with multi-threaded concurrency models.<br>  
    • Built fault-tolerant reconnection workflows with message checkpointing (clk, initialClk) and comprehensive unit/integration test harnesses.<br>  
    • Developed a Python quoter client with TCP sockets handling cache for orders and market streams from the Rust betting server.<br>  
    • Built Telegram AI Agent bots for Solana meme coins: trending news, holder analysis, liquidity analysis, wallet creation/import, and trade execution on Meteora.<br>  
    • Implemented quote fetching and transaction execution logic for DLMM, DBC, and DAMM liquidity pools using web3.js and TypeScript.<br>  
    • Analyzed wealth distribution of Solana accounts using Gini and Theil inequality metrics; assessed DEX liquidity distribution across Solana.<br><br>  

    <strong>Full Stack Mobile Developer</strong><br>  
    React Native, Django, Docker, Linux<br>  
    May 2024 – Dec 2024, Remote<br>  
    • Developed and managed a microservices architecture with ~8 services, ensuring scalability and maintainability.<br>  
    • Implemented image compression reducing file sizes by up to 90%, significantly cutting bandwidth costs and server load.<br>  
    • Integrated anti-root detection mechanism and image metadata/geo-location stripping for enhanced privacy and security.<br>  
    • Led full-stack integration of Tilled payment API (U.S.) and Eazebuzz payment API, covering frontend UI and backend transaction processing.<br>  
    • Created a Slack bot (Python) for real-time Django server error notifications, enabling non-technical teams to access logs without SSH.<br>  
    • Patched a session login vulnerability; developed a custom graphing library using react-native-svg powering merchant heatmaps and analytics dashboards.<br><br>  
    
    <strong>Mobile Developer Intern</strong><br>  
    React Native, Bluetooth, Git<br>  
    Dec 2023 – Feb 2024, Remote<br>  
    • Engineered a Bluetooth communication system for seamless thermal printer integration, enabling direct bill printing from the mobile app.<br>  
    • Developed inventory management systems for staff and stock tracking, improving operational efficiency.<br><br>  
    
    <strong>Game Development (Hobbyist)</strong><br>  
    2020 – Present | Godot, GDScript, Bevy (Rust), Aseprite, Shader Development<br>  
    • Built and published multiple 2D game prototypes on Itch.io, including a Tomb of the Mask-inspired vertical scroller.<br>  
    • Created a Stoneshard-like RPG in just 2 days for a mini-game-jam, featuring inventory, combat, and procedural dungeon elements.<br>  
    • Created custom visual effects: water ripple shaders, sky shaders, and other real-time effects using Godot Shader Language.<br>  
    • Built a modular RPG inventory system in Rust using Bevy and ECS architecture for flexibility and scalability.<br>  
    • Designed pixel art assets and UI elements with Aseprite, handling both visual design and programming.<br><br>  
    
    <strong>Open Source Contributions (Ongoing & Merged)</strong><br>  
    (Check the "open_source" command for more info)<br><br>  
    
    <strong>Godot (105k+ stars, C++/GDScript)</strong><br>  
    Fixed a bug in the text edit core engine component affecting in-game UI that the community had to work around for years.<br><br>  
    
    <strong>Redot (5k+ stars, C++/GDScript)</strong><br>  
    Applied the same text edit fix to the Redot fork, benefiting both engine communities.<br><br>  
    
    <strong>Bluesky (30M+ users)</strong> (React Native, TypeScript, Golang)<br>  
    Implemented QR code profile sharing; built a custom scroll bar for homepage usability; fixed a bug preventing unfollow of blocked accounts.<br><br>  
    
    <strong>UseMemos (4.6M Docker Pulls)</strong> (React, TypeScript, Golang)<br>  
    Fixed Mermaid diagram theme inconsistencies, memo collapsing issues, and a misconfiguration bug with Disallow Password Authentication switch.<br><br>  
    
    <strong>LazyGit (1M+ users)</strong> (Golang)<br>  
    Added a feature to filter commit history by date range for efficient navigation.<br><br>  
    
    <strong>FreeCodeCamp (1M+ users)</strong> (React, TypeScript, MongoDB)<br>  
    Introduced persistent pane state saving; enhanced debugging system allowing repeated test runs without auto-redirect.<br><br>  
    
    <strong>Mattermost (500K+ users)</strong> (React, TypeScript)<br>  
    Enhanced emoji picker with persistent selection across sessions.<br><br>  
    
    <strong>Education</strong><br>  
    Bachelor of Technology (B.Tech) in Computer Science and Engineering (2019–2023)<br>`,

    open_source: [
        {
            name: "Godot Engine (105k+ stars)",
            contributions: `Fixed a bug in the text edit core engine component
            affecting in-game UI that the community had to
            work around for years.`,
            link: "https://github.com/godotengine/godot/pulls/X1Vi"
        },
        {
            name: "Redot Engine (5k+ stars)",
            contributions: `Applied the same text edit fix to the Redot fork,
            benefiting both engine communities.`,
            link: "https://github.com/Redot-Engine/redot-engine/pulls/X1Vi"
        },
        {
            name: "Bluesky (30M+ users)",
            contributions: `
            Implemented QR code profile sharing,
            built a custom scroll bar for homepage usability,
            and fixed a bug preventing unfollow of blocked
            accounts.`,
            link: "https://github.com/bluesky-social/social-app/pulls/X1Vi"
        },
        {
            name: "UseMemos (4.6M Docker Pulls)",
            contributions: `Fixed Mermaid diagram theme inconsistencies, resolved 
            memo collapsing issues, and corrected a bug with the
            Disallow Password Authentication switch to prevent misconfigurations.`,
            link: "https://github.com/usememos/memos/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "LazyGit (1M+ users)",
            contributions: `Added a feature to filter 
            commit history by date range, making it easier for users
            to navigate and inspect specific commits.`,
            link: "https://github.com/jesseduffield/lazygit/pulls/X1Vi"
        },
        {
            name: "FreeCodeCamp (1M+ users)",
            contributions: `Introduced persistent pane state saving to eliminate
            manual layout adjustments and improved the debugging workflow by
            allowing repeated tests on the same challenge.`,
            link: "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        },
        {
            name: "Mattermost (500K+ users)",
            contributions: `Enhanced the emoji picker by making selections
            persistent across sessions, improving user convenience.`,
            link: "https://github.com/mattermost/mattermost/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
        }
    ],
    live_projects: [
        {
            name: "Dioxus Arti Client (Rust)",
            contributions: `Set up a Dioxus mobile environment integrated with Tor browsing via Arti Client for anonymous browsing.`,
            link: "https://github.com/X1Vi"
        },
        {
            name: "CLI Stock Screener (Rust)",
            contributions: `Built a command-line momentum strategy screener for stock market analysis using Grow API.`,
            link: "https://github.com/X1Vi"
        },
        {
            name: "Open Source Pixel Art Converter & Image Editor",
            contributions: `Developed a pixel art converter and image editor`,
            link: "https://x1vi.github.io/pixelArtConverter/"
        },
        {
            name: "Open Source Japanese Kanji & Vocab Learning App",
            contributions: `Developed a Japanese Kanji and vocabulary learning app`,
            link: "https://x1vi.github.io/Learn-Kanji/"
        },
        {
            name: "Github Visualizer Graphical",
            contributions: `Developed a GitHub visualizer graphical with heatmaps and calendar`,
            link: "https://x1vi.github.io/github-visual/"
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
            name: "RPG Game (Stoneshard-like)",
            link: "https://x1vi.itch.io/rpg-game-testing-can-break",
        },
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

    help: "Available commands: about, ls, techstack, open_source, education, resume, socials, games, qr, clear, help, video_editing, live_projects",
    ls: "Available commands: about, ls, techstack, open_source, education, resume, socials, games, qr, clear, help, video_editing, live_projects",

    qr: {
        qrUrl: "https://x1vi.github.io/my-website",
        label: "Scan to visit my website",
    },

    something: `
    Just clouds turned into ASCII art from my pixel art.
    Why not see my bluesky to see more of what I've been up to or sponsor me ?
    Check out the 'socials' command for more info.`,
    clear: "Terminal cleared.",

};

export const allCommandsAndData = [
    { command: "about", output: commands.about },
    { command: "techstack", output: commands.techstack },
    { command: "resume", output: commands.resume },
    { command: "open_source", output: commands.open_source },
    { command: "education", output: commands.education },
    { command: "socials", output: commands.socials },
    { command: "live_projects", output: commands.live_projects },
    { command: "video_editing", output: commands.video_editing },
    { command: "games", output: commands.games },
    { command: "qr", output: commands.qr },
];

export default commands;
