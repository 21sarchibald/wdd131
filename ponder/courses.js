const aCourse = {
    courseCode: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [
        { sectionNum: 1, 
          roomNum: 'STC 353', 
          enrolled: 26, 
          days: 'TTh', 
          instructor: 'Bro T'
        },
        { sectionNum: 2, 
          roomNum: 'STC 347', 
          enrolled: 28, 
          days: 'TTh', 
          instructor: 'Sis A'
        }
    ],
    enrollStudent: function(sectionNum) {
        console.log(sectionNum);
        console.log(this.sections);

        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (sectionIndex >=0) {

            this.sections[sectionIndex].enrolled += 1;
            renderSections(this.sections);

        }
    },
    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled -= 1;
            renderSections(this.sections);
        }
    }
  };

console.log(aCourse.sections[0].sectionNum);

// const section1 = sections.find(section => section.sectionNum == 1);

function displayCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.innerHTML = course.name;
    courseCode.innerHTML = course.courseCode;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>
    `
}

function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    const html = sections.map(sectionTemplate);
    sectionList.insertAdjacentHTML("afterbegin", html.join("")); 
}

displayCourseInfo(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function() {
    aCourse.enrollStudent(document.querySelector("#sectionNumber").value);
})

document.querySelector("#dropStudent").addEventListener("click", function() {
    aCourse.dropStudent(document.querySelector("#sectionNumber").value);
});