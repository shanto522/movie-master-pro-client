import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, Navigate } from "react-router";

const MoviesCard = ({ movie }) => {
  const { posterUrl, title, releaseYear, genre, rating, _id } = movie;
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={posterUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {genre} | {releaseYear}
          </p>
          <p className="flex justify-center items-center gap-1 text-sm font-semibold ">
            {rating}
            <FaStar />
          </p>
        </div>
        <Link to={`/movieDetails/${_id}`}>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoviesCard;
