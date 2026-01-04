import React from "react";

const RecentlyAdded = ({ recentlyAdded }) => {
  return (
    <section className="max-w-[1350px] mx-auto mb-20 px-4">
      <h2 className="text-3xl font-extrabold text-blue-500 mb-6">
        Recently Added
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentlyAdded.map((movie) => (
          <div
            key={movie._id}
            className="flex bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-32 h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold">{movie.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {movie.genre}
                </p>
              </div>
              <span className="text-xs text-gray-400 mt-2">
                Added by {movie.addedBy || "unknown"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyAdded;
