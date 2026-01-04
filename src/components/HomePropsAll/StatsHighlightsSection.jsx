import React from "react";
import { FaFilm, FaUsers, FaStar, FaClock } from "react-icons/fa";

const stats = [
  { icon: <FaFilm />, value: "12k+", label: "Movies Available" },
  { icon: <FaUsers />, value: "5k+", label: "Active Users" },
  { icon: <FaStar />, value: "4.8", label: "Average Rating" },
  { icon: <FaClock />, value: "24/7", label: "New Releases Daily" },
];

const StatsHighlightsSection = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl flex font-bold mb-10 text-blue-500">
          Platform Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{s.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsHighlightsSection;
