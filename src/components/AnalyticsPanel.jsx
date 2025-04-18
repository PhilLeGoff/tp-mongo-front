import React, { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";
import AnalyticsSection from "./AnalyticsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export default function AnalyticsPanel() {
  const [data, setData] = useState({
    appreciatedGenres: [],
    topMoviesByDecade: [],
    topRated: [],
    surprise: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    MovieService.getAnalyticsOverview().then(setData);
  }, []);

  const genreChartData = data.appreciatedGenres.map((g) => ({
    label: g._id,
    value: g.avgRating,
  }));

  const decadeChartData = data.topMoviesByDecade.map((d) => ({
    label: d.title,
    value: d.vote_average,
  }));

  const topRatedChartData = data.topRated.map((m) => ({
    label: m.title,
    value: m.vote_average,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <AnalyticsSection
        title="🎭 Most Appreciated Genres"
        data={genreChartData}
        label="Average Rating"
      />
      <AnalyticsSection
        title="📆 Best Rated Movies per Decade"
        data={decadeChartData}
        label="Top Movie Rating"
      />
      <AnalyticsSection
        title="🏆 Top Rated Movies"
        data={topRatedChartData}
        label="Rating"
        className="md:col-span-2"
      />

      {/* 🎉 Hidden Gems */}
      <div className="mb-12 pt-10 md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center drop-shadow">
          🎉 Hidden Gems
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
          {data.surprise.map((movie, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/details/${movie.id}`)}
              >
                <div className="aspect-[2/3]">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                  <p className="text-xs text-cyan-300 mt-1">
                    ⭐ {movie.vote_average}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
