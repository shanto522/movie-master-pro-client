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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allMovies",
        element: <AllMovies />,
        loader: async () => {
          const res = await fetch("http://localhost:3000/movies");
          if (!res.ok) throw new Error("Failed to fetch movies");
          return res.json();
        },
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
        element:<PrivateRoute>
          <AddMovie></AddMovie>
        </PrivateRoute>
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
