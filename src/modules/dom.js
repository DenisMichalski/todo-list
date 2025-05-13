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
  let currentTaskToEdit = null;
  const appContainer = document.getElementById("app");
  const projectForm = document.getElementById("project-form");
  const projectNameInput = document.getElementById("project-name");

  const saveToLocalStorage = () => {
    const projects = projectManager.getProjects();
    const data = projects.map((project) => {
      return {
        name: project.getName(),
        tasks: project.getTasks().map((task) => task.getInfo()),
      };
    });

    localStorage.setItem("todoData", JSON.stringify(data));
  };

  const loadFromLocalStorage = () => {
    const savedData = JSON.parse(localStorage.getItem("todoData"));
    if (!savedData) return;

    projectManager.clearProjects();

    savedData.forEach((proj) => {
      projectManager.addProject(proj.name);
    });

    savedData.forEach((proj) => {
      const project = projectManager
        .getProjects()
        .find((p) => p.getName() === proj.name);

      if (!project) return;

      proj.tasks.forEach((task) => {
        const newTask = createTask(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.notes,
          task.id
        );

        if (task.completed) {
          newTask.toggleComplete();
        }

        project.addTask(newTask);
      });
    });
  };

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
    appContainer.innerHTML = "";
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

        li.classList.add(`priority-${info.priority}`);

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = info.completed;

        checkBox.addEventListener("change", () => {
          task.toggleComplete();
          renderProjects();
          saveToLocalStorage();
        });

        li.appendChild(checkBox);

        const contentDiv = document.createElement("div");

        const titleEl = document.createElement("strong");
        titleEl.textContent = info.title;

        const dueDateEl = document.createElement("span");
        dueDateEl.innerHTML = `(Due: ${info.dueDate})`;

        const descriptionEl = document.createElement("div");
        descriptionEl.textContent = `Description: ${info.description || "-"}`;

        const priorityEl = document.createElement("div");
        priorityEl.textContent = `Priority: ${info.priority}`;

        const noteEl = document.createElement("div");
        noteEl.textContent = `Notes: ${info.notes || "-"}`;

        const completedEl = document.createElement("div");
        completedEl.innerHTML = `<em>completed:</em> ${
          info.completed ? "✅" : "❌"
        }`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          todoTitleInput.value = info.title;
          todoDueDateInput.value = info.dueDate;
          todoDescriptionInput.value = info.description;
          todoPrioritySelect.value = info.priority;
          todoNotesInput.value = info.notes;
          currentTaskToEdit = task;
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
         project.removeTask(info.id);

         const projectName = project.getName();
         const isStandardProject =
           projectName.toLowerCase() === "standard project";

         if (project.getTasks().length === 0 && !isStandardProject) {
           projectManager.removeProject(projectName);
         }

         // Jetzt synchronisieren:
         saveToLocalStorage();
         renderProjects();

        });


        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(dueDateEl);
        contentDiv.appendChild(descriptionEl);
        contentDiv.appendChild(priorityEl);
        contentDiv.appendChild(noteEl);
        contentDiv.appendChild(completedEl);
        contentDiv.appendChild(editButton);
        contentDiv.appendChild(removeButton);

        li.appendChild(contentDiv);
        taskList.appendChild(li);

        if (info.completed) {
          li.style.textDecoration = "line-through";
          li.style.opacity = "0.6";
        }
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
      saveToLocalStorage();
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

      if (currentTaskToEdit) {
        currentTaskToEdit.edit(title, description, dueDate, priority, notes);
        saveToLocalStorage();
        currentTaskToEdit = null;
      } else {
        const task = createTask(title, description, dueDate, priority, notes);
        project.addTask(task);
        saveToLocalStorage();
      }

      todoTitleInput.value = "";
      todoDueDateInput.value = "";
      todoDescriptionInput.value = "";
      todoPrioritySelect.value = "normal";
      todoNotesInput.value = "";

      renderProjects();
      saveToLocalStorage();
    });
  };

  const init = () => {
    loadFromLocalStorage();
    setupEventListeners();
    renderProjects();
  };

  return {
    init,
    renderProjects,
  };
})();

export default domController;
