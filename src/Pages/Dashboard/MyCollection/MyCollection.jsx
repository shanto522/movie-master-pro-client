import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router";
import { BsCollectionPlay } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";

const MyCollection = () => {
  const { user, loading: authLoading, setLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLocalLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 15;

  useEffect(() => {
    if (!user) return;
    setLocalLoading(true);

    const fetchMyMovies = async () => {
      try {
        const res = await axiosSecure.get("/movies");
        const myMovies = res.data
          .filter((movie) => movie.addedBy === user.email)
          .sort((a, b) => b._id.localeCompare(a._id)); // Sort by _id descending (latest first)
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

  // Pagination calculations
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-4 space-y-4">
      <ToastContainer position="top-right" />

      <h2 className="flex items-center justify-start text-3xl font-extrabold mb-8 gap-3">
        <BsCollectionPlay className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="text-blue-500">My Movie Collection</span>
      </h2>

      {(loading || authLoading) && <Loading />}

      {!loading && movies.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          You haven't added any movies yet.
        </p>
      )}

      {!loading && movies.length > 0 && (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table-auto w-full shadow-lg rounded-xl min-w-[700px]">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left">No.</th>
                  <th className="px-4 py-2 text-left">Movie</th>
                  <th className="px-4 py-2 text-left">Info</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMovies.map((movie, index) => (
                  <tr
                    key={movie._id}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="px-4 py-3">
                      {indexOfFirstMovie + index + 1}
                    </td>
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

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {currentMovies.map((movie) => (
              <div
                key={movie._id}
                className="flex items-center justify-between shadow-lg rounded-xl p-4"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-6">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-lg border ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-lg border ${
                      page === currentPage
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-lg border ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyCollection;
