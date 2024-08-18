document.getElementById("register-box").classList.add("active");

function toggleForm() {
    document.getElementById("register-box").classList.toggle("active");
    document.getElementById("login-box").classList.toggle("active");
}

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful! You can now log in.");
        toggleForm();
    } else {
        alert("Please fill in both fields.");
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful! Redirecting to secured page...");
        window.location.href = "secure.html"; // Replace with your secured page
    } else {
        alert("Invalid username or password.");
    }
}
