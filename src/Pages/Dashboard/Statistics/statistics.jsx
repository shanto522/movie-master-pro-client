import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Statistics = () => {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Movies public, Users & Wishlist secure
        const [moviesRes, usersRes, wishlistRes] = await Promise.all([
          axiosSecure.get("/movies"),       // যদি public হয়, তাহলে axiosSecure বা normal axios উভয় চলে
          axiosSecure.get("/users"),
          axiosSecure.get("/wishlist"),
        ]);

        setMovies(moviesRes.data);
        setUsers(usersRes.data);
        setWishlist(wishlistRes.data);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  // Overview cards
  const overviewData = [
    { title: "Total Movies", value: movies.length },
    { title: "Total Users", value: users.length },
    { title: "Wishlist Items", value: wishlist.length },
  ];

  // Rating distribution (Pie Chart)
  const ratingDistribution = [
    { name: "1-2", value: movies.filter(m => m.rating >= 1 && m.rating < 3).length },
    { name: "3-4", value: movies.filter(m => m.rating >= 3 && m.rating < 5).length },
    { name: "5", value: movies.filter(m => m.rating === 5).length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  // Genre count (Bar Chart)
  const genreCount = {};
  movies.forEach(movie => {
    movie.genre?.forEach(g => {
      genreCount[g] = (genreCount[g] || 0) + 1;
    });
  });
  const genreData = Object.entries(genreCount).map(([genre, count]) => ({ genre, count }));

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {overviewData.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <p className="text-gray-500">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Genre Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Movies by Genre</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genreData}>
              <XAxis dataKey="genre" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Pie Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Rating Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ratingDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {ratingDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dynamic Data Table */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Movies List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Genre</th>
                <th className="py-2 px-4 border-b">Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id} className="text-center">
                  <td className="py-2 px-4 border-b">{movie.title}</td>
                  <td className="py-2 px-4 border-b">{movie.genre?.join(", ")}</td>
                  <td className="py-2 px-4 border-b">{movie.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
