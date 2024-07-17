let company = [];
let staff = {
  id: 1,
  name: "huongcaoha",
  age: 30,
  salary: 1000,
};
company.push(staff);

function createStaff() {
  let fullname, age, salary;
  fullname = prompt("Enter name :");
  do {
    age = +prompt("Enter age :");
  } while (Number.isNaN(age) || age <= 0);

  do {
    salary = +prompt("Enter salary :");
  } while (Number.isNaN(salary) || salary <= 0);
  let newStaff = {
    id: company[0].id + 1,
    name: fullname,
    age: age,
    salary: salary,
  };
  return newStaff;
}

function readArr() {
  if (company.length >= 1) {
    for (let i = 0; i < company.length; i++) {
      console.log(
        `id:${i + 1}. ${company[i].name} , ${company[i].age} , ${
          company[i].salary
        }`
      );
    }
  } else {
    console.log("List nothing");
  }
}

function updateStaff(index) {
  company[index].name = prompt("Enter name want change :");
  do {
    company[index].age = +prompt("Enter age want change :");
  } while (Number.isNaN(company[index].age));

  do {
    company[index].salary = +prompt("Enter salary want change :");
  } while (Number.isNaN(company[index].salary));
}

function staffManagementSystem() {
  let choose;
  do {
    choose = +prompt(`Enter choose : 
            1 : create new staff
            2 : read list staff
            3 : update staff
            4 : delete staff
            5 : end game `);
  } while (Number.isNaN(choose) || choose <= 0 || choose > 5);
  switch (choose) {
    case 1: {
      company.push(createStaff());
      readArr();
      break;
    }
    case 2: {
      readArr();
      break;
    }
    case 3: {
      let idStaff;
      do {
        idStaff = +prompt("Enter id staff want update :");
      } while (Number.isNaN(idStaff) || idStaff < 0);

      let index = company.findIndex((element) => element.id == idStaff);

      if (index == -1) {
        alert("Not found id staff");
      } else {
        updateStaff(index);
        readArr();
      }
      break;
    }
    case 4: {
      let idStaff;
      do {
        idStaff = +prompt("Enter id staff want delete :");
      } while (Number.isNaN(idStaff) || idStaff <= 0);
      let index = company.findIndex((element) => element.id == idStaff);
      if (index == -1) {
        alert("Not found id staff");
      } else {
        company.splice(index, 1);
        readArr();
      }

      break;
    }
    case 5: {
      alert("goodbye");
      return;
    }
  }
  staffManagementSystem();
}
staffManagementSystem();