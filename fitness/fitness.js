function toggleSideBar() {
    const exerciseInfo = document.querySelector("#exercise-info");
    const entry = document.querySelector(".exerciseEntry");
    const heading = document.querySelector("h1");
    exerciseInfo.classList.toggle("hide");
    entry.classList.toggle("hide");
    heading.classList.toggle("hide");
}


document.querySelector("#sideBarButton").addEventListener("click", toggleSideBar);

let entries = document.querySelector(".entries");

function addEntry() {
    console.log("run");
    currentEntries.push(
        {
            date: document.querySelector("#dateInput").value,
            type: document.querySelector("#typeInput").value,
            reps: document.querySelector("#repsInput").value,
            heartRate: document.querySelector("#heartRateInput").value,
            duration: document.querySelector("#durationInput").value
        }
    )
    setLocalStorage("currentEntries", currentEntries);
    entries.innerHTML +=
        `
            <div class="exerciseEntry">
                <h2>Date: ${entry.date}</h2>
                <p class="type">Exercise Type: ${entry.type}</p>
                <p class="reps">Reps: ${entry.reps}</p>
                <p class="heartRate">Heart Rate: ${entry.heartRate} bpm</p>
                <p class="duration">Duration: ${entry.duration} minutes</p>
            </div>
        `
    console.log("run");
}

// document.querySelector("#newEntry").addEventListener("submit", addEntry);


let currentEntries = [
    {
        date: "02/19/2025",
        type: "Situps",
        reps: "100",
        heartRate: "144",
        duration: "15"
    },
    {
        date: "02/18/2025",
        type: "Cycling",
        reps: "N/A",
        heartRate: "168",
        duration: "50"
    },
    {
        date: "02/17/2025",
        type: "Boxing",
        reps: "N/A",
        heartRate: "164",
        duration: "60"
    },
    {
        date: "02/16/2025",
        type: "Running",
        reps: "N/A",
        heartRate: "164",
        duration: "20"
    }
    
]

setLocalStorage("currentEntries", currentEntries);

console.log(getLocalStorage("currentEntries"));


function setLocalStorage(key, data) { // set needs a key and the data
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function convertToHtml() {

    let entryList = getLocalStorage("currentEntries");
    
    for (let i = entryList.length - 1; i > -1; i--) {
       entry = entryList[i];

       entries.innerHTML +=
         `
            <div class="exerciseEntry">
                <h2>Date: ${entry.date}</h2>
                <p class="type">Exercise Type: ${entry.type}</p>
                <p class="reps">Reps: ${entry.reps}</p>
                <p class="heartRate">Heart Rate: ${entry.heartRate} bpm</p>
                <p class="duration">Duration: ${entry.duration} minutes</p>
            </div>
        `
    }   
}   

convertToHtml();

document.querySelector("#newEntry").addEventListener("submit", function(event)
{
    console.log("works");
    event.preventDefault();
    addEntry();
});