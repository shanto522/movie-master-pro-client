import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { GiEternalLove } from "react-icons/gi";
import useAuth from "../../hooks/useAuth"; //

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth(); //

  useEffect(() => {
    if (!user?.email) return;
    axios
      .get(`http://localhost:3000/wishlist?email=${user.email}`)
      .then((res) => setWishlist(res.data))
      .catch(() => toast.error("Failed to load wishlist"));
  }, [user]);

  const handleRemove = (id) => {
    axios
      .delete(`http://localhost:3000/wishlist/${id}`)
      .then(() => {
        setWishlist((prev) => prev.filter((m) => m._id !== id));
        toast.info("Removed from wishlist!");
      })
      .catch(() => toast.error("Failed to remove"));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ToastContainer position="top-center" />
      <h2 className="flex items-center justify-center text-3xl md:text-5xl font-extrabold mb-8 gap-3">
        <GiEternalLove className="w-10 h-10 text-pink-500 dark:text-pink-400" />
        <span
          className="bg-clip-text text-transparent 
               bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 
               dark:from-pink-400 dark:via-red-400 dark:to-orange-400"
        >
          My Wishlist
        </span>
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((movie) => (
            <motion.div
              key={movie._id}
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
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
