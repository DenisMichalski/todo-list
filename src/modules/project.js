const createProject = (name) => {
  const tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  // Hinzufügen der removeTask-Methode
  const removeTask = (taskTitle) => {
    const index = tasks.findIndex((task) => task.getInfo().title === taskTitle);
    if (index !== -1) {
      tasks.splice(index, 1); // Entfernt die Aufgabe anhand des Titels
    }
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
