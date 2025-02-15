import recipes from "./recipes.mjs";


function getRandomNumber(number) {
    return Math.floor(Math.random()*number)
}

function getRandomItem(array) {
    return array[getRandomNumber(array.length)];
}

function tagsTemplate(tags) {
    let tagsHtml = `<p class="recipeTag">${tags[0]}</p>`;
    for (let i = 1; i < tags.length; i++)
    {
            tagsHtml += `<p class="recipeTag">${tags[i]}</p>`;
    }
    return tagsHtml;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++) {
        // check to see if the current index of the loop is less than our rating
        if (i < rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        // else output an empty star
        else {
            html += '<span aria-hidden="true" class="icon-star">☆</span>';
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html;
}

function recipeTemplate(recipe) {
    return `
            <img class="recipeImage" src="${recipe.image}" alt="Image of ${recipe.name}">
            <div id="recipeInfo">
                ${tagsTemplate(recipe.tags)}
                <p class="recipeName">${recipe.name}</p>
            
                ${ratingTemplate(recipe.rating)}
                <p id="description">${recipe.description}</p>
            </div>
        `
}

// const recipe = getRandomItem(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    console.log(recipeList[0]);
    const recipeSection = document.querySelector("#recipe");

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let recipeOutput = ``;
    recipeList.forEach(recipe => {
        recipeOutput += recipeTemplate(recipe);
    });

	// Set the HTML strings as the innerHTML of our output element.

    recipeSection.innerHTML = recipeOutput;

}

function init() {
  // get a random recipe
  const recipe = getRandomItem(recipes)
  // render the recipe with renderRecipes.
  console.log([recipe]);
  renderRecipes([recipe]);
}
init();

function filterRecipes(query) {
    console.log(query);
    const lowerQuery = query.toLowerCase();

    function searchCallback(recipe) {
        console.log(recipe);
        return (recipe.name.toLowerCase().includes(lowerQuery) ||
        recipe.description.toLowerCase().includes(lowerQuery) ||
        recipe.tags.find((string) => string.toLowerCase().includes(lowerQuery)) ||
        recipe.recipeIngredient.find((string) => string.toLowerCase().includes(lowerQuery)));
    }

    renderRecipes(recipes.filter(searchCallback));

}

document.querySelector("#searchForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    const query = document.querySelector("#searchInput").value;
    filterRecipes(query);
});