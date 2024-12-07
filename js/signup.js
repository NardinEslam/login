// Select elements
const signupBtn = document.querySelector('#signupBtn');
const txtWarning = document.querySelector('#warning');
const success = document.querySelector('#sucess');
const emailExist = document.querySelector('#emailExist');

signupBtn.addEventListener('click', function () {
    const name = document.querySelector('#signName').value.trim();
    const email = document.querySelector('#signEmail').value.trim();
    const pass = document.querySelector('#signPass').value.trim();

    // Check if any field is empty
    if (name === '' || email === '' || pass === '') {
        txtWarning.classList.remove('d-none');
    }else{
        txtWarning.classList.add('d-none');
    }
    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists by email
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        emailExist.classList.remove('d-none');
        success.classList.add('d-none');
    }else{
        emailExist.classList.add('d-none');
        success.classList.remove('d-none');
    }

    // Add the new user to the users array
    users.push({ name, email, password: pass });

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
});
