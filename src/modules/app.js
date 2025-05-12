//app.js
import createProject from "./project";

const projectManager = (() => {
  const projects = [];

  // On first load: A default project
  const init = () => {
    if (projects.length === 0) {
      const defaultProject = createProject("Standard project");
      projects.push(defaultProject);
    }
  };

  const getProjects = () => projects;

  const addProject = (name) => {
    const newProject = createProject(name);
    projects.push(newProject);
  };

  const removeProject = (name) => {
    const index = projects.findIndex((proj) => proj.getName() === name);
    if (index !== -1) projects.splice(index, 1);
  };

  const getProjectByName = (name) => {
    return projects.find((proj) => proj.getName() === name);
  };

  const clearProjects = () => {
    projects.length = 0; 
  };

  return {
    init,
    getProjects,
    addProject,
    removeProject,
    getProjectByName,
    clearProjects,
  };
})();

export default projectManager;
