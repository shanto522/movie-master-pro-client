import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdvancedFilter = ({ onFilterChange }) => {
  const axiosSecure = useAxiosSecure();

  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [ratingRange, setRatingRange] = useState([0, 10]);

  // Fetch genres dynamically from backend
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axiosSecure.get("/genres");
        setAllGenres(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, [axiosSecure]);

  // Toggle genre selection
  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // Fetch filtered movies whenever filters change
  useEffect(() => {
    const fetchFilteredMovies = async () => {
      try {
        // Skip calling filter API if no filter applied
        if (
          selectedGenres.length === 0 &&
          ratingRange[0] === 0 &&
          ratingRange[1] === 10
        ) {
          onFilterChange([]); // keep AllMovies loader data
          return;
        }

        const res = await axiosSecure.get("/movies/filter", {
          params: {
            genres: selectedGenres.join(","),
            minRating: ratingRange[0],
            maxRating: ratingRange[1],
          },
        });
        onFilterChange(res.data); // send filtered movies to parent
      } catch (err) {
        console.error(err);
        onFilterChange([]); // error হলে empty array
      }
    };
    fetchFilteredMovies();
  }, [selectedGenres, ratingRange, axiosSecure, onFilterChange]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-extrabold mb-4">Advanced Filtering</h2>

      {/* Genres multi-select */}
      <div className="flex flex-wrap gap-3 mb-4">
        {allGenres.map((genre) => (
          <button
            key={genre}
            onClick={() => toggleGenre(genre)}
            className={`px-4 py-2 rounded-lg border ${
              selectedGenres.includes(genre)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            } transition`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Rating range slider */}
      <div className="flex items-center gap-4 mb-4">
        <span>
          Rating: {ratingRange[0]} - {ratingRange[1]}
        </span>
        <input
          type="range"
          min="0"
          max="10"
          value={ratingRange[0]}
          onChange={(e) =>
            setRatingRange([Number(e.target.value), ratingRange[1]])
          }
          className="w-1/2"
        />
        <input
          type="range"
          min="0"
          max="10"
          value={ratingRange[1]}
          onChange={(e) =>
            setRatingRange([ratingRange[0], Number(e.target.value)])
          }
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default AdvancedFilter;
