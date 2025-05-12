const createTask = (title, description, dueDate, priority, notes) => {
  const id = Date.now().toString();

  let completed = false;

  const toggleComplete = () => {
    completed = !completed;
  };

  const edit = (
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newNotes
  ) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
    priority = newPriority;
    notes = newNotes;
  };

  const getInfo = () => {
    return {
      id,
      title,
      description,
      dueDate,
      priority,
      notes,
      completed,
    };
  };

  return {
    toggleComplete,
    edit,
    getInfo,
  };
}

export default createTask;
