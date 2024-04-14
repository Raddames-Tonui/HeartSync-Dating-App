
function userProfile(profile){
    let profile = document.createElement("div");
    profile.id = "profileCard";
    profile.innerHTML = 
                    `
                    <div class="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="${profile.imageURL}" alt="" />
                        </a>
                        <div class="flex flex-row gap-2 pt-3 pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13" />
                            </svg>
                        </div>
                        <div class="p-2">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${profile.username}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${profile.message}</p>
                        </div>
                    </div>

                    ` 
        document.querySelector("#profile").appendChild("profile")
}

function initialize (){
    return userProfile()
}
