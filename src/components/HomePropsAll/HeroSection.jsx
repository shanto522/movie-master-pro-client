import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules"; // 🔹 Navigation remove
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaStar } from "react-icons/fa";

const HeroSection = ({ movies }) => {
  return (
    <section className="relative w-full mb-16">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        observer={true}
        observeParents={true}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {movies.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie._id}>
            <div className="relative w-full h-[60vh] md:h-[60vh] sm:h-[50vh]">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-[60vh]  md:h-[90vh] sm:h-[50vh] object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  {movie.title}
                </h2>
                <p className="text-white/90 mt-2 mb-4 text-lg">{movie.genre}</p>
                <div className="flex items-center gap-2 text-yellow-400">
                  <FaStar />
                  <span>{movie.rating || "N/A"}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
