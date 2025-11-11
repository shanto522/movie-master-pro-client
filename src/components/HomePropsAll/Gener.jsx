import React from "react";

const Genres = () => {
  const genres = [
    "Action",
    "Drama",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Documentary",
    "Adventure",
    "Animation",
    "Fantasy",
    "Mystery",
  ];

  const allGenres = [...genres, ...genres];

  return (
    <section className="max-w-6xl mx-auto mb-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10">
        Popular Genres
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-6 w-max">
          {allGenres.map((genre, index) => (
            <div
              key={index}
              className="bg-[#0967C2] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg 
              backdrop-blur-md border border-white/10 flex items-center justify-center text-lg"
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genres;
