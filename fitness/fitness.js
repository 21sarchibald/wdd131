function toggleSideBar() {
    const sideBar = document.querySelector("#side-bar");
    const entry = document.querySelector(".exerciseEntry");
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

let currentFoodEntries = {

    "02/16/2025": {
        foodsEaten: "String cheese (2), Eggs (2), Cheese (1/2 cup), Ground beef (1/2 cup), Bread (1 slice), Broccoli (1/2 cup), Chocolate Chip Cookie (1), Greek Yogurt (5.3oz), Applesauce (3oz)",
        totalCalories: 1490,
        totalProtein: 110
    },

    "02/17/2025": {
        foodsEaten: "Eggs (2), Oatmeal (1/2 cup), Greek Yogurt (5.3oz), Ground Turkey (1/2 cup), Cheese (1/4 cup), Spinach (1 cup), Applesauce (3oz), String Cheese (1), Chocolate Chip Cookie (1), Chicken (4oz), Rice (3/4 cup), Green Beans (1/2 cup)",
        totalCalories: 1297,
        totalProtein: 116
    },

    "02/18/2025": {
        foodsEaten: "Eggs (2), Toast (1 slice), Greek Yogurt (5.3oz), Ground Beef (1/2 cup), Cheddar Cheese (1/2 cup), Broccoli (1/2 cup), Banana (1), String Cheese (2), Granola Bar (1), Chicken (4oz), Pasta (1 cup), Carrots (1/2 cup)",
        totalCalories: 1545,
        totalProtein: 115
    },

    "02/19/2025": {
        foodsEaten: "Eggs (2), Bagel (1/2), Greek Yogurt (5.3oz), Ground Beef (1/2 cup), Mozzarella Cheese (1/2 cup), Bell Peppers (1/2 cup), Applesauce (3oz), String Cheese (1), Peanut Butter (2 tbsp), Chicken (4oz), Quinoa (3/4 cup), Roasted Sweet Potatoes (1/2 cup)",
        totalCalories: 1545,
        totalProtein: 116
    }

}


function setLocalStorage(key, data) { // set needs a key and the data
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}


let pastExerciseEntries = document.querySelector("#pastExerciseEntries");

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

// document.querySelector("#newExerciseEntry").addEventListener("submit", addExerciseEntry);


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

function addFoodEntry() {
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

document.querySelector("#newFoodEntry").addEventListener("submit", function(event)
{
    event.preventDefault();
    addFoodEntry();
})