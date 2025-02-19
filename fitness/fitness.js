function toggleSideBar() {
    const exerciseInfo = document.querySelector("#exercise-info");
    const entry = document.querySelector(".exerciseEntry");
    const heading = document.querySelector("h1");
    exerciseInfo.classList.toggle("hide");
    entry.classList.toggle("hide");
    heading.classList.toggle("hide");
}




document.querySelector("#sideBarButton").addEventListener("click", toggleSideBar);