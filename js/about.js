function AboutMe() {
    let root = document.getElementById("root");
    root.innerHTML = "";
    root.className = "about";

    let backButton = document.getElementById("back-button");
    backButton.style.display = "block";

    let profileImageDiv = document.createElement("div");
    profileImageDiv.style.overflow = "hidden";
    
    let profileImage = document.createElement("img");
    profileImage.src = "/imgs/profile.jpg";
    profileImage.id = "about-profile-img";
    profileImageDiv.append(profileImage);

    let line = document.createElement("div");
    line.id = "about-mid-line";
    line.style.background = CONFIG.theme.accent;

    let profileData = document.createElement("div");
    profileData.id = "about-profile-data";

    let p1 = document.createElement("p");
    p1.innerText = "Software Developer";
    profileData.append(p1);

    let p2 = document.createElement("p");
    p2.innerText = "Music Composer";
    profileData.append(p2);
    
    root.append(profileImageDiv);
    root.append(line);
    root.append(profileData);
}
