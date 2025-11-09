import React from "react";
import { useLoaderData } from "react-router";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const AllMovies = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3">
        <BiSolidMoviePlay className="w-10 h-10 text-blue-500 dark:text-blue-400" />

        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400">
          All Movies
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((movie) => (
          <MoviesCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
