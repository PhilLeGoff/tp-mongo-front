import React, { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";
import AnalyticsSection from "./AnalyticsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AnalyticsPanel() {
  const [data, setData] = useState({
    appreciatedGenres: [],
    topMoviesByDecade: [],
    topRated: [],
    surprise: [],
  });

  useEffect(() => {
    MovieService.getAnalyticsOverview().then(setData);
  }, []);

  useEffect(() => {console.log(data.topMoviesByDecade)},[data])

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
    title="📆 Best Movie per Decade"
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
  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl md:col-span-2 shadow-lg">
    <h2 className="text-xl font-bold mb-2 text-white">🎉 Hidden Gems</h2>
    <p className="text-sm text-gray-400 mb-4">
      High rating, low exposure 👇
    </p>
    <Swiper spaceBetween={20} slidesPerView={3}>
      {data.surprise.map((movie, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[#1e293b] text-white rounded-lg overflow-hidden shadow-md transition hover:shadow-xl">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">
                {movie.title}
              </h3>
              <p className="text-sm text-gray-400">
                ⭐ {movie.vote_average} ({movie.vote_count} votes)
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
