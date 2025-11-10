# MovieMaster Pro

**Live Site:** 

MovieMaster Pro is a comprehensive movie management platform that allows users to browse, manage, and organize their favorite movies. The system is designed to offer a seamless experience with advanced filtering, personal collections, and a modern responsive UI.

---

## Features

- **Dynamic Movie Database:** Browse all movies with details such as title, genre, rating, release year, director, cast, and more.
- **Personal Collections:** Users can add movies to their personal collection and manage their movies with edit or delete functionality.
- **Watchlist:** Add movies to a personal watchlist to keep track of movies you want to watch later. Duplicate additions are prevented.
- **Authentication System:** Login/Register with email & password or Google OAuth. Protected routes ensure only logged-in users can manage their movies.
- **Responsive Design:** Fully responsive layout supporting mobile, tablet, and desktop views with consistent UI elements.
- **Advanced Filtering:** Filter movies by genre, rating, or recently added, allowing for quick and efficient browsing.
- **Theme Toggle:** Switch between light and dark mode to enhance user experience.
- **Real-time Feedback:** Toast notifications provide instant feedback for CRUD operations like add, update, delete, and wishlist actions.
- **Secure Backend:** Firebase token verification protects sensitive routes, ensuring only authorized users can modify their content.

---

## Pages & Routes

- **Home Page:** Featured movies carousel, statistics, top-rated movies, recently added movies, and genre sections.
- **All Movies (`/movies`):** View all available movies with details and quick actions.
- **Movie Details (`/movies/:id`):** Detailed information with edit/delete options for the owner and add to watchlist for all users.
- **Add Movie (`/movies/add`):** Add a new movie to the system (protected).
- **Update Movie (`/movies/update/:id`):** Update your own movies (protected).
- **My Collection (`/movies/my-collection`):** View and manage your own movies (protected).
- **My Watchlist (`/myWishlist`):** Manage movies you added to your watchlist.

---

## Technical Stack

- **Frontend:** React, TailwindCSS, React Router, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Firebase Admin SDK
- **Authentication:** Firebase Authentication with email/password and Google OAuth
- **Hosting:** Netlify (client), Vercel (server)
- **State Management:** React Context and custom hooks (`useAuth`, `useAxiosSecure`)

---

## Why MovieMaster Pro?

1. **All-in-One Movie Management:** Everything from browsing, adding, editing, and watchlist management is handled in one place.
2. **Secure & Protected Routes:** Only authorized users can modify their own movies.
3. **User-Friendly Interface:** Easy navigation, consistent styling, and smooth animations enhance the user experience.
4. **Dynamic and Real-Time:** Movie data is fetched from a database and updates are reflected immediately.
5. **Custom Features:** Watchlist management, theme toggle, and advanced filtering provide extra value over standard movie apps.

---

**Note:** This platform is designed to give a smooth, interactive experience for movie enthusiasts, with proper error handling, responsive layouts, and modern design patterns.
