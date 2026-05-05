const commands = {
    about: `<strong>I am a Full Stack Mobile Developer</strong>. I have worked in fast-paced startup environments with aggressive deadlines, allowing me to adapt quickly and deliver high-quality solutions under pressure.<br><br>  

    I contribute to open-source projects such as <strong>Bluesky (30M+ users)</strong>, <strong>FreeCodeCamp</strong>, <strong>UseMemos</strong>, <strong>Mattermost</strong>, and <strong>LazyGit</strong>, working with large-scale systems and collaborating with global communities to enhance software quality and user experience.<br>  
    My experience maintaining and improving codebases with <strong>millions of users</strong> has strengthened my ability to follow best practices for scalability and performance.<br><br>  
    
    You can support me by <strong>sponsoring me on Buy Me a Coffee</strong>, check the "socials" command.<br>
    `,



    techstack: [
        {
            "name": "Full Stack Development",
            "details": "<strong>MERN Stack</strong> (MongoDB, Express.js, React, Node.js), <strong>Django</strong>, <strong>REST API</strong>, <strong>Socket.io</strong>, <strong>Tokio</strong>,  <strong>Axum</strong>,  <strong>Actix</strong>"
        },
        {
            "name": "Mobile Development",
            "details": "<strong>React Native</strong>"
        },
        {
            "name": "Game Development",
            "details": "<strong>Godot</strong>, <strong>Bevy</strong>, <strong>Macroquad</strong>"
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
            "details": "<strong>Figma</strong>, <strong>GIMP</strong>, <strong>Pixelroma</strong>, <strong>Aseprite</strong>"
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
        },
        {
            "name": "Hobbyist Languages",
            "details": "<strong>C++</strong>, <strong>Elixir</strong>"
        }

    ],
    resume: `Summary<br>
    I am a Full Stack Mobile Developer specializing in React Native and React, transforming Figma designs into functional apps with seamless payment gateways, REST APIs, third-party integrations, Bluetooth (thermal printers), image optimization, and custom graph libraries.<br>  
    Beyond mobile development, I have experience with security tools like Metasploit, Burp Suite, ZAP, and MOBSf, as well as dev tools like Docker, Git, and GitHub.<br>  
    I'm proficient in Linux, contribute to open-source projects like Bluesky, FreeCodeCamp, Mattermost, and Memos, and continuously expand my knowledge in machine learning and AI.<br>  
    I have worked on codebases with over 30 million users and increasing, showcasing my ability to contribute to large-scale projects with significant impact.<br><br>  
    
    Experience<br>  
    <strong>Trading Rust Developer</strong><br>  
    Rust, Tokio, Actix, Socket Programming, Threading<br>  
    Present<br>  
    • Reduced latency by 5000×, improving response time from 1 second to 200 microseconds (99.98% faster) by implementing a backup socket connection for seamless failover.<br>  
    • Building low-latency systems using Rust, optimizing for speed, scalability, and resilience.<br>  
    • Leveraging Tokio and Actix for high-performance asynchronous networking and concurrent task management.<br>  
    • Working with socket programming and multi-threaded architectures to handle real-time data streams.<br>  
    • Writing comprehensive unit and integration tests to ensure robustness, maintainability, and production-readiness of critical components.<br><br>  

    <strong>Full Stack Mobile Developer</strong><br>  
    React Native, Django, Docker, Git, GitHub, Linux<br>  
    May 2024 – December 2024<br>  
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
            fixed an issue where users couldn't unfollow blocked
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
    live_projects: [
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

    help: "Available commands: about, ls, techstack, open_source, education, resume, socials, games, clear, help, video_editing, live_projects",
    ls: "Available commands: about, ls,  techstack, open_source, education, resume, socials, games, clear, help, video_editing, live_projects",

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
];

export default commands;
