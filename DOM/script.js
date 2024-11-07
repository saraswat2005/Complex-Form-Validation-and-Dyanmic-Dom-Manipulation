document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    //first name
    if (firstName.length < 2) {
        showError('firstNameError', 'First name must be at least 2 characters long.');
        isValid = false;
    }

    //surname
    if (surname.length < 2) {
        showError('surnameError', 'Surname must be at least 2 characters long.');
        isValid = false;
    }

    //email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    //age
    if (age < 11 || age > 100 || isNaN(age)) {
        showError('ageError', 'Age must be a number between 11 and 100.');
        isValid = false;
    }

    //password
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById('registrationForm').reset();
        document.getElementById('successMessage').innerText = 'Registration Successful!';
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('registrationForm').classList.add('hidden');
        
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.innerText = '';
    });
}