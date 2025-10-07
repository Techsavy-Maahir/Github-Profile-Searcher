# 🔍 GitHub Profile Searcher

[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/Powered%20by-GitHub%20API-181717?style=for-the-badge&logo=github)](https://docs.github.com/en/rest)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A simple and minimal web app that lets you search for any **GitHub user** and instantly view their profile details — powered by the **GitHub REST API**.

---

## 🚀 Features

- 🔎 Search any GitHub user by username  
- 👤 View:
  - Profile name and avatar  
  - Bio  
  - Followers / Following count  
  - Public repositories  
  - Direct link to the GitHub profile  
- ⚡ Real-time data from the official **GitHub API**  
- 🚫 Handles empty inputs and invalid usernames gracefully  
- ⌨️ Press **Enter** to trigger search  
- 🧭 Clean, responsive design with no frameworks

---

## 🧠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **GitHub REST API**

---

## 🧩 How It Works

1. The user enters a GitHub username.  
2. On clicking **Search** (or pressing **Enter**), a request is made to:
```

[https://api.github.com/users/{username}](https://api.github.com/users/{username})

````
3. If the user exists, their details are fetched and rendered dynamically on the page.  
4. If not, an error message is shown.  

---

## ⚙️ Setup & Usage

1. **Clone this repository**
```bash
git clone https://github.com/Techsavy-Maahir/Github-Profile-Searcher.git
````

2. **Open the project folder**

   ```bash
   cd Github-Profile-Searcher
   ```
3. **Run the app**

   * Simply open `index.html` in your browser — no extra setup needed!
4. **Search for a username**

   * Example: `torvalds`, `freeCodeCamp`, or `octocat`

---

## 🧾 Example API Response

```json
{
  "login": "freeCodeCamp",
  "name": "freeCodeCamp.org",
  "bio": "Learn to code for free with millions of other people around the world",
  "followers": 30680,
  "following": 0,
  "public_repos": 237,
  "avatar_url": "https://avatars.githubusercontent.com/u/9892522?v=4",
  "html_url": "https://github.com/freeCodeCamp"
}
```

---

## 💡 Error Handling

* Shows error if input is empty
* Displays "User not found" for invalid usernames
* Handles network or fetch errors
* Clears previous search results on each new query

---

## 🪄 Example Screenshot

*(Add your preview image here)*
Example:
![App Screenshot](./screenshot.png)

---

## 🧾 Project Structure

```
Github-Profile-Searcher/
│
├── index.html       # Main HTML page
├── style.css        # Styling for layout and design
└── index.js         # Core JavaScript logic
```

---

## ⚙️ Future Enhancements (Optional)

* Display user repositories
* Add theme switch (light/dark mode)
* Improve mobile responsiveness

---

## 👨‍💻 Author

**Techsavy Maahir**
📎 [GitHub Profile](https://github.com/Techsavy-Maahir)
💼 [LinkedIn](https://linkedin.com/in/techsavy-maahir) *(optional)*

---

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

---

✨ *Built with JavaScript and the GitHub API to make exploring developer profiles easier!*

```

