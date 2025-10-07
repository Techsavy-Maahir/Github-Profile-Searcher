const url = "https://api.github.com/users";

const searchInputElem = document.getElementById("searchInput");
const searchBtnElem = document.getElementById("searchBtn");
const profileContainerElem = document.getElementById("profileContainer");
const loadingElem = document.getElementById("loading");

const generateProfile = (profile) => {
    return `<div class="profile-box">
            <div class="top-section">
                <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" alt="avatar">
                    </div>
                    <div class="self">
                        <h1>${profile.name || profile.login}</h1>
                        <h1>@${profile.login}</h1>
                    </div>
                </div>
               <a href="${profile.html_url}" target="_blank">  
                   <button class="primary-btn">Check Profile</button>
               </a>
            </div>

            <div class="about">
                <h2>About</h2>
                <p>${profile.bio || "No bio available"}</p>
            </div>
            <div class="status">
                <div class="status-item">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="status-item">
                    <h3>Following</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="status-item">
                    <h3>Repos</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>`;
}

const fetchProfile = async () => {
    const username = searchInputElem.value.trim();

    // ✅ Empty input check
    if(!username) {
        loadingElem.innerText = "Please enter a username!";
        loadingElem.style.color = "red";
        return;
    }

    loadingElem.innerText = "Loading...";
    loadingElem.style.color = "black";
    profileContainerElem.innerHTML = ""; // Clear previous profile
    
    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();

        // ✅ Response status check
        if(res.ok) {
            loadingElem.innerText = "";
            profileContainerElem.innerHTML = generateProfile(data);
        } else {
            loadingElem.innerText = data.message || "User not found!";
            loadingElem.style.color = "red";
        }

    } catch (error) {
        console.error("Error:", error);
        loadingElem.innerText = "Something went wrong!";
        loadingElem.style.color = "red";
    }
}

searchBtnElem.addEventListener("click", fetchProfile);

// ✅ Bonus: Enter key support
searchInputElem.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        fetchProfile();
    }
});