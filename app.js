// Task List Array
let tasks = [];

// Function to add a new task
function addTask(task) {
  tasks.push(task);
}

// Function to update a task by ID
function updateTask(taskId, updatedTask) {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
  }
}

// Function to delete a task by ID
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
}

// Function to display tasks
function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span>${task.title}</span>
                          <button onclick="editTask('${task.id}')">Edit</button>
                          <button onclick="deleteTask('${task.id}')">Delete</button>`;
    taskList.appendChild(taskItem);
  });
}

// Function to handle task submission
function handleTaskSubmission(event) {
  event.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskTitle = taskInput.value;

  if (taskTitle.trim() !== '') {
    const task = {
      id: Date.now().toString(),
      title: taskTitle
    };

    addTask(task);
    taskInput.value = '';
    displayTasks();
  }
}

// Function to handle the task editing
function editTask(taskId) {
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    const updatedTitle = prompt('Enter the updated task title:', task.title);
    if (updatedTitle !== null && updatedTitle.trim() !== '') {
      const updatedTask = {
        ...task,
        title: updatedTitle
      };

      updateTask(taskId, updatedTask);
      displayTasks();
    }
  }
}

// Event Listener for task submission
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', handleTaskSubmission);

// Initial display of tasks
displayTasks();
