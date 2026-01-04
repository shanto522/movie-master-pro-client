import React from "react";

const blogs = [
  {
    title: "Top 10 Movies to Watch This Month",
    date: "Jan 1, 2026",
    snippet: "Discover the most trending movies this month and find your next favorite.",
    link: "/blog/top-10-movies",
  },
  {
    title: "How to Rate Movies Like a Pro",
    date: "Dec 20, 2025",
    snippet: "Learn tips and tricks to evaluate movies and write reviews that matter.",
    link: "/blog/rating-guide",
  },
  {
    title: "Upcoming Blockbusters in 2026",
    date: "Dec 15, 2025",
    snippet: "Get the first look at upcoming movies and plan your watchlist.",
    link: "/blog/upcoming-blockbusters",
  },
];

const BlogSection = () => {
  return (
    <section className="mb-20">
      <div className="max-w-[1410px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold  flex text-blue-500 mb-10">Latest Blogs & News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, idx) => (
            <a
              key={idx}
              href={b.link}
              className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{b.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{b.snippet}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
