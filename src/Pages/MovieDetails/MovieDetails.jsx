import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  if (!movie) return <p className="text-center mt-10">Movie not found</p>;

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

      toast.success("Added to wishlist successfully!");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        toast.warning(
          err.response.data.message || "Already added to wishlist!"
        );
      } else {
        toast.error("Failed to add to wishlist!");
      }
    }
  };

  const handleDelete = async () => {
    toast.info(
      ({ closeToast }) => (
        <div className="flex flex-col gap-4">
          <p>Are you sure you want to delete this movie?</p>
          <div className="flex gap-3 justify-end">
            <button
              className="px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
              onClick={closeToast}
            >
              Cancel
            </button>
            <button
              className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
              onClick={async () => {
                try {
                  await axiosSecure.delete(`/movies/${movie._id}`);
                  toast.success("Movie deleted successfully!");
                  navigate("/allMovies");
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to delete movie");
                }
                closeToast();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-6">
      <ToastContainer position="top-right" />

      <div className="flex flex-col md:flex-row gap-6 shadow-xl rounded-2xl p-6 animate-fadeIn bg-white dark:bg-gray-900 transition duration-300">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-1/3 h-80 md:h-auto object-cover rounded-lg flex-shrink-0"
        />

        <div className="flex-1 space-y-3 w-full overflow-hidden">
          <h1 className="text-4xl font-bold break-words">{movie.title}</h1>

          <p className="break-words">
            <strong>Genre:</strong> {movie.genre} | <strong>Rating:</strong>{" "}
            {movie.rating} | <strong>Year:</strong> {movie.releaseYear}
          </p>

          <p className="break-words">
            <strong>Director:</strong> {movie.director}
          </p>
          <p className="break-words">
            <strong>Cast:</strong> {movie.cast}
          </p>
          <p className="break-words">
            <strong>Duration:</strong> {movie.duration} min
          </p>
          <p className="break-words">
            <strong>Language:</strong> {movie.language}
          </p>
          <p className="break-words">
            <strong>Country:</strong> {movie.country}
          </p>
          <p className="break-words">
            <strong>Added By:</strong> {movie.addedBy}
          </p>

          <p className="mt-4 break-words max-w-full overflow-auto">
            <strong>Plot Summary:</strong> {movie.plotSummary}
          </p>
          <button
            onClick={handleAddToWishlist}
            className="btn-pro mt-4 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Add to Wishlist
          </button>

          {isOwner && (
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link to={`/updateMovies/${movie._id}`}>
                <button className="px-5 py-2 btn-pro rounded-xl">Edit</button>
              </Link>
              <button
                onClick={handleDelete}
                className="px-5 py-2 btn-pro rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
