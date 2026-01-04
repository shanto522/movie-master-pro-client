import React from "react";

const About = () => {
  return (
    <section className="max-w-[1350px] mx-auto mb-20 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-extrabold text-blue-500 mb-4">
          About MovieMaster Pro
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          MovieMaster Pro is a smart movie management platform where you can
          easily add movies, rate them, add to your wishlist, and organize your
          personal collection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#0967C2] rounded-xl p-6 text-white">
            <h4 className="font-bold text-lg">Dynamic Movie Data</h4>
            <p className="text-sm mt-2 opacity-90">
              MovieMaster Pro displays live movie data from MongoDB including
              posters, ratings, genres, release years, and cast. Users can
              browse the latest and top-rated movies seamlessly.
            </p>
          </div>
          <div className="bg-[#0967C2] rounded-xl p-6 text-white">
            <h4 className="font-bold text-lg">Secure User Access</h4>
            <p className="text-sm mt-2 opacity-90">
              Firebase Authentication ensures that protected routes like Add
              Movie and My Collection are accessible only to logged-in users.
              Only the owner can edit or delete their movies.
            </p>
          </div>
          <div className="bg-[#0967C2] rounded-xl p-6 text-white">
            <h4 className="font-bold text-lg">Platform Features</h4>
            <p className="text-sm mt-2 opacity-90">
              Users can add, update, delete, and organize movies in their
              personal collection. Additional features include watchlist
              management, top-rated movies, recent additions, genre browsing,
              and theme toggling between light and dark modes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
