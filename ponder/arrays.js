const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ["A", "B", "C"];

function convertToGpa(grade) {
    if (grade === "A") {
        return 4;
    }
    else if (grade === "B") {
        return 3;
    }
    else {
        return 0;
    }
}

const gpaPoints = grades.map(convertToGpa);

const gpaSum = gpaPoints.reduce( function(total, number) {
    return total + number;
});

const gpa = gpaSum / gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortFruits = fruits.filter((word) => word.length < 6);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyNumberIndex = numbers.indexOf(luckyNumber);