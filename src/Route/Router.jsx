import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import MyCollection from "../Pages/MyCollection/MyCollection";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import AddMovie from "../Pages/AddMovie/AddMovie";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Loading from "../Pages/Loading/Loading";
import UpdateMovies from "../Pages/UpdateMovies/UpdateMovies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: Loading,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allMovies",
        element: <AllMovies />,
        loader: () =>
          fetch("http://localhost:3000/movies").then((res) => res.json()),
      },
      {
        path: "/myCollection",
        element: (
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>
        ),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/updateMovies/:id",
        element: (
          <PrivateRoute>
            <UpdateMovies></UpdateMovies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LogIn />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
