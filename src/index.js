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

console.log("All Projects:", projectManager.getProjects());

const work = projectManager.getProjectByName("Work");
work.addTask(createTask("Reply to email", "Important!", "2025-05-04"));

console.log("Tasks in progress:", work.getTasks());

projectManager.removeProject("Privat");
console.log("After deletion:", projectManager.getProjects());

console.log(project.getName());
console.log(project.getTasks());
project.removeTask("Course completed");
console.log(project.getTasks());

console.log(task.getInfo());
task.toggleComplete();
console.log(task.getInfo());

domController.init();
