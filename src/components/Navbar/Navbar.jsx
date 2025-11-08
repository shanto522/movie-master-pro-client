import React from "react";
import logo from "../../assets/logoImg.jpg";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, setUser, signOutFunc } = useAuth();
  const handleLogOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("LogOut Successful!");
        setUser(null);
      })
      .catch((error) => {
        const err = error.message;
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allMovies">All Movies</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myCollection">My Collection</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-b from-gray-900 to-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
            >
              {links}
              {user ? (
                <>
                  <button onClick={handleLogOut} className="btn-pro">
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink to="/auth/login" className="btn-pro">
                    Login
                  </NavLink>
                  <NavLink to="/auth/register" className="btn-pro">
                    Register
                  </NavLink>
                </>
              )}
            </ul>
          </div>

          <Link
            to="/"
            className="flex justify-center items-center gap-3 text-white"
          >
            <img className=" h-10 w-10 rounded-full" src={logo} alt="" />
            <a className="text-xl sm:text-lg xs:text-base font-bold whitespace-nowrap">
              MovieMaster <span className="text-red-600">Pro</span>
            </a>
          </Link>
        </div>
        <div className="navbar-center text-white hidden md:flex">
          <ul className="menu menu-horizontal font-semibold px-1">{links}</ul>
        </div>
        <div className="navbar-end hidden md:flex gap-2">
          {user ? (
            <>
              <div className="flex items-center justify-center gap-5">
                <img
                  className="h-9 w-9 rounded-full object-cover border-2 border-white"
                  src={user.photoURL}
                  title={user.displayName}
                  alt=""
                />
                <button onClick={handleLogOut} className="btn btn-primary">
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <NavLink to="/auth/login" className="btn-pro">
                Login
              </NavLink>
              <NavLink to="/auth/register" className="btn-pro">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
