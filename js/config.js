/* FIXED CONFIGS */
const CONFIG = {
    name: "xunicatt", //home-heading
    homeMenuList: [ //routes [url/route]
        { name: "Home", route: `'home'` },
        { name: "Docs", route: `'docs'` },
        { name: "Instagram", url: "https://www.instagram.com/xunicatt"},
        { name: "Github", url: "https://github.com/xunicatt" },
        { name: "About Me", route: `'aboutme'` }
    ],
    theme: {
        primary: "cadetblue",
        accent: "#edb623",
        background: "#181818",
        foreground: "white"
    }
};

var ENV = {
    page: "",
    visitedPages: []
};

function route(str) {
    if(str == ENV.page) return;
    ENV.page = str;
    ENV.visitedPages.push(str);
    router();
}

function goBack() {
    if(ENV.visitedPages.length <= 1) return;
    ENV.visitedPages.pop();
    ENV.page = ENV.visitedPages[ENV.visitedPages.length - 1];
    router();
}
