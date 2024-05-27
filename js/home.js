/* LOADS HOME PAGE */
function Home() {
    let root = document.getElementById("root");
    root.className = "home";
    root.innerHTML = "";

    let backButton = document.getElementById("back-button");
    backButton.style.display = "none";

    let homeHeading = document.createElement("h");
    let homeMenu = document.createElement("ul");

    homeMenu.id = "home-menu";
    homeHeading.id = "home-heading";
    
    let homeMenuInnerHTML = "";    
    CONFIG.homeMenuList.forEach((val) => {
        let link = "";
        
        if(val.url != null) {
            link = `href="${val.url}" target="_blank"`
        } else {
            link = `onclick="route(${val.route})"`
        }

        homeMenuInnerHTML += `<li>
            <a ${link}>${val.name}</a>
        </li>\n`
    })
    
    homeHeading.innerText = CONFIG.name;
    homeMenu.innerHTML = homeMenuInnerHTML;
    
    root.append(homeHeading);
    root.append(homeMenu);
}
