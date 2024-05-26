let rootMenu = document.getElementById("root-menu");
let rootMenuInnerHTML = "";

CONFIG.rootMenuList.forEach((val) => {
    rootMenuInnerHTML += `<li><a target=_blank"" href=${val.url}>${val.name}</a></li>\n`
})

rootMenu.innerHTML = rootMenuInnerHTML;

function refreshHomeTheme() {
    let root = document.getElementById("root");
    let root_heading = document.getElementById("root-heading");
    root.style.background = GlobalTheme.theme.home.background;
    root_heading.style.color = GlobalTheme.theme.home.heading;
}
