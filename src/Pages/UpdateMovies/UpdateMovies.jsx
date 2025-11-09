import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateMovies = () => {
  const movie = useLoaderData(); // loader থেকে আসা ডেটা
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: movie.title || "",
    genre: movie.genre || "",
    rating: movie.rating || "",
    releaseYear: movie.releaseYear || "",
    duration: movie.duration || "",
    plotSummary: movie.plotSummary || "",
    posterUrl: movie.posterUrl || "",
    director: movie.director || "",
    cast: movie.cast || "",
    language: movie.language || "",
    country: movie.country || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosSecure.put(`/movies/${movie._id}`, formData);

      // Toast দেখানোর পর 1 সেকেন্ড delay দিয়ে navigate
      toast.success("Movie updated successfully!");
      setTimeout(() => {
        navigate("/myCollection"); // Update হয়ে গেলে collection এ ফেরত
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <GrUpdate />
        Update Movie
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block font-semibold mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-semibold mb-1">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Release Year */}
        <div>
          <label className="block font-semibold mb-1">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block font-semibold mb-1">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Poster URL */}
        <div>
          <label className="block font-semibold mb-1">Poster URL</label>
          <input
            type="text"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Director */}
        <div>
          <label className="block font-semibold mb-1">Director</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cast */}
        <div>
          <label className="block font-semibold mb-1">Cast</label>
          <input
            type="text"
            name="cast"
            value={formData.cast}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block font-semibold mb-1">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block font-semibold mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Plot Summary */}
        <div>
          <label className="block font-semibold mb-1">Plot Summary</label>
          <textarea
            name="plotSummary"
            value={formData.plotSummary}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Added By (Email)</label>
          <input
            type="email"
            value={movie.addedBy}
            disabled
            className="w-full px-4 py-2 border rounded-lg cursor-not-allowed"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMovies;
