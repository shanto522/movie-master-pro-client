import React from "react";

const Genres = () => {
  const genreList = [
    "Action",
    "Drama",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Documentary",
  ];
  return (
    <section className="max-w-6xl mx-auto mb-20 px-4 text-center">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">
        Popular Genres
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {genreList.map((g) => (
          <span
            key={g}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform duration-300"
          >
            {g}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Genres;
