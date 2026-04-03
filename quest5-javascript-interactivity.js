// Quest 5: JavaScript Interactivity

// Select elements
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input-field");
const taskList = document.querySelector("#tasks");

// Add task
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(btn);
  taskList.appendChild(li);

  input.value = "";
});