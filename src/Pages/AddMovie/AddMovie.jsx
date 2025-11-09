import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddMovie = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      releaseYear: parseInt(e.target.year.value),
      director: e.target.director.value,
      cast: e.target.cast.value,
      rating: parseFloat(e.target.rating.value),
      duration: parseInt(e.target.duration.value),
      plotSummary: e.target.summary.value,
      posterUrl: e.target.poster.value,
      language: e.target.language.value,
      country: e.target.country.value,
      addedBy: user.email,
    };
    axiosSecure.post("/movies", formData).then((data) => {
      console.log(data.data);
      alert("Movie added successfully!");
      e.target.reset();
    });
  };
  return (
    <div className="max-w-3xl mx-auto my-10 p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900 transition duration-300">

      <h2 className="flex items-center justify-center text-3xl md:text-4xl font-extrabold mb-10 gap-3">
        <BiSolidMoviePlay className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Add New Movie
        </span>
      </h2>


      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          className="input-field"
          name="title"
          type="text"
          placeholder="🎬 Movie Title"
        />
        <input
          className="input-field"
          name="genre"
          type="text"
          placeholder="🎭 Genre"
        />
        <input
          className="input-field"
          name="year"
          type="number"
          placeholder="📅 Release Year"
        />
        <input
          className="input-field"
          name="director"
          type="text"
          placeholder="🎬 Director"
        />
        <input
          className="input-field"
          name="cast"
          type="text"
          placeholder="👥 Cast"
        />
        <input
          className="input-field"
          name="rating"
          type="number"
          placeholder="⭐ Rating (1–10)"
        />
        <input
          className="input-field"
          name="duration"
          type="number"
          placeholder="⏱️ Duration (minutes)"
        />
        <input
          className="input-field"
          name="language"
          type="text"
          placeholder="🌐 Language"
        />
        <input
          className="input-field"
          name="country"
          type="text"
          placeholder="🏳️ Country"
        />
        <input
          className="input-field"
          name="poster"
          type="url"
          placeholder="🖼️ Poster Image URL"
        />
        <textarea
          className="input-field md:col-span-2"
          name="summary"
          rows="4"
          placeholder="📝 Short Plot Summary"
        ></textarea>

        <button
          type="submit"
          className="md:col-span-2 py-3 rounded-lg font-semibold btn-pro"
        >
          ➕ Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
