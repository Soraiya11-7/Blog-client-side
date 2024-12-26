# Blog Platform API

## Project Purpose

The **Blog Platform API** is a backend server designed to manage blog posts, user authentication, comments, and wishlists. It provides routes for creating, updating, deleting, and viewing blogs, as well as managing user authentication with JWT tokens. This API is connected to a MongoDB database to store users, blogs, comments, and wishlists.

## Live URL

Netlify: [Blog Live](https://classy-crostata-0cf8d9.netlify.app/)

Firebase: [Live Link 1](https://simple-firebase-6b2b7.firebaseapp.com/) OR [Live Link 2](https://simple-firebase-6b2b7.web.app/)


## Key Features

- **User Authentication**: Allows users to sign up, log in, and log out using JWT tokens stored in cookies.
- **Blog Management**: Users can create, update, and view blog posts.
- **Comments**: Authenticated users can add comments to blogs. Blog owners are restricted from commenting on their own blogs, while other authenticated users can comment on blogs they do not own.

- **Wishlists**: Only logged-in users can add blogs to their wishlist and remove them as needed.

- **MongoDB Integration**: Data is stored in MongoDB, including user information, blog posts, comments, and wishlists.

- **CORS Support**: CORS is enabled for specific frontend domains to ensure smooth communication with the frontend.
- **Security**: JWT tokens are used to secure routes that require user authentication.
- **Featured Blogs**: The API fetches a list of featured blogs based on the length of their content. This is determined dynamically through aggregation, with the longest blog posts being featured.

  - **Sortable Table**: The application includes a table displaying blog data such as title, category, short description, and blogger name. 
  - **Dynamic Sorting**: Users can click on the column headers to sort the data in ascending or descending order.
  - **Sorting Indicators**: Each column header displays a sorting icon (`🔼` for ascending and `🔽` for descending) to indicate the current sorting direction.
  - **Efficient Data Handling**: The table is built using **TanStack Table** (formerly React Table), which ensures fast and efficient rendering and sorting of large datasets.



## npm Packages Used
### Server-Side
- **express**: Web framework for building the server-side API.
- **jsonwebtoken**: Library for generating and verifying JWT tokens.
- **cookie-parser**: Middleware for parsing cookies.
- **mongodb**: MongoDB client for interacting with the database.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file for easy configuration.

### Client-Side
- **@tanstack/react-table**: For building flexible, sortable, and dynamic data tables in React.
- **lazyload**: For lazy loading of images and content to improve performance.
- **aos**: For adding scroll animations to elements on the page.
- **tailwindcss**: A utility-first CSS framework for creating responsive and customizable designs.

- **daisyui**: A plugin for Tailwind CSS that provides pre-designed UI components to speed up development.
- **react-router-dom**: For adding routing functionality to navigate between pages in the React application.

- **react-icons**: A library that provides customizable icons for React applications.
- **framer-motion**: A popular animation library for React to create smooth animations and transitions.
- **react-loading-skeleton**: For displaying skeleton loaders to enhance the user experience during content loading.



