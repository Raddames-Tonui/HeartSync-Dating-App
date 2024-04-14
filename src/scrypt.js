                        // FETCH USERS (READ)
  
function getAllUsers(query = ''){
    fetch(`https://heartsync-dating-app.onrender.com/users`)
    .then((data)=> data.json())
    .then(users => users.forEach(user => renderOneUser(user)))
}

    // Call getAllUsers() to fetch and render users
function initialize() {
    getAllUsers(); 
}
initialize(); // Call initialize to start the process

  
  
function renderOneUser(person) {
let card = document.createElement('div');
card.className = "userCard";
card.innerHTML += 
                `
                <div class="w-full mx-auto my-4 h-[80%]">
                    <div class="h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="h-[60%]">
                            <a href="#">
                                <img class="rounded-t-lg" src="${person.imageURL}" alt="" />
                            </a>
                        </div>
                        <div class="flex flex-row gap-2 pt-3 pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"/>
                            </svg>   
                
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"/>
                            </svg>
                
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"/>
                            </svg>
                        </div>
                        <div class="p-2">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${person.username}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                                ${person.message}
                            </p>
                        </div>
                    </div>
                </div>
            
            `
                    //  FOR ALTERNATIVE CARD
            // `<div  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mx-auto md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            //     <img class="object-cover w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${person.imageURL}" alt="${person.fname}">
            //     <div class="flex flex-col justify-between p-4 leading-normal">
            //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${person.username}</h5>
            //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${person.message}</p>
            //     </div>

            //     <div class="likes-section">
            //         <span " id="like-count" class="likes">0 likes</span>
                    
            //     </div>
            // </div>`

document.querySelector('#userCards').appendChild(card);

}




        // DELETE USER PROFILE
document.addEventListener('DOMContentLoaded', function() {
    const delButton = document.getElementById('del');

    delButton.addEventListener('click', function() {
        // Perform DELETE request to delete user
        fetch('https://heartsync-dating-app.onrender.com/users/userId', {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete user'); // statementthat creates a new Error object and throws it as an exception. 
            }
            // Redirect to sign-up page after successful deletion
            window.location.href = './signup.html';
        })
    });
});


            // SEARCH A USER 
const init = () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener('click', () => {
         const input = document.querySelector('input#default-search').value.trim();
         if (input === ''){
            getAllUsers() // fetches all users if the input is empty
         }
         else{
            fetch(`https://heartsync-dating-app.onrender.com/users?username=${input}`)
            .then((data)=>data.json())
            .then(data => {
                document.querySelector('#userCards').innerHTML = '';  // clears the usercards
                data.forEach((user) => renderOneUser(user));
            })
            .catch(error => console.error("Error fetching user:", error));
         }
         }
    )
    const searchInput = document.querySelector("input#default-search")
    searchInput.addEventListener('input', ()=>{
        if(searchInput.value.trim() === ''){
            getAllUsers() // Fetch all users when input is cleared
        }
    })

}
document.addEventListener("DOMContentLoaded",init);
