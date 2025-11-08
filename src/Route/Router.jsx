import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/AllMovies/AllMovies";
import MyCollection from "../Pages/MyCollection/MyCollection";
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
        path: "myCollection",
        element: <MyCollection></MyCollection>,
      },
    ],
  },
]);
export default router;
