const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const empty = document.getElementById("empty");
const total = document.getElementById("total");
const completed = document.getElementById("completed");
const pending = document.getElementById("pending");

let tasks = JSON.parse(localStorage.getItem("studentTasks") || "[]");
let currentFilter = "all";

function save() {
  localStorage.setItem("studentTasks", JSON.stringify(tasks));
}

function render() {
  taskList.innerHTML = "";

  const visible = tasks.filter(task =>
    currentFilter === "all" ||
    (currentFilter === "completed" && task.completed) ||
    (currentFilter === "pending" && !task.completed)
  );

  visible.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "done" : ""}`;

    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span class="title"></span>
      <span class="priority">${task.priority}</span>
      <button class="delete">Delete</button>
    `;

    li.querySelector(".title").textContent = task.title;

    li.querySelector("input").addEventListener("change", () => {
      task.completed = !task.completed;
      save();
      render();
    });

    li.querySelector(".delete").addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      save();
      render();
    });

    taskList.appendChild(li);
  });

  empty.hidden = visible.length !== 0;

  total.textContent = tasks.length;
  completed.textContent = tasks.filter(task => task.completed).length;
  pending.textContent = tasks.filter(task => !task.completed).length;
}

taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (!title) return;

  tasks.push({
    id: Date.now(),
    title,
    priority: priorityInput.value,
    completed: false
  });

  save();

  taskInput.value = "";
  priorityInput.value = "Medium";

  render();
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    currentFilter = button.dataset.filter;

    render();
  });
});

render();
