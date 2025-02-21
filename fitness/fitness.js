function toggleSideBar() {
    const sideBar = document.querySelector(".side-bar");
    const entry = document.querySelector(".entry");
    const heading = document.querySelector("h1");
    sideBar.classList.toggle("hide");
    entry.classList.toggle("hide");
    heading.classList.toggle("hide");
}


document.querySelector("#sideBarButton").addEventListener("click", toggleSideBar);

let currentExerciseEntries = [
    {
        date: "02/16/2025",
        type: "Running",
        reps: "N/A",
        heartRate: "164",
        duration: "20"
    },
    {
        date: "02/17/2025",
        type: "Boxing",
        reps: "N/A",
        heartRate: "164",
        duration: "60"
    },
    {
        date: "02/18/2025",
        type: "Cycling",
        reps: "N/A",
        heartRate: "168",
        duration: "50"
    },
    {
        date: "02/19/2025",
        type: "Situps",
        reps: "100",
        heartRate: "144",
        duration: "15"
    } 
]

setLocalStorage("currentExerciseEntries", currentExerciseEntries);

console.log(getLocalStorage("currentExerciseEntries"));


function setLocalStorage(key, data) { // set needs a key and the data
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


const pastExerciseEntries = document.querySelector("#pastExerciseEntries");

function addExerciseEntry() {
    console.log("run");
    currentExerciseEntries.push(
        {
            date: document.querySelector("#dateInput").value,
            type: document.querySelector("#typeInput").value,
            reps: document.querySelector("#repsInput").value,
            heartRate: document.querySelector("#heartRateInput").value,
            duration: document.querySelector("#durationInput").value
        }
    )
    setLocalStorage("currentExerciseEntries", currentExerciseEntries);
    console.log(getLocalStorage("currentExerciseEntries"));
    convertToExerciseHtml();
}


function convertToExerciseHtml() {

    pastExerciseEntries.innerHTML = "";

    let entryList = getLocalStorage("currentExerciseEntries");
    
    for (let i = entryList.length - 1; i >= 0; i--) {
       entry = entryList[i];

       pastExerciseEntries.innerHTML +=
         `
            <div class="entry">
                <h2>Date: ${entry.date}</h2>
                <p class="type">Exercise Type: ${entry.type}</p>
                <p class="reps">Reps: ${entry.reps}</p>
                <p class="heartRate">Heart Rate: ${entry.heartRate} bpm</p>
                <p class="duration">Duration: ${entry.duration} minutes</p>
            </div>
        `
    }   
}   

convertToExerciseHtml();

const exerciseEntryForm = document.querySelector("#newExerciseEntry");

exerciseEntryForm.addEventListener("submit", function(event)
{
    console.log("works");
    event.preventDefault();
    addExerciseEntry();
    exerciseEntryForm.reset();
});