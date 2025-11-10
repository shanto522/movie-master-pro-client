import React from "react";
import { useLoaderData } from "react-router";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const AllMovies = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3 font-inter">
        <BiSolidMoviePlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />

        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
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
