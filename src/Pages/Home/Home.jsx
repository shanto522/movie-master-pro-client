import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useAxios from "../../hooks/useAxios";
import HeroSection from "../../components/HomePropsAll/HeroSection";
import StatsSection from "../../components/HomePropsAll/StatsSection";
import TopRatedMovies from "../../components/HomePropsAll/TopRatedMovies";
import RecentlyAdded from "../../components/HomePropsAll/RecentlyAdded";
import Genres from "../../components/HomePropsAll/Gener";
import About from "../../components/HomePropsAll/About";
import FeaturesSection from "../../components/HomePropsAll/FeaturesSection";
import TestimonialsSection from "../../components/HomePropsAll/TestimonialsSection";
import BlogSection from "../../components/HomePropsAll/BlogSection";
import FAQSection from "../../components/HomePropsAll/FAQSection";
import NewsletterSection from "../../components/HomePropsAll/NewsletterSection";
import PartnersSection from "../../components/HomePropsAll/PartnersSection";
import StatsHighlightsSection from "../../components/HomePropsAll/StatsHighlightsSection";

const FadeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const axios = useAxios();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("/movies");
        setMovies(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [axios]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <motion.div
          className="loading loading-bars loading-xl text-blue-600 dark:text-blue-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        ></motion.div>
      </div>
    );

  const totalMovies = movies.length;
  const uniqueUsers = new Set(movies.map((m) => m.addedBy).filter(Boolean))
    .size;
  const topRated = [...movies]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);
  const recentlyAddedList = [...movies].reverse().slice(0, 6);

  return (
    <motion.div
      className="min-h-screen  dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroSection movies={movies} />
      </motion.div>

      <FadeInWhenVisible>
        <StatsSection
          totalMovies={totalMovies}
          totalUsers={uniqueUsers}
          recentlyAdded={recentlyAddedList}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TopRatedMovies topRated={topRated} />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <RecentlyAdded recentlyAdded={recentlyAddedList} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <StatsHighlightsSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Genres />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FeaturesSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TestimonialsSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <BlogSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <FAQSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <PartnersSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <NewsletterSection />
      </FadeInWhenVisible>
    </motion.div>
  );
};

export default Home;
