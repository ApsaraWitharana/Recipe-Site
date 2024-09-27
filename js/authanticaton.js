

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_u0Vb8XU-Iiuoe25MX5XRShA10uR0eSE",
  authDomain: "my-pizza-web-7599e.firebaseapp.com",
  projectId: "my-pizza-web-7599e",
  storageBucket: "my-pizza-web-7599e.appspot.com",
  messagingSenderId: "389637995310",
  appId: "1:389637995310:web:6f944fc09fb603fb59d8bf"
};


// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Get Authentication instance
const auth = firebase.auth();
// // Sign up logic
document.addEventListener('DOMContentLoaded', (event) => {
    const regButton = document.getElementById('reg');
    if (regButton) {
        regButton.addEventListener('click', () => {
            // const username = document.getElementById('user_name').value;
            const email = document.getElementById('email-reg').value;
            const password = document.getElementById('password-reg').value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {

                    // Registered successfully
                    alert("Registered Successfully!!!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});



//signIn - using ath model
document.addEventListener('DOMContentLoaded', (event) => {
    const logInButton = document.getElementById('singin');
    if (logInButton) {
        logInButton.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    window.location.href = "/index.html?";
                    // Login successful
                    alert("Login Successful!!!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});

