import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import MyCollection from "../Pages/MyCollection/MyCollection";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/allMovies",
        Component: AllMovies,
      },
      {
        path: "/myCollection",
        element: (
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
export default router;
