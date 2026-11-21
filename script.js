
const authForm = document.getElementById("authForm");
const showSignup = document.getElementById("showSignup");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const submitBtn = document.getElementById("submitBtn");
const nameField = document.getElementById("nameField");
const loginOptions = document.getElementById("loginOptions");
const message = document.getElementById("message");

let isSignup = false;

showSignup.addEventListener("click", function() {

    isSignup = !isSignup;

    formTitle.textContent = isSignup ? "Create Account" : "Login";
    formSubtitle.textContent = isSignup
        ? "Create your account to get started."
        : "Welcome back! Please enter your details.";

    submitBtn.textContent = isSignup ? "Sign Up" : "Login";
    showSignup.textContent = isSignup ? "Back to Login" : "Sign Up";

    nameField.hidden = !isSignup;
    document.getElementById("name").required = isSignup;
    loginOptions.hidden = isSignup;

    message.textContent = "";
});

authForm.addEventListener("submit", function(event) {

    event.preventDefault();

    message.style.color = "#5145e5";

    message.textContent = isSignup
        ? "Sign up interface working!"
        : "Login interface working!";

});
