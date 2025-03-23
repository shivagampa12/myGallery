const tasks = [
  { id: 1, name: "Task 1", path: "Directory/Task 1/task 1.html" },
  { id: 2, name: "Task 2", path: "Directory/Task 2/task 2.html" },
  { id: 3, name: "Task 3", path: "Directory/Task 3/task 3.html" },
  { id: 4, name: "Task 4", path: "Directory/Task 4/task 4.html" },
  { id: 5, name: "Task 5", path: "Directory/Task 5/task 5.html" },
  { id: 6, name: "Task 6", path: "Directory/Task 6/task 6.html" },
  { id: 7, name: "Task 7", path: "Directory/Task 7/task 7.html" },
  { id: 8, name: "Task 8", path: "Directory/Task 8/task 8.html" },
  { id: 9, name: "Task 9", path: "Directory/Task 9/task 9.html" },
  { id: 10, name: "Task 10", path: "Directory/Task 10/task 10.html" },
  { id: 11, name: "Task 11", path: "Directory/Task 11/task 11.html" },
  { id: 12, name: "Task 12", path: "Directory/Task 12/task 12.html" },
  { id: 13, name: "Task 13", path: "Directory/Task 13/task 13.html" },
  { id: 14, name: "Task 14", path: "Directory/Task 14/task 14.html" }
];

const navContainer = document.getElementById("task-nav");
const iframe = document.getElementById("task-frame");

tasks.forEach(task => {
  const button = document.createElement("button");
  button.textContent = task.name;
  button.addEventListener("click", () => {
    iframe.src = task.path;
  });
  navContainer.appendChild(button);
});
