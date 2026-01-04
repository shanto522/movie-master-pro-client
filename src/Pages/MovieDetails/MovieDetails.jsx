import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  if (!movie) {
    return (
      <p className="text-center mt-20 text-xl text-gray-500">Movie not found</p>
    );
  }

  const isOwner = user?.email === movie.addedBy;

  const handleAddToWishlist = async () => {
    if (!user) {
      toast.error("Please login to add movies to wishlist");
      return;
    }

    try {
      await axiosSecure.post("/wishlist", {
        movieId: movie._id,
        title: movie.title,
        genre: movie.genre,
        rating: movie.rating,
        posterUrl: movie.posterUrl,
      });
      toast.success("Added to wishlist!");
    } catch (err) {
      if (err.response?.status === 400) {
        toast.warning(err.response.data.message || "Already added!");
      } else {
        toast.error("Failed to add to wishlist");
      }
    }
  };

const handleDelete = async () => {
  // SweetAlert2 confirmation
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This movie will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      await axiosSecure.delete(`/movies/${movie._id}`);
      Swal.fire("Deleted!", "Movie deleted successfully.", "success");
      navigate("/allMovies"); // delete success -> redirect
    } catch (err) {
      Swal.fire("Error!", "Failed to delete movie.", "error");
    }
  }
};

  return (
    <section className="py-10 px-4">
      <ToastContainer position="top-right" />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Poster */}
        <div className="relative sticky top-0">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full max-h-[600px] object-cover rounded-3xl shadow-2xl"
          />
          <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold bg-black/70 text-white">
            ⭐ {movie.rating}
          </span>
        </div>

        {/* Movie Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            {movie.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {movie.genre} • {movie.releaseYear} • {movie.duration} min
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            <p>
              <span className="font-semibold">Director:</span> {movie.director}
            </p>
            <p>
              <span className="font-semibold">Language:</span> {movie.language}
            </p>
            <p>
              <span className="font-semibold">Country:</span> {movie.country}
            </p>
            <p>
              <span className="font-semibold">Added By:</span> {movie.addedBy}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Cast</h3>
            <p className="text-gray-700 dark:text-gray-300">{movie.cast}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Story</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {movie.plotSummary}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={handleAddToWishlist}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              + Add to Wishlist
            </button>

            {isOwner && (
              <>
                <Link to={`/updateMovies/${movie._id}`}>
                  <button className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition">
                    Edit Movie
                  </button>
                </Link>

                <button
                  onClick={handleDelete}
                  className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
