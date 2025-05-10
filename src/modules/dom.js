import projectManager from "./app.js";
import createTask from "./task.js";

const todoForm = document.getElementById("todo-form");
const todoTitleInput = document.getElementById("todo-title");
const todoDueDateInput = document.getElementById("todo-due-date");
const todoDescriptionInput = document.getElementById("todo-description");
const todoPrioritySelect = document.getElementById("todo-priority");
const todoNotesInput = document.getElementById("todo-notes");
const todoProjectSelect = document.getElementById("todo-project-select");

const domController = (() => {
  const appContainer = document.getElementById("app");
  const projectForm = document.getElementById("project-form");
  const projectNameInput = document.getElementById("project-name");

  const updateProjectDropdown = () => {
    todoProjectSelect.innerText = "";

    projectManager.getProjects().forEach((project) => {
      const option = document.createElement("option");
      option.value = project.getName();
      option.textContent = project.getName();
      todoProjectSelect.appendChild(option);
    });
  };

  const renderProjects = () => {
    appContainer.innerText = "";
    updateProjectDropdown();

    const projects = projectManager.getProjects();

    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      const title = document.createElement("h2");
      title.textContent = project.getName();
      projectDiv.appendChild(title);

      const taskList = document.createElement("ul");

      project.getTasks().forEach((task) => {
        const li = document.createElement("li");
        const info = task.getInfo();

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = info.completed;

        checkBox.addEventListener("change", () => {
          task.toggleComplete();
          renderProjects(); // re render
        });

        const contentDiv = document.createElement("div");
        contentDiv.innerHTML = `
  <strong>${info.title}</strong> (Due: ${info.dueDate})<br>
  Description: ${info.description || "-"}<br>
  Priority: ${info.priority} <br>
  Notes: ${info.notes || "-"}<br>
  <em>Completed:</em> ${info.completed ? "✅" : "❌"}
`;

        li.appendChild(checkBox);
        li.appendChild(contentDiv);

        if (info.completed) {
          li.style.textDecoration = "line-through";
          li.style.opacity = "0.6";
          console.log(info);
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
          project.removeTask(info.title);
          renderProjects();
        });

        li.appendChild(removeButton);

        taskList.appendChild(li);
      });

      projectDiv.appendChild(taskList);
      appContainer.appendChild(projectDiv);
    });
  };

  const setupEventListeners = () => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = projectNameInput.value.trim();

      if (name === "") return;

      projectManager.addProject(name);
      projectNameInput.value = "";
      renderProjects();
    });

    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = todoTitleInput.value.trim();
      const dueDate = todoDueDateInput.value;
      const description = todoDescriptionInput.value.trim();
      const priority = todoPrioritySelect.value;
      const notes = todoNotesInput.value.trim();
      const projectName = todoProjectSelect.value;

      if (!title || !dueDate || !projectName) return;

      const project = projectManager
        .getProjects()
        .find((proj) => proj.getName() === projectName);

      if (!project) return;

      const task = createTask(title, description, dueDate, priority, notes);
      project.addTask(task);

      todoTitleInput.value = "";
      todoDueDateInput.value = "";
      todoDescriptionInput.value = "";
      (todoNotesInput.value = ""), renderProjects();
    });
  };

  const init = () => {
    setupEventListeners();
    renderProjects();
  };

  return {
    init,
    renderProjects,
  };
})();

export default domController;
