// Quest 6: Full Task Manager Logic

// State
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Elements
const form = document.getElementById("task-form");
const input = document.getElementById("task-input-field");
const taskList = document.getElementById("tasks");

// Add Task
function addTask(text) {
  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // Toggle complete
    li.addEventListener("click", () => {
      toggleTask(task.id);
    });

    // Delete button
    const btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    });

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

// Toggle Task
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  saveTasks();
  renderTasks();
}

// Delete Task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);

  saveTasks();
  renderTasks();
}

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  addTask(text);
  input.value = "";
});

// Initial Load
renderTasks();