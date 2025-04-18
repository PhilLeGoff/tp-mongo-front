// src/pages/SearchResults.jsx
import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "swiper/css";
import "swiper/css/grid";

export default function SearchResults() {
  const { query, genre } = useSearch();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const limit = 20;

  const { data: moviesData, isLoading } = useQuery({
    queryKey: ["search", query, genre, page],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/films/search", {
        params: { q: query, genre: genre || undefined, page, limit },
      });
      return res.data;
    },
    enabled: query.trim() !== "" || genre.trim() !== "",
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">🔍 Search Results</h2>

      {isLoading && <Loader text="Loading movies..." />}

      {moviesData?.results?.length > 0 ? (
        <>
          <Swiper
            modules={[Grid]}
            spaceBetween={16}
            slidesPerView={5}
            grid={{ rows: 4, fill: "row" }}
            breakpoints={{
              320: { slidesPerView: 2, grid: { rows: 4 } },
              640: { slidesPerView: 3, grid: { rows: 4 } },
              1024: { slidesPerView: 5, grid: { rows: 4 } },
            }}
          >
            {moviesData.results.map((movie, i) => (
              <SwiperSlide key={i}>
                <div
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-xl shadow-xl 
                  overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
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
                    <h3 className="font-semibold text-sm truncate">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-cyan-300 mt-1">
                      ⭐ {movie.vote_average}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-6 gap-3">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-600 disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-sm text-gray-300 px-2 py-1">
              Page {moviesData.page} of {moviesData.total_pages}
            </span>
            <button
              onClick={() =>
                setPage((prev) =>
                  Math.min(prev + 1, moviesData.total_pages)
                )
              }
              disabled={page === moviesData.total_pages}
              className="bg-cyan-500 px-3 py-1 rounded hover:bg-cyan-600 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        !isLoading && (
          <p className="text-gray-400 text-sm text-center">No results found.</p>
        )
      )}
    </div>
  );
}
