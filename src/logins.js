            // FOR SIGNUP 
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;
        const message = document.getElementById('message').value;
        const imageURL = document.getElementById('image-url').value;

        // Check if passwords match
        if (password !== passwordConfirm) {
            alert("Passwords do not match");
            return;
        }

        // Fetch JSON data from server
        fetch('https://heartsync-dating-app.onrender.com/users')
            .then(response => response.json())
            .then(usersData => {
                // Check if username or email already exists
                const existingUser = usersData.find(user => user.username === username || user.email === email);
                if (existingUser) {
                    alert("User already exists. Please sign in.");
                } else {
                    // If username and email are unique, add user details to JSON data
                    const newUser = {
                        username: username,
                        email: email,
                        password: password,
                        message: message,
                        imageURL: imageURL
                    };
                    // Update JSON data on server
                    fetch('https://heartsync-dating-app.onrender.com/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                    .then(() => {
                        alert("Sign up successful. You can now sign in.");

                        // Redirect to match.html page
                        window.location.href = './home.html';
                    })
                    .catch(error => console.error('Error adding user:', error));
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    });
});


            //  FOR LOG IN

document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Fetch JSON data from server
        fetch('https://heartsync-dating-app.onrender.com/users')
            .then(response => response.json())
            .then(usersData => {
                // Check if user exists
                const user = usersData.find(user => user.email === email);
                if (user && user.password === password) {
                    // Redirect to home.html page
                    window.location.href = './home.html';
                } else if (user) {
                    alert("Incorrect password. Please check your credentials.");
                } else {
                    alert("User doesn't exist. Please sign up.");
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    });
});