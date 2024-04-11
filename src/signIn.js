    // SIGN IN FORM 
    document.addEventListener('DOMContentLoaded', function() {
        const signInForm = document.getElementById('signInForm');
    
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
    
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            const userData = {
                email: email,
                password: password
            };
    
            fetch('http://localhost:3000/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })
            .then((data) => data.json())
            .then((response) => {
                if (response.success) {
                    alert("Login successful");
                    // Redirects user to match.html or another page if login is successful
                    window.location.href = "match.html"; 
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            })

        });
    });
    