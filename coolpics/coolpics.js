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

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const element = event.target;
    const source = element.getAttribute("src");
    const photoName = source.split("-");
    fileName = photoName[0].concat("-full.jpeg");
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fileName, "photo"));

    const viewerButton = document.querySelector(".close-viewer");
    viewerButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    console.log("running");
    const viewerDiv = document.querySelector(".viewer");
    viewerDiv.remove();
}

const openGallery = document.querySelector(".gallery");
openGallery.addEventListener("click", viewHandler);

