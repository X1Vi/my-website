import React, { useState } from 'react';

const commands = {
  about: `I am a Full Stack Mobile Developer specializing in React Native and React, transforming Figma designs into functional apps with seamless payment gateways, REST APIs, third-party integrations, Bluetooth (thermal printers), image optimization, and custom graph libraries. Beyond mobile development, I have experience with security tools like Metasploit, Burp Suite, ZAP, and MOBSf, as well as dev tools like Docker, Git, and GitHub. I’m proficient in Linux, contribute to open-source projects like Bluesky, FreeCodeCamp, Mattermost, and Memos, and continuously expand my knowledge in machine learning and AI. I have worked on codebases with over 30 million users and increasing, showcasing my ability to contribute to large-scale projects with significant impact.`,

  techstack: [
    { name: "Web Development", details: "MERN, Django, REST API, Socket.io, ORM (SQL, MongoDB), Python, Rust, Microservices" },
    { name: "Mobile Development", details: "React Native" },
    { name: "Game Development", details: "Godot, Bevy" },
    { name: "Version Control", details:  "Git, GitHub, Lazygit"},
    { name: "DevOps", details: "Docker, CI/CD" },
    { name: "Design", details: "Figma" },
    { name: "Operating Systems", details: "Windows, Linux (Ubuntu, Parrot, Kali)" }
  ],

  experience: [
    "Developed and managed a microservices architecture with 8 microservices.",
    "Designed an image compression system reducing file sizes by up to 90%.",
    "Integrated anti-root detection in a React Native app for security.",
    "Developed an image metadata stripping feature for privacy.",
    "Implemented Tilled and Eazebuzz payment APIs.",
    "Created a Slack bot for real-time Django server error notifications.",
    "Patched a session login vulnerability, improving security.",
    "Developed a custom graphing library using react-native-svg."
  ],

  open_source: [
    { 
      name: "Bluesky", 
      contributions: "QR code generation, custom scroll bar, fixed unfollow blocked accounts issue.",
      link: "https://github.com/bluesky-social/social-app/pulls/X1Vi"
    },
    { 
      name: "UseMemos", 
      contributions: "Fixed Mermaid diagram themes, memo collapsing, and authentication issues.",
      link: "https://github.com/usememos/memos/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
    },
    { 
      name: "LazyGit", 
      contributions: "Added commit history filtering by date range.",
      link: "https://github.com/jesseduffield/lazygit/pulls/X1Vi"
    },
    { 
      name: "FreeCodeCamp", 
      contributions: "Persistent pane state saving, improved debugging workflow.",
      link: "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
    },
    { 
      name: "Mattermost", 
      contributions: "Enhanced emoji picker functionality.",
      link: "https://github.com/mattermost/mattermost/pulls?q=is%3Apr+author%3AX1Vi+is%3Aclosed"
    }
  ],

  education: "Bachelor of Technology (B.Tech) in Computer Science and Engineering (2019–2023).",

  socials: [
    { name: "Itch.io", link: "https://saintelgrandosmokio.itch.io" },
    { name: "GitHub", link: "https://github.com/X1Vi" },
    { name: "Medium", link: "https://medium.com/@x1vi" },
    { name: "Bluesky", link: "https://bsky.app/profile/x1vizi.bsky.social" },
    { name: "Sponsor Me", link: "https://buymeacoffee.com/x1vi_donateforopensource" }
  ],

  games: [
    { name: "Puzzle Game", link: "https://saintelgrandosmokio.itch.io/puzzlegame" },
    { name: "Sky Shader", link: "https://saintelgrandosmokio.itch.io/sky-shader" },
    { name: "Water Shader", link: "https://saintelgrandosmokio.itch.io/water-shader" },
    { name: "Maze Game Concept", link: "https://saintelgrandosmokio.itch.io/mazegameconcept" }
  ],

  help: "Available commands: about, techstack, experience, open_source, education, socials, games, clear, help",

  clear: "Terminal cleared."
};

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const executeCommand = () => {
    if (input === 'clear') {
      setHistory([]); // Clears the terminal history
    } else if (commands[input]) {
      setHistory([...history, { command: input, output: commands[input] }]);
    } else {
      setHistory([...history, { command: input, output: `Command not found: ${input}` }]);
    }
    setInput('');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const colors = {
    dark: {
      background: 'black',
      text: 'lime',
      command: 'lightgreen',
      link: 'lightblue',
      border: 'lime'
    },
    light: {
      background: 'white',
      text: 'black',
      command: 'green',
      link: 'blue',
      border: 'green'
    }
  };

  const currentColors = isDarkMode ? colors.dark : colors.light;

  return (
    <div style={{ fontFamily: 'monospace', backgroundColor: currentColors.background, color: currentColors.text, padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: '10px',
          marginBottom: '20px',
          alignSelf: 'flex-end',
          backgroundColor: currentColors.background,
          color: currentColors.text,
          border: `2px solid ${currentColors.border}`,
          cursor: 'pointer',
          fontSize: '16px'
        }}>
        Toggle Theme
      </button>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Available Commands:</strong></p>
        <ul>
          {Object.keys(commands).map((command, index) => (
            <li key={index} style={{ listStyleType: 'none' }}>
              <span style={{ color: currentColors.command }}>&gt; {command}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flexGrow: 1, overflowY: 'auto' }}>
        {history.map((entry, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p><span style={{ fontWeight: 'bold' }}>&gt; {entry.command}</span></p>
            {Array.isArray(entry.output) ? (
              <div style={{ marginLeft: '10px' }}>
                {entry.output.map((item, idx) => (
                  <p key={idx}>
                    {item.name ? (
                      item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: currentColors.link }}>
                          {item.name}
                        </a>
                      ) : (
                        `${item.name}: ${item.details}`
                      )
                    ) : item}
                  </p>
                ))}
              </div>
            ) : (
              <p>{entry.output}</p>
            )}
          </div>
        ))}
      </div>

      <input
        style={{ backgroundColor: currentColors.background, color: currentColors.text, border: 'none', borderBottom: `1px solid ${currentColors.border}`, fontSize: '16px', outline: 'none' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && executeCommand()}
        placeholder="Type a command..."
      />
    </div>
  );
};

export default Terminal;
