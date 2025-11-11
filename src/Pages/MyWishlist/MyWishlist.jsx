import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { GiEternalLove } from "react-icons/gi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get("/wishlist")
      .then((res) => setWishlist(res.data))
      .catch(() => {
        setWishlist([]);
        toast.error("Failed to load wishlist");
      });
  }, [user, axiosSecure]);

  const handleRemove = async (id) => {
    try {
      await axiosSecure.delete(`/wishlist/${id}`);
      setWishlist((prev) => prev.filter((m) => m._id !== id));
      toast.info("Removed from wishlist!");
    } catch (error) {
      toast.error("Failed to remove from wishlist");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ToastContainer position="top-left" />
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3 font-inter">
        <GiEternalLove className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Wishlist
        </span>
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {wishlist.map((movie) => (
              <motion.div
                key={movie._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition duration-300"
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Genre:</strong> {movie.genre} <br />
                    <strong>Rating:</strong> {movie.rating}
                  </p>
                  <button
                    onClick={() => handleRemove(movie._id)}
                    className="mt-4 w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
