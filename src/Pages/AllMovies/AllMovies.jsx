import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const AllMovies = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);

    if (!value.trim()) {
      setMovies(data);
      return;
    }

    fetch(`http://localhost:3000/search?search=${value}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("🔍 Search result:", result);
        setMovies(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3 font-inter">
        <BiSolidMoviePlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          All Movies
        </span>
      </h2>

      <div className="text-center mb-10 flex gap-2 justify-center">
        <label className="input rounded-full flex items-center gap-2 border border-gray-300 px-4 py-2 w-full max-w-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Type to search movies..."
            className="outline-none bg-transparent w-full"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.length > 0 ? (
          movies.map((movie) => <MoviesCard key={movie._id} movie={movie} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
