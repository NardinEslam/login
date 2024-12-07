const txtWarning = document.querySelector('#warning');
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', function () {
    const logEmail = document.querySelector('#logEmail');
    const logPass = document.querySelector('#logPass');
    const email = logEmail.value.trim();
    const pass = logPass.value.trim();

    // Input validation
    if (email === "" || pass === "") {
        txtWarning.classList.remove('d-none');
        return; // Stop execution if fields are empty
    } else {
        txtWarning.classList.add('d-none');
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists
    const userExists = users.some(user => user.email === email && user.password === pass);

    if (userExists) {
        alert('Login successful!');
        window.location.href = './pages/main.html';
    } else {
        alert('Account not found');
        window.location.href = './pages/signUp.html';
    }
});
