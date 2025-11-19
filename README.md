# MovieMaster Pro

**Live Site:** [https://movie-master-pro-client.web.app](https://movie-master-pro-client.web.app)  
**GitHub Client Repo:** [Client](https://github.com/shanto522/movie-master-pro-client)  
**GitHub Server Repo:** [Server](https://github.com/shanto522/movie-master-pro-server)

MovieMaster Pro is a modern, responsive movie management platform that allows users to browse, manage, and organize their favorite movies with advanced filtering, personal collections, and watchlists. Designed for movie enthusiasts, it ensures smooth and interactive user experience with secure authentication and real-time feedback.

---

## Main Features

- Dynamic Movie Database with title, genre, rating, release year, director, cast, and more.
- Personal Collections: Add, edit, and delete your movies.
- Watchlist: Track movies to watch later with duplicate prevention.
- Authentication System: Email/password and Google OAuth login, protected routes.
- Responsive Design: Mobile, tablet, and desktop ready.
- Advanced Filtering: Filter movies by genre, rating, or recently added.
- Theme Toggle: Switch between light and dark mode.
- Real-time Feedback: Toast notifications for CRUD operations.
- Secure Backend: Firebase token verification for sensitive routes.

---

## Technologies Used

- **Frontend:** React, TailwindCSS, React Router, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Firebase Admin SDK
- **Authentication:** Firebase Authentication (Email/Password + Google OAuth)
- **Hosting:** Netlify (Client), Vercel (Server)
- **State Management:** React Context API, Custom Hooks (`useAuth`, `useAxiosSecure`)

---

## Dependencies

- react, react-dom, react-router-dom, react-toastify, axios
- tailwindcss, autoprefixer, postcss
- express, mongoose, dotenv, firebase-admin
- cors, bcryptjs, jsonwebtoken

---

## Instructions to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shanto522/movie-master-pro-client.git
    git clone https://github.com/shanto522/movie-master-pro-server.git
    ```

2. **Navigate to each project directory and install dependencies**:
    ```bash
    cd movie-master-pro-client
    npm install

    cd ../movie-master-pro-server
    npm install
    ```

3. **Set up environment variables**:  
Create a `.env` file in the server root with:
    ```
    PORT=5000
    MONGO_URI=your-mongodb-uri
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_PRIVATE_KEY=your-firebase-private-key
    FIREBASE_CLIENT_EMAIL=your-firebase-client-email
    ```

4. **Start the server**:
    ```bash
    npm run server
    ```

5. **Start the client**:
    ```bash
    cd ../movie-master-pro-client
    npm start
    ```

6. **Open in browser**:
    Navigate to [http://localhost:3000](http://localhost:3000)

---

## Why MovieMaster Pro?

- All-in-One Movie Management: Browse, add, edit, and manage watchlists in one platform.
- Secure & Protected Routes: Only authorized users can modify their own movies.
- User-Friendly Interface: Smooth navigation and modern design.
- Real-Time Data: Updates are reflected immediately.
- Custom Features: Watchlist management, theme toggle, and advanced filtering.

---

**Note:** Designed for a seamless, interactive experience with proper error handling, responsive layouts, and modern UI/UX patterns.
