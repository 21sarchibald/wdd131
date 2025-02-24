const themeSelector = document.querySelector("#displayMode");
function changeTheme() {
    if (themeSelector.value == "dark") {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
}
document.getElementById("displayMode").addEventListener("change", changeTheme);

function toggleSideBar() {
    const sideBar = document.querySelector(".side-bar");
    const entries = document.querySelector(".entries");
    const heading = document.querySelector("h1");
    sideBar.classList.toggle("hide");
    entries.classList.toggle("hide");
    heading.classList.toggle("hide");
}


document.querySelector("#sideBarButton").addEventListener("click", toggleSideBar);


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

function addFoodEntry() {

    date = document.querySelector("#foodDateInput").value;

    const currentEntries = getLocalStorage("currentFoodEntries");

    if (date in currentEntries) {
        currentEntries[date] =
        {
            foodsEaten: currentEntries[date].foodsEaten + ", " + document.querySelector("#foodInput").value + " (" + document.querySelector("#amountInput").value + ")",
            totalCalories: parseFloat(currentEntries[date].totalCalories) + parseFloat(document.querySelector("#calorieInput").value),
            totalProtein: parseFloat(currentEntries[date].totalProtein) + parseFloat(document.querySelector("#proteinInput").value)
        };
    }

    else {
        currentEntries[date] =
        {
            foodsEaten: document.querySelector("#foodInput").value + " (" + document.querySelector("#amountInput").value + ")",
            totalCalories: document.querySelector("#calorieInput").value,
            totalProtein: document.querySelector("#proteinInput").value
        };
    }

    setLocalStorage("currentFoodEntries", currentEntries);
    // console.log(getLocalStorage("currentFoodEntries"));
    convertToFoodHtml();
}

function convertToFoodHtml() {

    pastFoodEntries.innerHTML = "";

    let entryList = getLocalStorage("currentFoodEntries");
    let keysList = Object.keys(entryList);
    
    for (let i = keysList.length - 1; i > 0; i--) {
        key = keysList[i];
        entry = entryList[key];

        pastFoodEntries.innerHTML +=
         `
            <div class="entry">
                <h2 class="date">Date: ${key}</h2>
                <p class="food">Foods Eaten: ${entry.foodsEaten}</p>
                <p class="calories">Total Calories: ${entry.totalCalories}</p>
                <p class="protein">Total Grams of Protein: ${entry.totalProtein}</p>
            </div>
        `
    }
}   

convertToFoodHtml();

const foodEntryForm = document.querySelector("#newFoodEntry");

foodEntryForm.addEventListener("submit", function(event)
{
    event.preventDefault();
    addFoodEntry();
    foodEntryForm.reset();
});