let signIn = document.getElementById("signIn-button");
signIn.addEventListener('click', function() {});

function  signIn(){
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('registrationForm');
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const fullName = form.elements['fullName'].value.trim();
            const email = form.elements['email'].value.trim();
            const password = form.elements['password'].value.trim();
            const confirmPassword = form.elements['confirmPassword'].value.trim();
    
            if (!fullName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }
    
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
    
            // Simulate form submission (replace with backend API call)
            alert('Registration successful!'); // Replace with actual registration logic
            form.reset();
        });
    });
}

