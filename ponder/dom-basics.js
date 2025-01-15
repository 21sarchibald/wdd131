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