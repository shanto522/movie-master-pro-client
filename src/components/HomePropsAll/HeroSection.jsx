import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaStar, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router";

const HeroSection = ({ movies }) => {
  return (
    <section className="relative mb-20">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        loop
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {movies.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie._id}>
            <div className="relative w-full h-[60vh] md:h-[65vh]">
              {/* Background Image */}
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover brightness-[0.65]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="max-w-7xl px-6 md:px-16 pb-12 md:pb-20 text-white">
                  <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                    {movie.title}
                  </h1>

                  <p className="mt-3 text-lg text-white/90 max-w-xl">
                    {movie.genre}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-yellow-400">
                    <FaStar />
                    <span className="font-semibold">
                      {movie.rating || "N/A"}
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      to={`/movieDetails/${movie._id}`}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/allMovies"
                      className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      All Movies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-300 animate-bounce">
        <span className="text-sm mb-1">Scroll</span>
        <FaChevronDown className="text-2xl" />
      </div>
    </section>
  );
};

export default HeroSection;
