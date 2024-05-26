function switchTheme() {
    CONFIG.theme.type = CONFIG.theme.type == "dark"? "light":"dark";
    GlobalTheme.theme = CONFIG.theme[CONFIG.theme.type];

    let themeSwitchButton = document.getElementById("theme-switch-button");
    themeSwitchButton.src = GlobalTheme.theme.icon;

    switch(GlobalTheme.page) {
        case "home":
            refreshHomeTheme();
            break;
    }
}
