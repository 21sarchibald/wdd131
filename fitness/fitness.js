function toggleSideBar() {
    const exerciseInfo = document.querySelector("#exercise-info");
    const entry = document.querySelector(".exerciseEntry");
    const heading = document.querySelector("h1");
    exerciseInfo.classList.toggle("hide");
    entry.classList.toggle("hide");
    heading.classList.toggle("hide");
}


document.querySelector("#sideBarButton").addEventListener("click", toggleSideBar);

function addEntry() {


    let entries = document.querySelector(".entries");

    let date = document.querySelector("#dateInput").value;
    let type = document.querySelector("#typeInput").value;
    let reps = document.querySelector("#repsInput").value;
    let heartRate = document.querySelector("#heartRateInput").value;
    let duration = document.querySelector("#durationInput").value;

    entries.innerHTML += `
                <div class="exerciseEntry">
                    <h2>Date: ${date}</h2>
                    <p class="type">Exercise Type: ${type}</p>
                    <p class="reps">Reps: ${reps}</p>
                    <p class="heartRate">Heart Rate: ${heartRate} bpm</p>
                    <p class="duration">Duration: ${duration} minutes</p>
                </div>  
    `

console.log("working");
}

// document.querySelector("#newEntry").addEventListener("submit", addEntry);

document.querySelector("#newEntry").addEventListener("submit", function(event)
{
    event.preventDefault();
    addEntry();
});