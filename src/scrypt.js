  // FETCH USERS (READ)
  function renderOneUser(person) {
    let card = document.createElement('div');
    card.className = "userCard";
    card.innerHTML += `
    <div  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mx-auto md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
        <img class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${person.imageURL}" alt="${person.fname}">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${person.username}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${person.message}</p>
        </div>
    
        <div class="likes-section">
            <span " id="like-count" class="likes">0 likes</span>
            
            <svg xmlns="http://www.w3.org/2000/svg"  height="1em" viewBox="0 0 128 128"><path fill="#f44336" d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01c6.98 29.87 58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01"/><path fill="#c33" d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86m63.34-2.23c-5.29 0-10.11 1.15-13.87 3.47c2.64-1.02 5.91-1.24 9.15-1.24c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43"/><path fill="#ff8a80" d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61m60.12 9.84c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.09 4.93-11.51 6.19-14.04 6.19"/></svg>
        </div>
    </div>`;
    document.querySelector('#userCards').appendChild(card);
}

    // fetch users from db.json
function getAllUsers() {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => users.forEach(user => renderOneUser(user)))
        .catch(error => console.error('Error fetching users:', error));
}

    // Call getAllUsers to fetch and render users
function initialize() {
    getAllUsers(); 
}

initialize(); // Call initialize to start the process


        // DELETE USER PROFILE
document.addEventListener('DOMContentLoaded', function() {
    const delButton = document.getElementById('del');

    delButton.addEventListener('click', function() {
        // Perform DELETE request to delete user
        fetch('http://localhost:3000/users/userId', {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            // Redirect to sign-up page after successful deletion
            window.location.href = './signup.html';
        })
    });
});


            // SEARCH 
function searchUsers(query) {
return fetch('http://localhost:3000/users') 
    .then(response => response.json())
    .then(data => {
    return data.users.filter(user =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    })
}


const searchTerm = "jesse"; 
searchUsers(searchTerm)
.then(results => {
    console.log(results);
})
