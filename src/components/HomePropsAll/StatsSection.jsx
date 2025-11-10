import React from "react";

const StatsSection = ({ totalMovies, totalUsers, recentlyAdded }) => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Total Movies
        </h3>
        <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
          {totalMovies}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Total Users
        </h3>
        <p className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 mt-2">
          {totalUsers}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300">
        <h3 className="text-sm text-gray-500 dark:text-gray-400">
          Recently Added
        </h3>
        <p className="text-4xl font-extrabold text-green-600 dark:text-green-400 mt-2">
          {recentlyAdded.length}
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
