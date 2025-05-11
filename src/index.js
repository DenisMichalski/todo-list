import "./style.css";
import createTask from "./modules/task";
import createProject from "./modules/project";
import projectManager from "./modules/app";
import domController from "./modules/dom";

const task = createTask(
  "Complete course",
  "Complete JavaScript project to-do list",
  "2025-05-10",
  "High",
  "Test in browser",
  ["Structure", "Modules", "localStorage"]
);

const project = createProject("My first Project");
project.addTask(task);

projectManager.init();
projectManager.addProject("Work");
projectManager.addProject("Privat");

const work = projectManager.getProjectByName("Work");
work.addTask(createTask("Reply to email", "Important!", "2025-05-04"));

projectManager.removeProject("Privat");

project.removeTask("Course completed");

task.toggleComplete();

domController.init();
