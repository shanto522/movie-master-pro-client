import React from "react";

const Genres = () => {
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

  const allGenres = [...genres, ...genres];

  return (
    <section className="max-w-[1350px] mx-auto mb-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-10">
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
