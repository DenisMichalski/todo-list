function createTask(title, description, dueDate, priority, notes) {
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
      title,
      description,
      dueDate,
      priority,
      notes,
      completed,
    };
  };

  return {
    getInfo,
    toggleComplete,
    edit,
  };
}

export default createTask;
