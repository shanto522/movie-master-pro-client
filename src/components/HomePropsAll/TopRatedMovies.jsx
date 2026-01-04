import React from "react";
import { FaStar } from "react-icons/fa";

const TopRatedMovies = ({ topRated }) => {
  return (
    <section className="max-w-[1350px] mx-auto mb-20 px-4">
      <h2 className="text-3xl font-extrabold text-blue-500 mb-6">
        Top Rated Movies
      </h2>     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRated.map((movie) => (
          <div
            key={movie._id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Poster */}
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-2 break-words mb-2">
                {movie.title}
              </h3>

              {/* Spacer to push rating and genre to bottom */}
              <div className="flex flex-col mt-auto">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-1 text-yellow-500">
                  <FaStar />
                  <span className="font-medium">{movie.rating || "N/A"}</span>
                </div>

                {/* Genre */}
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  {movie.genre}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
