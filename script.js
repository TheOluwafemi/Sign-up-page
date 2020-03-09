// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm(e) {
    e.preventDefault();
    // Retrieving the values of form elements 
    let email = document.trialForm.email.value;
    let firstname = document.trialForm.firstname.value;
    let lastname = document.trialForm.lastname.value;
    let password = document.trialForm.password.value;


    let emailField = document.querySelector('.email');
    let firstNameField = document.querySelector('.firstname');
    let lastNameField = document.querySelector('.lastname');
    let passwordField = document.querySelector('.password');

    let emailErrorIcon = document.querySelector('.email-error-icon');
    let firstNameErrorIcon = document.querySelector('.firstname-error-icon');
    let lastNameErrorIcon = document.querySelector('.lastname-error-icon');
    let passwordErrorIcon = document.querySelector('.password-error-icon');

    let emailErr = firstNameErr = lastNameErr = passwordErr = true;

    //validate first name 
    if (firstname == "") {
        printError("firstNameErr", "Please enter your first name");
        firstNameField.classList.add('error-input');
        firstNameErrorIcon.classList.remove('no-show');
    } else {
        let firstNameRegex = /^[a-zA-Z\s]+$/;
        if (firstNameRegex.test(firstname) === false) {
            printError("firstNameErr", "Please enter a valid first name");
            firstNameField.classList.add('error-input');
            firstNameErrorIcon.classList.remove('no-show');
        } else {
            printError("firstNameErr", "");
            firstNameField.classList.remove('error-input');
            firstNameErrorIcon.classList.add('no-show');
            firstNameErr = false;
        }
    }

    //validate last name 
    if (lastname == "") {
        printError("lastNameErr", "Please enter your last name");
        lastNameField.classList.add('error-input');
        lastNameErrorIcon.classList.remove('no-show');
    } else {
        let lastNameRegex = /^[a-zA-Z\s]+$/;
        if (lastNameRegex.test(lastname) === false) {
            printError("firstNameErr", "Please enter a valid last name");
            lastNameField.classList.add('error-input');
            lastNameErrorIcon.classList.remove('no-show');
        } else {
            printError("lastNameErr", "");
            lastNameField.classList.remove('error-input');
            lastNameErrorIcon.classList.add('no-show');
            lastNameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
        emailField.classList.add('email-error');
        emailErrorIcon.classList.remove('no-show');
    } else {
        let emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            emailField.classList.add('email-error');
            emailErrorIcon.classList.remove('no-show');
        } else {
            printError("emailErr", "");
            emailErr = false;
            emailField.classList.remove('email-error');
            emailErrorIcon.classList.add('no-show');
        }
    }

    // validate password 
    if (password == "") {
        printError("passwordErr", "Please enter your password");
        passwordField.classList.add('error-input');
        passwordErrorIcon.classList.remove('no-show');
    } else {
        let passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
        if (passwordRegex.test(password) === false) {
            printError("passwordErr", "Password must contain at least one letter, at least one number, and be longer than six charaters.");
            passwordField.classList.add('error-input');
            passwordErrorIcon.classList.remove('no-show');
        } else {
            printError("passwordErr", "");
            passwordField.classList.remove('error-input');
            passwordErrorIcon.classList.add('no-show');
            passwordErr = false;
        }
    }

}