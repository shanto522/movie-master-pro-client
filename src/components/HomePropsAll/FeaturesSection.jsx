import React from "react";
import { FaBolt, FaLock, FaSearch, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt size={28} className="text-blue-600" />,
    title: "Fast & Smooth",
    description:
      "Instant movie browsing experience with lightning-fast search and filters.",
  },
  {
    icon: <FaLock size={28} className="text-blue-600" />,
    title: "Secure & Private",
    description:
      "Your account and preferences are fully protected and private.",
  },
  {
    icon: <FaSearch size={28} className="text-blue-600" />,
    title: "Advanced Search",
    description:
      "Find movies by genre, rating, release year, or your favorite actors.",
  },
  {
    icon: <FaUsers size={28} className="text-blue-600" />,
    title: "User Friendly",
    description: "Clean and intuitive interface, designed for all devices.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1410px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold flex text-blue-500 mb-10">
          Why Choose Our Movie App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
