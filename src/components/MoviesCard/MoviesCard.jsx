import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const MoviesCard = ({ movie }) => {
  const { posterUrl, title, releaseYear, genre, rating, _id } = movie;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl flex-shrink-0"
      />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white break-words mb-2 min-h-[3rem]">
          {title}
        </h2>
        <div className="flex justify-between items-center mb-2 min-h-[1.5rem]">
          <p className="text-sm text-gray-500 dark:text-gray-300 break-words">
            {genre} | {releaseYear}
          </p>
          <p className="flex items-center gap-1 text-sm font-semibold">
            {rating}
            <FaStar />
          </p>
        </div>
        <div className="mt-auto">
          <Link to={`/movieDetails/${_id}`}>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
