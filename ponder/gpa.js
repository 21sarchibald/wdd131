function getGrades(inputSelector) {
    const gradeInput = document.querySelector(inputSelector).value;
    const gradesList = gradeInput.split(",");
    const grades = gradesList.map((grade) => grade.trim().toUpperCase());
    
    return grades;
}

function lookupGrade(grade) {
    if (grade === "A") {
        return 4;
    }
    else if (grade === "B") {
        return 3;
    }
    else if (grade === "C") {
        return 2;
    }
    else if (grade === "D") {
        return 1;
    }
    else {
        return 0;
    }
}

function calculateGpa(grades) {
    const gpaList = grades.map((grade) => lookupGrade(grade));
    const gradeSum = gpaList.reduce((sum, grade) => sum + grade);
    console.log(gradeSum);
    const averageGpa = gradeSum / grades.length;
    return averageGpa.toFixed(2);
}

function outputGpa(gpa, selector) {
    document.querySelector(selector).innerHTML = gpa;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");

}

document.querySelector("#submitButton").addEventListener("click", clickHandler);