import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieService } from "../services/MovieService";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";
import ActorRow from "../components/ActorRow";
import Loader from "../components/Loader";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch movie details
  useEffect(() => {
    MovieService.getMovieDetails(id).then(setMovie);
  }, [id]);

  // Check if movie is favorite
  useEffect(() => {
    if (!movie) return;
    axios.get("http://localhost:5000/favorites")
      .then((res) => {
        const exists = res.data.some((fav) => fav.movie_id === movie.id);
        setIsFavorite(exists);
      });
  }, [movie]);

  // Toggle favorite
  const toggleFavorite = () => {
    axios.post("http://localhost:5000/favorites/toggle", {
      movie_id: movie.id,
      movie_data: {
        title: movie.title,
        genres: movie.genres
      }
    }).then(() => {
      setIsFavorite(!isFavorite);
    }).catch(console.error);
  };

  if (!movie) {
    return <Loader text="Loading movie details..." />;
  }

  const directors = movie.credits?.crew?.filter((p) => p.job === "Director") || [];
  const writers = movie.credits?.crew?.filter(
    (p) => p.job === "Writer" || p.department === "Writing"
  ) || [];
  const topCast = movie.credits?.cast?.slice(0, 6) || [];
  const trailer = movie.videos?.results?.find((v) => v.type === "Trailer");

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl shadow-xl overflow-hidden grid md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <button
                onClick={toggleFavorite}
                className="text-yellow-400 text-2xl hover:scale-110 transition-transform"
                title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                {isFavorite ? <FaStar /> : <FaRegStar />}
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-4">{movie.release_date || "Unknown release date"}</p>

            <div className="text-sm text-gray-400 flex flex-wrap gap-2 mb-4">
              <span>{movie.genres?.map((g) => g.name).join(", ") || "Genres not listed"}</span>
              <span>•</span>
              <span>
                {movie.runtime
                  ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
                  : "Runtime not available"}
              </span>
            </div>

            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                className="inline-block bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full text-white text-sm font-semibold"
                rel="noreferrer"
              >
                ▶️ Watch Trailer
              </a>
            )}

            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-1">Overview</h2>
              <p className="text-gray-300 text-sm">{movie.overview || "No overview available."}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
              <div>
                <h3 className="font-bold">🎬 Director(s)</h3>
                <ul className="text-sm text-gray-300">
                  {directors.length > 0 ? (
                    directors.map((p, i) => <li key={i}>{p.name}</li>)
                  ) : (
                    <li>No director info</li>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-bold">🖋️ Writers</h3>
                <ul className="text-sm text-gray-300">
                  {writers.length > 0 ? (
                    writers.map((p, i) => <li key={i}>{p.name}</li>)
                  ) : (
                    <li>No writer info</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Top Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {topCast.length > 0 ? (
             <div className="max-w-5xl mx-auto mt-10">
             <ActorRow title="🎭 Top Cast" actors={topCast} />
           </div>
          ) : (
            <p className="text-gray-400 text-sm">No cast info available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
