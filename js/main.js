
const user = localStorage.getItem('users');
if (user) {
    // Parse the JSON string into an array
    const users = JSON.parse(user);
    if (Array.isArray(users) && users.length > 0) {
        const welcomeMessage = document.querySelector('#welcomeTxt'); 
        // Ensure the first user has a 'name' property
        if (users[0].name) {
            welcomeMessage.innerHTML = `Welcome, ${users[0].name}`;
        } 
    } 
}

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    const confirmLogout = confirm("Are you sure you want to logout and delete your account?");
    
    if (confirmLogout) {
        // Remove user data from localStorage
        localStorage.removeItem('users');
        window.location.href = '../index.html'; // Change 'login.html' to your desired page
    }
});

