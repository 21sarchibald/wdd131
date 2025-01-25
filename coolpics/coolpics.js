const menuItems = document.querySelector("#menu-items");
function toggleMenu() {
    
    console.log(menuItems);
    menuItems.classList.toggle("hide");
}

const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menuItems.classList.remove("hide");
    }
}

window.addEventListener("resize", handleResize);