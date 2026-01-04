import { NavLink } from "react-router";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 my-3 rounded-xl 
        transition-all duration-300 ease-in-out
        hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-slate-800 dark:hover:text-white
        ${
          isActive
            ? "bg-blue-200/70 dark:bg-blue-800/70 text-slate-900 dark:text-white font-semibold shadow-sm"
            : "text-slate-700 dark:text-white"
        }`
      }
    >
      <Icon className="w-5 h-5 text-slate-700 dark:text-white" />

      <span className="mx-4 font-medium text-[15px] tracking-wide">
        {label}
      </span>
    </NavLink>
  );
};

export default MenuItem;
