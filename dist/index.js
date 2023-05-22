const passwordInput = document.getElementById('pwdInput');
const passwordError = document.getElementById('passwordError');
const showPasswordCheckbox = document.getElementById('showPassword');
const phoneInput = document.getElementById('telephone');

// Prompt user to enter valid email address
function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');
    let email = emailInput.value;

    if (email.trim() === '' || !email.includes('@')) {
        emailError.classList.remove('hidden')
        emailInput.classList.add('border-red-500')
    } else {
        emailError.classList.add('hidden')
        emailInput.classList.remove('border-red-500')
    }
}

// Toggles password visibility
// showPasswordCheckbox.addEventListener('change', function () {
//     if (showPasswordCheckbox.checked) {
//         passwordInput.type = 'text';
//     } else {
//         passwordInput.type = 'password';
//     }
// });

function togglePasswordVisibility(passwordInputClass, showPasswordCheckboxClass) {
    const passwordInputs = document.getElementsByClassName('password-input');
    const showPasswordCheckboxes = document.getElementsByClassName('showPassword');

    for (let i = 0; i < showPasswordCheckboxes.length; i++) {
        const passwordInput = passwordInputs[i];
        const showPasswordCheckbox = showPasswordCheckboxes[i];

        showPasswordCheckbox.addEventListener('change', function () {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    }
}
// Call the function and provide the class names of the password input and show password checkbox
togglePasswordVisibility('password-input', 'show-password-checkbox');

// Prompt the user on invalid password format
passwordInput.addEventListener("input", function(){
    if (passwordInput.validity.valid) {
        passwordError.textContent = ""
        passwordError.style.display = "none";
    } else {
        showPasswordErrorMessage()
    }
})

// passwordInput.addEventListener("blur", function(){
//     if (!passwordInput.validity.valid) {
//         showPasswordErrorMessage()
//     }
// })

function showPasswordErrorMessage() {
    if (passwordInput.value === "") {
        passwordError.style.display = "flex"
        passwordError.style.width ="13rem"
        passwordError.textContent = "Password is required"
    } else {
        passwordError.style.display = "flex"
        passwordError.textContent = "Password must be at least four(4) characters long, must contain one(1) capital letter and symbol."
    }
}
    
// Disable the selection of the title for the select dropdown options
document.addEventListener('DOMContentLoaded', function () {
    let selectElement = document.querySelectorAll('select');
    selectElement.forEach(function (selectEl) {
        selectEl.addEventListener('change', function () {
            this.removeAttribute('disabled');
        });
    });
});

    // Allow only numeric digits and specific characters
phoneInput.addEventListener('input', function (event) {
    this.value = this.value.replace(/[^0-9()+-]/g, '');
});

// Dropdown menu background color
const options = document.getElementsByClassName('region_select')
for (i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = "black";
    options[i].style.color = "white";
}