function validateForm() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    var isValid = true;

    // Clear previous errors
    username.classList.remove("input-error");
    password.classList.remove("input-error");
    usernameError.style.display = "none";
    passwordError.style.display = "none";

    // Username validation
    if (username.value === "") {
        username.classList.add("input-error");
        usernameError.style.display = "block";
        usernameError.textContent = "Username is required";
        isValid = false;
    } else if (username.value.length < 3) {
        username.classList.add("input-error");
        usernameError.style.display = "block";
        usernameError.textContent = "Username must be at least 3 characters long";
        isValid = false;
    }

    // Password validation
    if (password.value === "") {
        password.classList.add("input-error");
        passwordError.style.display = "block";
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.value.length < 6) {
        password.classList.add("input-error");
        passwordError.style.display = "block";
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    return isValid;
}
