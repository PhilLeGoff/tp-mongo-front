import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ActorRow({ title, actors }) {
  const navigate = useNavigate();

  if (!actors || actors.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 px-2 drop-shadow">
        {title}
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
        {actors.map((actor, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
              onClick={() => navigate(`/actor/${actor.id}`)}
            >
              <div className="aspect-[2/3]">
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={actor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-semibold text-sm truncate">{actor.name}</h3>
                {actor.character && (
                  <p className="text-xs text-gray-400 mt-1">{actor.character}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
