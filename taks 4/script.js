function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDateTime = document.getElementById("taskDateTime");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const content = document.createElement("div");
  content.className = "task-content";

  const title = document.createElement("div");
  title.className = "task-title";
  title.textContent = taskText;

  const details = document.createElement("div");
  details.className = "task-details";
  details.innerHTML = `
    <span>🕒 ${taskTime ? new Date(taskTime).toLocaleString() : "No date"}</span>
  `;

  content.appendChild(title);
  content.appendChild(details);

  li.appendChild(checkbox);
  li.appendChild(content);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}
