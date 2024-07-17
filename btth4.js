class course {
    constructor(id, name, complete) {
      (this.id = id), (this.name = name), (this.complete = complete);
    }
  }
  const courses = [
    new course(1, "HTML", false),
    new course(2, "CSS", false),
    new course(3, "Basic of javascript", false),
    new course(4, "Node package Manager (npm)", false),
    new course(5, "Git", false),
  ];
  
  function printfCourse() {
    for (let index in courses) {
      console.log(`${+index + 1}. ${courses[index].name}
                  Complete : ${courses[index].complete}`);
    }
  }
  
  function createCourse() {
    let id = courses[courses.length - 1].id + 1;
    let courseName = prompt("Enter name scourse :");
    let complete;
    do {
      complete = prompt("Enter complete = true or false :");
    } while (complete != "true" && complete != "false");
    let newCourse = new course(id, courseName, complete);
    courses.push(newCourse);
    printfCourse();
  }
  
  function updateCourse() {
    let index = +prompt(
      `Enter index want update : from 1 to ${courses.length} :`
    );
    while (index < 0 && index > courses.length) {
      index = +prompt(`Enter index want update : from 1 to ${courses.length} :`);
    }
    let courseName = prompt("Enter name scourse :");
    let complete;
    do {
      complete = prompt("Enter complete = true or false :");
    } while (complete != "true" && complete != "false");
    courses[index - 1].name = courseName;
    courses[index - 1].complete = complete;
    printfCourse();
  }
  
  function deleteCourse() {
    let index = +prompt(
      `Enter index want delete : from 1 to ${courses.length} :`
    );
    while (index < 0 && index > courses.length) {
      index = +prompt(`Enter index want delete : from 1 to ${courses.length} :`);
    }
    courses.splice(index - 1, 1);
    printfCourse();
  }
  
  function scourseManagementSystem() {
    let choose;
    do {
      choose = prompt(`Enter choose : 
                  C : create new course
                  R : read courses
                  U : update course
                  D : delete course
                  E : exit`).toLowerCase();
    } while (
      choose != "c" &&
      choose != "r" &&
      choose != "u" &&
      choose != "d" &&
      choose != "e"
    );
    switch (choose) {
      case "c": {
        createCourse();
        break;
      }
      case "r": {
        printfCourse();
        break;
      }
      case "u": {
        updateCourse();
        break;
      }
      case "d": {
        deleteCourse();
        break;
      }
      case "e": {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        return;
      }
    }
    scourseManagementSystem();
  }
  scourseManagementSystem();