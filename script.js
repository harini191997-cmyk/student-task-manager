
function addTask() {
    const input = document.getElementById("taskInput");
    const taskName = input.value.trim();
    const list = document.getElementById("taskList");
    const message = document.getElementById("message");

    if (taskName === "") {
        message.textContent = "Please enter a task!";
        return;
    }

    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    checkbox.addEventListener("change", function () {
        item.classList.toggle("completed", checkbox.checked);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
    message.textContent = "";
}
