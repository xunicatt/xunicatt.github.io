const CONFIG = {
    rootMenuList: [
        { name: "Home", url: "https://xunicatt.github.io" },
        { name: "Docs", url: "#" },
        { name: "Instagram", url: "https://www.instagram.com/xunicatt"},
        { name: "Github", url: "https://github.com/xunicatt" }
    ],
    theme: {
        type: "dark",
        dark: {
            icon: "/icons/moon.png",
            home: {
                heading: "white",
                background: "#181818"
            }
        },
        light: {
            icon: "/icons/sun.png",
            home: {
                heading: "black",
                background: "#ffffff"
            }
        }
    }
};

var GlobalTheme = {
    page: "home",
    theme: CONFIG.dark
};
