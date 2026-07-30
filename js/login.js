const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("bi-eye-slash", "bi-eye");
    } else {
        password.type = "password";
        togglePassword.classList.replace("bi-eye", "bi-eye-slash");
    }

});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value.trim();
    const pass = password.value.trim();

    if(username === "" || pass === ""){
        alert("Please fill all fields.");
        return;
    }

    // Dashboard Open
    // window.location.href = "index.html";
    window.location.href = "../index.html";

});