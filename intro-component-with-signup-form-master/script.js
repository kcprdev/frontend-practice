const form = document.querySelector(".form");

const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');


form.addEventListener("submit", function (event) {

    event.preventDefault();

    checkInputs();

});


function checkInputs() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    // First name
    if (firstNameValue === "") {
        showError(firstName, "First Name cannot be empty");
    } else {
        showSuccess(firstName);
    }


    // Last name
    if (lastNameValue === "") {
        showError(lastName, "Last Name cannot be empty");
    } else {
        showSuccess(lastName);
    }


    // Email
    if (emailValue === "") {

        showError(email, "Email cannot be empty");

    } else if (!isValidEmail(emailValue)) {

        showError(email, "Looks like this is not an email");

    } else {

        showSuccess(email);

    }


    // Password
    if (passwordValue === "") {

        showError(password, "Password cannot be empty");

    } else {

        showSuccess(password);

    }

}



function showError(input, message) {

    const inputGroup = input.closest(".input-group");

    inputGroup.classList.add("error");

    const errorMessage =
        inputGroup.querySelector(".error-message");

    errorMessage.textContent = message;

}



function showSuccess(input) {

    const inputGroup = input.closest(".input-group");

    inputGroup.classList.remove("error");

}



function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}