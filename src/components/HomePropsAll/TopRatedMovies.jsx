import React from "react";
import { FaStar } from "react-icons/fa";

const TopRatedMovies = ({ topRated }) => {
  return (
    <section className="max-w-6xl mx-auto mb-20 px-4">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {topRated.map((movie) => (
          <div
            key={movie._id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <div className="flex items-center gap-2 mt-2 text-yellow-500">
                <FaStar />
                <span>{movie.rating || "N/A"}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {movie.genre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
