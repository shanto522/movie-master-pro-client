import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Loading from "../Pages/Loading/Loading";
import UpdateMovies from "../Pages/UpdateMovies/UpdateMovies";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Help from "../components/Footer/FooterPage/Help";
import Privacy from "../components/Footer/FooterPage/Privacy";
import Terms from "../components/Footer/FooterPage/Terms";
import Contact from "../components/Footer/FooterPage/Contact";
import DashboardLayout from "../Layout/DashboardLayout";
import MyCollection from "../Pages/Dashboard/MyCollection/MyCollection";
import AddMovie from "../Pages/Dashboard/AddMovie/AddMovie";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashboardHome from "../components/Dashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: Loading,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allMovies",
        element: <AllMovies />,
        loader: () =>
          fetch("https://movies-master-pro-server.vercel.app/movies").then(
            (res) => res.json()
          ),
      },
      {
        path: "/movieDetails/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(
            `https://movies-master-pro-server.vercel.app/movies/${params.id}`
          ).then((res) => res.json()),
      },
      {
        path: "/updateMovies/:id",
        element: (
          <PrivateRoute>
            <UpdateMovies></UpdateMovies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movies-master-pro-server.vercel.app/movies/${params.id}`
          ).then((res) => res.json()),
      },

      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/addMovie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myCollection",
        element: (
          <PrivateRoute>
            <MyCollection />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myWishlist",
        element: (
          <PrivateRoute>
            <MyWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
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
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
