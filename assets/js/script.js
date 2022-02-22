var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "hello"
    taskToDoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);