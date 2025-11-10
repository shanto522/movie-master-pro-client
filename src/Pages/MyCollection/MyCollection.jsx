import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router";
import { BsCollectionPlay } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCollection = () => {
  const { user, loading: authLoading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLocalLoading(true);
    const fetchMyMovies = async () => {
      try {
        const res = await axiosSecure.get("/movies");
        const myMovies = res.data.filter(
          (movie) => movie.addedBy === user.email
        );
        setMovies(myMovies);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch your movies");
      } finally {
        setLocalLoading(false);
        setLoading(false);
      }
    };
    fetchMyMovies();
  }, [user, setLoading, axiosSecure]);

  const handleDelete = async (id) => {
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
                  await axiosSecure.delete(`/movies/${id}`);
                  toast.success("Movie deleted successfully!");
                  setMovies(movies.filter((movie) => movie._id !== id));
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
    <div className="max-w-6xl mx-auto p-4 md:p-12 space-y-4">
      <ToastContainer position="top-center" />

      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3">
        <BsCollectionPlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Movie Collection
        </span>
      </h2>

      {(loading || authLoading) && (
        <p className="text-center mt-10">Loading your movies...</p>
      )}

      {!loading && movies.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          You haven't added any movies yet.
        </p>
      )}

      {!loading && movies.length > 0 && (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="table-auto w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl min-w-[700px]">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">No.</th>
                  <th className="px-4 py-2 text-left">Movie</th>
                  <th className="px-4 py-2 text-left">Info</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr
                    key={movie._id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 flex items-center gap-3">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={movie.posterUrl}
                          alt={movie.title}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{movie.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {movie.genre}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm space-y-1">
                      <p>
                        <strong>Rating:</strong> {movie.rating} |{" "}
                        <strong>Year:</strong> {movie.releaseYear}
                      </p>
                      <p>
                        <strong>Director:</strong> {movie.director}
                      </p>
                      <p>
                        <strong>Cast:</strong> {movie.cast}
                      </p>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        onClick={() => navigate(`/updateMovies/${movie._id}`)}
                        className="flex items-center gap-1 px-3 py-1 btn-pro rounded-lg"
                      >
                        <BiEdit /> Update
                      </button>
                      <button
                        onClick={() => handleDelete(movie._id)}
                        className="flex items-center gap-1 px-3 py-1 btn-pro rounded-lg"
                      >
                        <BiTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {movies.map((movie) => (
              <div
                key={movie._id}
                className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-lg">{movie.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {movie.genre}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => navigate(`/updateMovies/${movie._id}`)}
                    className="flex items-center gap-1 px-3 py-1 btn-pro rounded-lg"
                  >
                    <BiEdit /> Update
                  </button>
                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="flex items-center gap-1 px-3 py-1 btn-pro rounded"
                  >
                    <BiTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCollection;
