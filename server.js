const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const taskService = require('./taskService'); // Assuming taskService.js handles CRUD operations

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch all tasks
app.get('/api/tasks', (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
});

// Route to fetch a task by ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = taskService.getTaskById(taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Route to create a new task
app.post('/api/tasks', (req, res) => {
  const task = req.body;
  const newTask = taskService.createTask(task);
  res.json(newTask);
});

// Route to update an existing task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const task = taskService.updateTask(taskId, updatedTask);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Route to delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const deletedTask = taskService.deleteTask(taskId);

  if (deletedTask) {
    res.json(deletedTask);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Serve HTML file for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
