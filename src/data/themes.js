export const themes = {
    bluish: {
        name: "Ocean Blue",
        background: "#001f3f",
        text: "#d0e7ff",
        command: "#66b2ff",
        link: "#99ccff",
        border: "#3385cc",
        codeblock: "#002b5c"
    },
    purplish: {
        name: "Purple Haze",
        background: "#1f003f",
        text: "#e7d0ff",
        command: "#b266ff",
        link: "#cc99ff",
        border: "#8533cc",
        codeblock: "#2b005c"
    },
    pinkish: {
        name: "Neon Rose",
        background: "#2c001e",
        text: "#ffb3b3",
        command: "#ff66b2",
        link: "#ff99cc",
        border: "#ff80b3",
        codeblock: "#3d0030"
    },
    forest: {
        name: "Forest",
        background: "#0a1a0f",
        text: "#c8e6c9",
        command: "#69f0ae",
        link: "#b9f6ca",
        border: "#2e7d32",
        codeblock: "#0d2612"
    },
    sunset: {
        name: "Sunset",
        background: "#2d1b00",
        text: "#ffe0b2",
        command: "#ff9800",
        link: "#ffcc80",
        border: "#e65100",
        codeblock: "#3e2505"
    },
    midnight: {
        name: "Midnight",
        background: "#0d0d0d",
        text: "#b0b0b0",
        command: "#81d4fa",
        link: "#b3e5fc",
        border: "#424242",
        codeblock: "#1a1a1a"
    },
    oceanic: {
        name: "Oceanic",
        background: "#002b36",
        text: "#93a1a1",
        command: "#2aa198",
        link: "#6ccec3",
        border: "#586e75",
        codeblock: "#003845"
    },
    monochrome: {
        name: "Monochrome",
        background: "#1a1a1a",
        text: "#d4d4d4",
        command: "#f0f0f0",
        link: "#c0c0c0",
        border: "#555555",
        codeblock: "#242424"
    },
    candy: {
        name: "Candy",
        background: "#1a0a2e",
        text: "#f8bbd0",
        command: "#ea80fc",
        link: "#b388ff",
        border: "#ce93d8",
        codeblock: "#26103a"
    },
    light: {
        name: "Light",
        background: "#f5f5f5",
        text: "#333333",
        command: "#1976d2",
        link: "#1565c0",
        border: "#e0e0e0",
        codeblock: "#ffffff"
    },
};

export const themeList = Object.entries(themes).map(([key, value]) => ({
    key,
    ...value,
}));

export const defaultTheme = themes.bluish;

export default themes;
