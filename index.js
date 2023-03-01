const form = document.querySelector('#login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the email and password values from the form
    const email = form.email.value;
    const password = form.password.value;

    // Sign in the user with Firebase authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log(`Signed in user ${user.email}`);
            // Redirect to the dashboard or home page
            window.location.href = '/dashboard'; // Change this to your desired redirect URL
        })
        .catch((error) => {
            // Error occurred while signing in user
            console.log(`Error signing in: ${error.message}`);
            // Display an error message to the user
            const errorMessage = document.querySelector('#error-message');
            errorMessage.textContent = error.message;
            errorMessage.style.display = 'block';
        });
});