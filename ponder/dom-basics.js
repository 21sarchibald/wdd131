const newP = document.createElement("p");
newP.textContent = "Hello, World!";
document.body.append(newP);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
// newImage.src = "https://picsum.photos/200";
newImage.setAttribute("alt", "Placeholder Image");
// newImage.alt = "Placeholder Image";
document.body.append(newImage);

const newList = document.createElement("ul");

const title = "DOM Basics";
const subtitle = "Creating elements and appending them to the DOM";
const content = "New Content";

const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
newSection.innerHTML = `
<h2>${title}</h2>
<h3>${subtitle}</h3>
<p>${content}</p>`;
document.body.append(newSection);

const ingredientData = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 Tbsp", "8"];

function ingredientTemplate(index)
{
    return `<li>${portionData[index]} ${ingredientData[index]}</li>`
}

const ingredientList = document.createElement("ul");

// How to add a class to an item in Javascript.
ingredientList.classList.add("dark");
ingredientData.forEach(function(item, index) {
    ingredientList.innerHTML += ingredientTemplate(index);
})


document.body.append(ingredientList);