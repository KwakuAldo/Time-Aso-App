const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
const phoneInput = document.getElementById('telephone');

showPasswordCheckbox.addEventListener('change', function () {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

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
