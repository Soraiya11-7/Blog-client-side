# Blog Platform 

## 📊  Project Overview


The **Blog** Website Development Project aims to create a modern, responsive blog platform using React and Firebase. This project focuses on building dynamic web pages, user authentication, and an interactive blog experience. Front-end developers will collaborate with designers and back-end developers to bring mockups to life, ensuring a smooth, optimized experience across devices. The project also includes creating features such as user login, blog creation, wishlist management, and the ability to comment on blogs.

## 🌍 Live Demo & Repository

### 🚀 Live URL

   - Netlify: [Blog ](https://classy-crostata-0cf8d9.netlify.app/)

   - Firebase: [Live Link 1](https://simple-firebase-6b2b7.firebaseapp.com/) OR [Live Link 2](https://simple-firebase-6b2b7.web.app/)

🔗 GitHub Repository: [GitHub Link](https://github.com/Soraiya11-7/Blog-client-side)


---

## 📖 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
---

## ✨ Features
🔐 User Authentication  
- Sign up, log in, and log out using JWT tokens.  
- Secure authentication and authorization for protected routes.  

📝 Blog Management  
- Users can create, update, and delete their own blog posts.  
- Anyone can view published blogs.  

💬 Commenting System  
- Only authenticated users can comment.  
- Blog owners cannot comment on their own blogs.  

💖 Wishlist  
- Logged-in users can add or remove blogs from their wishlist.  

🗄 MongoDB Database  
- Stores users, blogs, comments, and wishlists.  

🌍 CORS Support  
- Secure API access by restricting it to specific frontend domains.  

🌟 Featured Blogs  
- Longest blog posts are dynamically marked as featured.  

📊 Sortable Blog Table  
- Display blog title, category, description, and blogger name in a table.  
- Users can sort data dynamically using TanStack Table.  
---


## 🏗️ Technology Stack


|  Category            | Technology / Library |
|---------------------|---------------------|
| Frontend         | React, Vite, TailwindCSS, DaisyUI             |
| Backend          | Node.js, Express.js                           |
| Database         | MongoDB                                       |
| Authentication   | JWT (JSON Web Tokens), Firebase Auth         |
| State Management | React Context API, LocalForage              |
| Styling         | TailwindCSS, DaisyUI, Framer Motion          |
| Routing         | React Router                                  |
| Notifications   | React Toastify                               |
| Table Handling  | TanStack Table (React Table)                 |
| Animations      | Framer Motion, AOS                           |
| Form Handling   | React Datepicker                             |
| API Calls       | Axios                                        |
| Security       | JWT Authentication, CORS                     |
| Development Tools | ESLint, PostCSS, Vite, TailwindCSS         |


---

## 🛠 Installation

### Prerequisites
Before installing and running the project, ensure you have the following installed:
- **Node.js** (v16 or later) – [Download](https://nodejs.org/)
- **NPM** or **Yarn** – Comes with Node.js installation
- **MongoDB Database** 
- **Firebase Account** – For authentication and storage

### Steps
1. **Clone the repository**

```sh
# Clone the repository
git clone https://github.com/Soraiya11-7/Blog-client-side.git

# Navigate to the project directory
cd blog
```
2. **Install dependencies**

```sh
npm install
```
3. **Set up environment variables** (see `.env.local.example` below)

4. **Run the development server**

```sh
npm run dev
```


---

## ⚙️ Configuration (.env.local)

📌 **Create a `.env.local` file** in the root of the project and add the following:

```env
# Firebase Configuration
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id

```
🔹 Replace `your_value_here` with your actual credentials.

🚨 Important: Never expose your .env.local file in public repositories. Use .gitignore to keep it secure.

---

## 📚 Dependencies

The Blog Platform utilizes the following dependencies to implement key features, enhance performance, and improve the overall user experience.

### 📌 Main Dependencies  

| Package            | Version   | Description                |
|---------------------- | ---------- | ---------------------------|
| react             | ^18.3.1   | Frontend library           |
| react-router-dom  | ^7.1.0    | Client-side routing        |
| axios             | ^1.7.9    | API requests               |
| firebase          | ^11.1.0   | Authentication             |
| framer-motion     | ^11.15.0  | Animations                 |
| react-toastify    | ^11.0.2   | Notifications              |


### 📌 Development Dependencies  

| Package             | Version  | Description               |
|---------------------- | ---------- | ---------------------------|
| vite               | ^6.0.3   | Build tool                |
| eslint             | ^9.17.0  | Code linting              |
| tailwindcss        | ^3.4.17  | Styling framework         |
| daisyui            | ^4.12.22 | UI components             |

---

## 🛠 Troubleshooting

| Issue                         | Solution                                             |
|---------------------|---------------------|
| Firebase Authentication Issues | Verify API keys and Firebase settings.             |
| CORS Errors                    | Ensure frontend URLs are whitelisted in the backend. |
| MongoDB Connection Fails       | Ensure MongoDB is running and the connection is correct. |
| JWT Expired Errors             | Refresh tokens or increase expiration in config.   |
--- 

 
🚀 Dive into the world of blogging with our Blog Platform! ✍️📚 Share your thoughts, connect with readers, and manage your posts effortlessly! 🌐💬















