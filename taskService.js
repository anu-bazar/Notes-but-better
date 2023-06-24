// Simulated Server or Database

// Mock tasks data
let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3' }
];

// Generate a unique ID for new tasks
let nextTaskId = tasks.length + 1;

// Function to fetch all tasks
function getAllTasks() {
  return tasks;
}

// Function to fetch a task by ID
function getTaskById(taskId) {
  return tasks.find(task => task.id === taskId);
}

// Function to create a new task
function createTask(task) {
  const newTask = {
    id: nextTaskId++,
    title: task.title,
    description: task.description
  };

  tasks.push(newTask);
  return newTask;
}

// Function to update an existing task
function updateTask(taskId, updatedTask) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].title = updatedTask.title;
    tasks[taskIndex].description = updatedTask.description;
    return tasks[taskIndex];
  }
  return null;
}

// Function to delete a task by ID
function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    return deletedTask;
  }
  return null;
}

// Export the task service functions
export {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
