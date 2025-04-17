import React from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import AnalyticsPanel from "../components/AnalyticsPanel";
import TopLists from "../components/TopLists";
import TopRatedSlider from "../components/HottestSlider";
import HottestSlider from "../components/HottestSlider";
import { useSearch } from "../context/SearchContext";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import MovieRow from "../components/MovieRow";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const { query, genre } = useSearch();

  const isSearching = query.trim() !== "" || genre.trim() !== "";

  const { data: movies, isLoading } = useQuery({
    queryKey: ['search', query, genre],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/films/search', {
        params: { q: query, genre: genre || undefined }
      });
      return res.data;
    },
    enabled: isSearching,
  });
  
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {isSearching ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {isLoading && <p>Loading...</p>}
            {movies?.length > 0 ? (
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
            ) : (
              <p>No results found.</p>
            )}
          </>
        ) : (
          <>
            <HottestSlider />
            <AnalyticsPanel />
          </>
        )}
      </div>
    </div>
  );
}

