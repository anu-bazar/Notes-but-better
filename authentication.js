// User Data Array
let users = [];

// Function to register a new user
function registerUser(user) {
  users.push(user);
}

// Function to authenticate user credentials
function loginUser(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  return user ? user : null;
}

// Function to handle user registration
function handleRegistration(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
    const user = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password
    };

    registerUser(user);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    alert('Registration successful. You can now log in.');
  }
}

// Function to handle user login
function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = loginUser(email, password);

  if (user) {
    alert(`Welcome back, ${user.name}!`);
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

// Event Listener for user registration
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', handleRegistration);

// Event Listener for user login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);
