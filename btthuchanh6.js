
const todoList = [
    { id: 1, todo: "Have breakfast", completed: false },
    { id: 2, todo: "Have breakfast", completed: true },
    { id: 3, todo: "Have breakfast", completed: false },
  ];
  
  function readTodoList() {
    todoList.forEach((element) =>
      console.log(
        `id:${element.id} , todo:${element.todo} , completed: ${element.completed} `
      )
    );
  }
  
  function addTodo() {
    let todo, completed;
    todo = prompt("Enter todo :");
    do {
      completed = prompt("Enter completed = true or false :");
    } while (completed != "true" && completed != "false");
    let id = todoList[todoList.length - 1].id + 1;
    let newTodo = {
      id: id,
      todo: todo,
      completed: completed,
    };
    todoList.push(newTodo);
    readTodoList();
  }
  
  function updateTodoList() {
    let idTodo;
    do {
      idTodo = +prompt("Enter id todo :");
    } while (Number.isNaN(idTodo) || idTodo <= 0);
    let indexTodo = todoList.findIndex((element) => element.id == idTodo);
    if (indexTodo == -1) {
      console.log("not found id todo");
    } else {
      todoList[indexTodo].completed = true;
    }
    readTodoList();
  }
  
  function removeTodo() {
    let idTodo;
    do {
      idTodo = +prompt("Enter id todo :");
    } while (Number.isNaN(idTodo) || idTodo <= 0);
    let indexTodo = todoList.findIndex((element) => element.id == idTodo);
    if (indexTodo == -1) {
      console.log("not found id todo");
    } else {
      todoList.splice(indexTodo, 1);
      readTodoList();
    }
  }
  
  function todoManagementSystem() {
    let choose = 0;
    do {
      choose = +prompt(`Enter select :
              1 : create toto
              2 : read todoList
              3 : update todo
              4 : delete todo
              5 : exit`);
    } while (Number.isNaN(choose) || choose <= 0 || choose > 5);
    switch (choose) {
      case 1: {
        addTodo();
        break;
      }
      case 2: {
        readTodoList();
        break;
      }
      case 3: {
        updateTodoList();
        break;
      }
      case 4: {
        removeTodo();
        break;
      }
      case 5: {
        alert("goodbye !");
        return;
      }
    }
    todoManagementSystem();
  }
  
  todoManagementSystem();
  