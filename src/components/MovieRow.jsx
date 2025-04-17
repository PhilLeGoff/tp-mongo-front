import React from "react";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";


export default function MovieRow({ title, movies }) {
  const navigate = useNavigate()
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 px-2 drop-shadow">{title}</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105" onClick={() => navigate(`/details/${movie.id}`)}>
              <div className="aspect-[2/3]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                <p className="text-xs text-cyan-300 mt-1">⭐ {movie.vote_average}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
