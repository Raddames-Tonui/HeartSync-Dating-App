// document.addEventListener("DOMContentLoaded", function() {
    // FETCH USERS
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            displayUsers(users);
        });

function displayUsers(users){ 
        let cardContainer = document.getElementById('userCards'); // Assuming this is the correct ID for your card container
        for (let user of users) { // Use 'user' instead of 'person'
            cardContainer.innerHTML += `
            <div  class="flex flex-col mt-4  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mx-auto md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                <img class="object-cover col-span-1 w-full rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${user.imageURL}" alt="${user.fname}">
                <div class=" justify-between col-span-2 p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${user.fname}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${user.message}</p>
                
                    <div class="likes-section">
                        <button>
                        <svg onclick="deleteCard(${user.id})" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/></svg> </button>
                        <span id="like-count" class="likes">0 likes</span>
                        <button id="like-button" class="like-button">♥</button>
                    </div>
                </div>
            </div>`;
        }
    }

//   DELETING A CARD
function deleteCard(id) {
    fetch(`http://localhost:3000/users/${users.id}`, {
        method: 'DELETE'
    })
    .then((data)=> data.json())
    .then((users) =>{
        let cardContainers = document.getElementById("userCards")
    }) 
}

// LIKE BUTTON

const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");

if (likebutton && likecount) {
    let likes = 0;

    likebutton.addEventListener("click", function() {
        likes++;
        likecount.textContent = `${likes} ${likes === 1 ? 'like' : 'likes'}`;
    });
} 
// }


// SIGN UP FORM SUBMISSION  
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const fname = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message').value;
        const image = document.getElementById('imageURL').value;
        const likes = document.getElementById('like-count').value
        
        // Data to be sent by POST
        const userData = {
            fname: fname,
            email: email,
            password: password,
            message: message,
            imageURL : image,
            likes: likes,
        };

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        .then((data) => data.json())
        .then(()=> {
            alert('Resistered Successfully')
        window.location.href = './match.html'; })
    })

    });


// LIKE BUTTON
// document.addEventListener("DOMContentLoaded", function(){
const likebutton = document.getElementById("like-button");
const likecount =  document.getElementById("like-count");

let likes = 0;   // Variable to keep track of the number of likes

likebutton.addEventListener("click", function(){
    likes ++;    // Increment the likes variable when the like button is clicked
    likecount.textContent = `${likes} ${likes === 1 ? 'like' : 'likes' }`    // Update the text content of the like count element to reflect the new number of likes
})
// })
    
    