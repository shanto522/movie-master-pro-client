import React, { useEffect, useState } from "react";
import logo from "../../assets/logoImg.jpg";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaHome, FaRegArrowAltCircleDown } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";

const Navbar = () => {
  const { user, setUser, signOutFunc } = useAuth();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("LogOut Successful!");
        setUser(null);
        setMobileDropdownOpen(false);
      })
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">
          <FaHome size={22} />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allMovies">
          <BiSolidCameraMovie size={22} />
          All Movies
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myCollection">
              <BsFillCollectionPlayFill size={22} />
              My Collection
            </NavLink>
          </li>
          <li>
            <NavLink to="/addMovie">
              <AiFillFolderAdd size={22} />
              Add Movie
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar max-w-[1440px] mx-auto sticky top-0 z-50 shadow-md bg-base-100 text-base-content md:px-13">
      <div className="navbar-start flex items-center gap-3">
        <div className="dropdown md:hidden">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {mobileDropdownOpen && (
            <ul className="menu dropdown-content bg-base-100 rounded-box mt-2 w-60 p-3 shadow font-bold absolute left-0 top-12">
              {links}

              <li className="mt-2">
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-center text-red-600 font-semibold hover:bg-red-50 rounded-lg py-1 mt-1 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink
                      to="/auth/login"
                      className="btn-pro w-full text-center my-1"
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/auth/register"
                      className="btn-pro w-full text-center my-1"
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          )}
        </div>

        <Link to="/" className="flex items-center gap-3">
          <img className="h-10 w-10 rounded-full" src={logo} alt="logo" />
          <span className="text-xl font-bold ">
            MovieMaster <span className="text-red-600">Pro</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal font-semibold px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-3 items-center">
        <div className="flex md:flex-none">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle"
          />
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-lg transition-all"
            >
              <img
                src={user.photoURL}
                alt="profile"
                className="h-9 w-9 rounded-full border-2 border-white"
              />
              <FaRegArrowAltCircleDown />
            </div>

            <ul className="dropdown-content menu bg-base-100 rounded-xl mt-3 w-60 p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <li className="text-center pb-2 border-b border-gray-300 dark:border-gray-600">
                <div className="flex flex-col items-center">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="h-14 w-14 rounded-full border-2 border-gray-400 mb-2"
                  />
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-[20px]">
                    {user.displayName}
                  </p>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">
                    {user.email}
                  </p>
                </div>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="text-red-600 font-semibold flex justify-center hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors w-full"
                >
                  <IoMdLogOut size={22} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:flex gap-2">
            <NavLink to="/auth/login" className="btn-pro">
              Login
            </NavLink>
            <NavLink to="/auth/register" className="btn-pro">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
