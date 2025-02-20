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

localStorage.setItem("test", "This is a test!");

let currentEntries = [
    {
        date: "02/16/2025",
        type: "Running",
        reps: "N/A",
        heartRate: "164",
        duration: "20 minutes"
    },
    {
        date: "02/17/2025",
        type: "Boxing",
        reps: "N/A",
        heartRate: "164",
        duration: "60 minutes"
    },
    {
        date: "02/18/2025",
        type: "Cycling",
        reps: "N/A",
        heartRate: "168",
        duration: "50 minutes"
    },
    {
        date: "02/19/2025",
        type: "Situps",
        reps: "100",
        heartRate: "144",
        duration: "15 minutes"
    }
]

// for (let i = 0; i < currentEntries.length; i++) {
//     setLocalStorage(i, currentEntries[i])
// }

setLocalStorage("currentEntries", currentEntries);

console.log(getLocalStorage("currentEntries"));


function setLocalStorage(key, data) { // set needs a key and the data
  localStorage.setItem(key, JSON.stringify(data));
}
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}