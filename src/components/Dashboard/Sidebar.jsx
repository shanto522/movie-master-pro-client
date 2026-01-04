import { useState } from "react";
import { Link } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { House } from "lucide-react";
import UserMenu from "./UserMenu";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      {/* Mobile toggle */}
      <div className="backdrop-blur-md text-slate-700 dark:text-slate-200 flex justify-end md:hidden px-4 py-3 ">
        <button
          onClick={handleToggle}
          className="rounded-md p-2 hover:bg-blue-100 dark:hover:bg-blue-900 active:scale-95 transition"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-16 left-0 w-60 sm:w-64 md:w-64 lg:w-72
        shadow-2xl backdrop-blur-xl  border-r border-blue-100 dark:border-gray-700
        transform ${isActive ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-all duration-300 ease-in-out
        rounded-r-2xl flex flex-col z-30 h-[calc(100vh-4rem)]`}
      >
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-3">

          {/* User Menu */}
          <UserMenu />
        </nav>

        {/* Profile / Settings */}
        <div className="flex-shrink-0 px-5 py-3 border-t border-blue-100 dark:border-gray-700">
          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
