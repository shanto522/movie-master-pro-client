import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { GiEternalLove } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

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
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this movie from your wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/wishlist/${id}`);
        setWishlist((prev) => prev.filter((m) => m._id !== id));
        Swal.fire("Deleted!", "Removed from wishlist.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to remove from wishlist.", "error");
      }
    }
  };

  return (
    <div className=" py-4">
      <ToastContainer position="top-right" />
      <h2 className="flex items-center justify-start text-3xl md:text-4xl font-extrabold mb-8 gap-3 font-inter">
        <GiEternalLove className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <span className="text-blue-500">My Wishlist</span>
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {wishlist.map((movie) => (
              <motion.div
                key={movie._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg transform transition duration-300 hover:shadow-2xl flex flex-col h-full overflow-hidden"
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-t-2xl flex-shrink-0"
                />

                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white break-words mb-2 min-h-[3rem]">
                    {movie.title}
                  </h2>

                  <div className="flex justify-between items-center mb-2 min-h-[1.5rem]">
                    <p className="text-sm text-gray-500 dark:text-gray-300 break-words">
                      {movie.genre}
                    </p>
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      {movie.rating}
                      <FaStar className="text-yellow-400" />
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleRemove(movie._id)}
                      className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
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
