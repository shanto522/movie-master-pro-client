import React from "react";

const StatsSection = ({ totalMovies, totalUsers, recentlyAdded }) => {
  return (
    <div className="mb-20 max-w-[1320px] mx-auto">
      <h2 className="text-3xl font-extrabold text-blue-500 mb-6">
        Platform Stats
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
          <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            {totalUsers}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">
            Recently Added
          </h3>
          <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            {recentlyAdded.length}
          </p>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
