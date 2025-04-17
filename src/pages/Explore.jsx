import React, { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MovieRow({ title, movies }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-cyan-400 mb-2">{title}</h2>
      <Swiper spaceBetween={16} slidesPerView={5}>
        {movies.map((movie, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#1e293b] rounded-lg overflow-hidden shadow-md">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-2 text-white text-sm truncate">{movie.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function Explore() {
  const [exploreData, setExploreData] = useState({});

  useEffect(() => {
    const fetchSections = async () => {
      const sections = [
        ["recommended", "recommended"],
        ["newReleases", "new-releases"],
        ["mostPopular", "most-popular"],
        ["criticallyAcclaimed", "critically-acclaimed"],
        ["underrated", "underrated"],
        ["longWatches", "long-watches"],
        ["shortMovies", "short-movies"],
        ["nostalgia90s", "nostalgia-90s"],
        ["sciFi", "sci-fi"],
        ["trueStories", "true-stories"],
      ];
  
      const fetches = await Promise.all(
        sections.map(([key, endpoint]) =>
          MovieService.getExploreSection(endpoint).then((res) => [key, res])
        )
      );
  
      const newData = Object.fromEntries(fetches);
      setExploreData(newData);
    };
  
    fetchSections();
  }, []);
  

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      {Object.entries(exploreData)
      .filter(([, movies]) => Array.isArray(movies) && movies.length > 0)
      .map(([key, movies]) => (
        <MovieRow key={key} title={toLabel(key)} movies={movies} />
      ))}
    </div>
  );
}

function toLabel(key) {
  return {
    recommended: "🎯 Recommanded for you",
    newReleases: "🆕 New Releases",
    mostPopular: "🔥 Most Popular Now",
    criticallyAcclaimed: "🏅 Critically Acclaimed",
    underrated: "💎 Underrated Treasures",
    longWatches: "⏳ Long Watches",
    shortMovies: "⏱️ Short & Sweet",
    nostalgia90s: "📼 90s Nostalgia",
    sciFi: "👽 Sci-Fi Madness",
    trueStories: "📖 Based on True Stories",
  }[key] || key;
}
