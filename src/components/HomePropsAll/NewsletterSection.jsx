import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="mb-10">
      <div className="max-w-[1410px] mx-auto px-6 md:px-12">
        {/* Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 text-center transition-colors duration-500">
          <div className="flex flex-col items-center gap-4 mb-6">
            <FaEnvelope className="text-blue-600 dark:text-blue-400 text-4xl" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
              Get latest updates, trending movies, and top recommendations delivered to your inbox.
            </p>
          </div>

          {submitted ? (
            <p className="text-green-500 font-semibold text-lg">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl w-full sm:w-auto flex-1 
                           text-gray-900 dark:text-gray-100 
                           bg-gray-100 dark:bg-gray-700 
                           border border-gray-300 dark:border-gray-600
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           placeholder-gray-400 dark:placeholder-gray-300
                           transition-colors duration-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700
                           text-white font-semibold shadow-lg hover:scale-105
                           transition duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
