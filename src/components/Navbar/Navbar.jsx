import React from "react";
import logo from "../../assets/logoImg.jpg";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="allMovies">All Movies</NavLink>
      </li>
      <li>
        <NavLink to="/myCollection">My Collection</NavLink>
      </li>
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
              className="btn btn-ghost text-white lg:hidden"
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
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>

          <Link
            to="/"
            className="flex justify-center items-center gap-3 text-white"
          >
            <img className=" h-10 w-10 rounded-full" src={logo} alt="" />
            <a className="text-xl font-bold">MovieMaster Pro</a>
          </Link>
        </div>
        <div className="navbar-center text-white hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">{links}</ul>
        </div>
        <div className="navbar-end hidden md:flex gap-2">
          <a className="btn-pro">Login</a>
          <a className="btn-pro">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
