let input = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
  let task = input.value;
  if (task !== ""){
    let taskItem = document.createElement("li");
    let taskSpan = document.createElement("span");
    let deleteBtn = document.createElement("button");

    taskSpan.textContent = task;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", removeTask);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    input.value = "";
  }
}

function removeTask(event) {
  let taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}






