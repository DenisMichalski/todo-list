const createTask = (
  title,
  description,
  dueDate,
  priority = "normal",
  notes = "",
  checklist = []
) => {
  let completed = false;

  const toggleComplete = () => {
    completed = !completed;
  };

  const isCompleted = () => completed;

  const getInfo = () => {
    return {
      title,
      description,
      dueDate,
      priority,
      notes,
      checklist,
      completed,
    };
  };

  return {
    toggleComplete,
    isCompleted,
    getInfo,
  };
};

export default createTask;
