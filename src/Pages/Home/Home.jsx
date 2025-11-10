import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import HeroSection from "../../components/HomePropsAll/HeroSection";
import StatsSection from "../../components/HomePropsAll/StatsSection";
import TopRatedMovies from "../../components/HomePropsAll/TopRatedMovies";
import RecentlyAdded from "../../components/HomePropsAll/RecentlyAdded";
import Genres from "../../components/HomePropsAll/Gener";
import About from "../../components/HomePropsAll/About";

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

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  const totalMovies = movies.length;
  const uniqueUsers = new Set(movies.map((m) => m.addedBy).filter(Boolean))
    .size;
  const topRated = [...movies]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);
  const recentlyAddedList = [...movies].reverse().slice(0, 6);

  return (
    <div className="min-h-screen dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-all duration-300">
      <HeroSection movies={movies} />
      <StatsSection
        totalMovies={totalMovies}
        totalUsers={uniqueUsers}
        recentlyAdded={recentlyAddedList}
      />
      <TopRatedMovies topRated={topRated} />
      <RecentlyAdded recentlyAdded={recentlyAddedList} />
      <Genres />
      <About />
    </div>
  );
};

export default Home;
