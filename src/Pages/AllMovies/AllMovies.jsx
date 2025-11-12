import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const AllMovies = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const handleAdvancedFilter = () => {
    const query = new URLSearchParams();
    if (selectedGenres.length > 0)
      query.append("genres", selectedGenres.join(","));
    if (minRating) query.append("minRating", minRating);
    if (maxRating) query.append("maxRating", maxRating);

    fetch(`http://localhost:3000/filter?${query.toString()}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("🎯 Filtered Movies:", result);
        setMovies(result);
      })
      .catch((err) => console.error(err));
  };

  const genres = [
    "Action",
    "Action-Comedy",
    "Adventure",
    "Adventure Comedy",
    "Adventure Drama",
    "Anime",
    "Animation",
    "Biography",
    "Biographical Drama",
    "Black Comedy",
    "CGI Animation",
    "Comedy",
    "Coming-of-Age",
    "Crime",
    "Crime Thriller",
    "Dark Comedy",
    "Disaster",
    "Documentary",
    "Drama",
    "Epic",
    "Epic Fantasy",
    "Family",
    "Family Drama",
    "Fantasy",
    "Fantasy Adventure",
    "Film-Noir",
    "Gothic",
    "Historical Drama",
    "History",
    "Horror",
    "Legal Drama",
    "Martial Arts",
    "Martial Arts Comedy",
    "Medical Drama",
    "Military",
    "Music",
    "Musical",
    "Mystery",
    "Noir Thriller",
    "Paranormal",
    "Post-Apocalyptic",
    "Political",
    "Political Thriller",
    "Psychological",
    "Psychological Thriller",
    "Romance",
    "Romantic Comedy",
    "Romantic Drama",
    "Road Movie",
    "Satire",
    "Sci-Fi",
    "Science Fantasy",
    "Short",
    "Slasher",
    "Space Opera",
    "Sport",
    "Steampunk",
    "Superhero",
    "Supernatural",
    "Teen",
    "Teen Romance",
    "Time Travel",
    "Thriller",
    "War",
    "War Drama",
    "Western",
    "Zombie",
    "Experimental",
    "Experimental Drama",
    "Cyberpunk",
    "Mythology",
  ];

  const toggleGenre = (genre) => {
    if (selectedGenres[0] === genre) {
      setSelectedGenres([]);
    } else {
      setSelectedGenres([genre]);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3 font-inter">
        <BiSolidMoviePlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          All Movies
        </span>
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Box - Always on top */}
        <div className="mb-6">
          <label className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 w-full sm:max-w-md bg-white dark:bg-gray-700 mx-auto">
            <svg
              className="h-5 w-5 opacity-50"
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
              placeholder="Search movies..."
              className="outline-none bg-transparent w-full"
            />
          </label>
        </div>

        {/* Filters - Inline on md/lg */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Genre Dropdown */}
          <div className="relative w-full sm:w-48 md:w-60">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 flex justify-between items-center cursor-pointer w-full"
            >
              <span>
                {selectedGenres.length > 0
                  ? selectedGenres.join(", ")
                  : "Select Genres"}
              </span>
              <span className="ml-2 text-gray-500">&#9660;</span>
            </div>

            {dropdownOpen && (
              <div className="absolute mt-1 w-full max-h-60 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 z-10 shadow-lg">
                {genres.map((genre) => (
                  <div
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 ${
                      selectedGenres.includes(genre)
                        ? "bg-blue-200 dark:bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    {genre}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Min Rating */}
          <input
            type="number"
            placeholder="Min Rating"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-24 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          {/* Max Rating */}
          <input
            type="number"
            placeholder="Max Rating"
            value={maxRating}
            onChange={(e) => setMaxRating(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-24 text-center dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

          {/* Apply Button */}
          <button
            onClick={handleAdvancedFilter}
            className="btn-pro text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            Apply Filter
          </button>
        </div>
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
