const themeSelector = document.querySelector("#displayMode");
function changeTheme() {
    if (themeSelector.value == "dark") {
        document.body.classList.add("dark");
        document.getElementById("logo-img").src = "byui-logo_white.png";
    }
    else {
        document.body.classList.remove("dark");
        document.getElementById("logo-img").src = "byui-logo_blue.webp";
    }
}
document.getElementById("displayMode").addEventListener("change", changeTheme);
console.log("working");