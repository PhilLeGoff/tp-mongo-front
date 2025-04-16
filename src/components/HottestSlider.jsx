import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MovieService } from "../services/MovieService";

export default function HottestSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getHottest().then(setMovies);
  }, []);

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        🏆 Hottest Movies
      </h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1e293b] text-white rounded-lg overflow-hidden shadow-md max-w-[300px] mx-auto">
              <div className="aspect-[2/3]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">⭐ {movie.vote_average}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
