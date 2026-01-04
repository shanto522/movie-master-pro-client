import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Movie Enthusiast",
    rating: 5,
    comment: "Best movie platform ever! Fast, smooth, and easy to use.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Michael Lee",
    role: "Admin",
    rating: 4,
    comment: "Clean design and great features. Highly recommend for movie lovers.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emily Davis",
    role: "User",
    rating: 5,
    comment: "I found all my favorite movies in one place. Amazing experience!",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "David Wilson",
    role: "Film Critic",
    rating: 5,
    comment: "Exceptional platform for discovering new movies. Smooth UI and excellent features!",
    avatar: "https://i.pravatar.cc/100?img=65",
  },
  {
    name: "Laura Martinez",
    role: "Cinema Blogger",
    rating: 4,
    comment: "A must-have platform for movie lovers. Great UX and constantly updated content.",
    avatar: "https://i.pravatar.cc/100?img=71",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1410px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold flex text-blue-500 mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <div className="flex justify-center items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={`text-yellow-400 ${i < t.rating ? "opacity-100" : "opacity-40"}`} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
