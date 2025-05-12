const createProject = (name) => {
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  // Hinzufügen der removeTask-Methode
  const removeTask = (taskId) => {
    const index = tasks.findIndex((task) => task.getInfo().id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1); // Entfernt die Aufgabe anhand des Titels
    }
  };

  const clearProjects = () => {
  projects.length = 0; // Leert das Projekt-Array
};


  const getTasks = () => tasks;
  const getName = () => name;

  return {
    addTask,
    removeTask, // Die Methode wird hier exportiert
    getTasks,
    getName,
  };
};

export default createProject;
