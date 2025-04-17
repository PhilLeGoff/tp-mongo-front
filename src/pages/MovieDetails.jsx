import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieService } from "../services/MovieService";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    MovieService.getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div className="text-white p-10">Loading...</div>;

  const directors = movie.credits?.crew?.filter((p) => p.job === "Director") || [];
  const writers = movie.credits?.crew?.filter(
    (p) => p.job === "Writer" || p.department === "Writing"
  ) || [];
  const topCast = movie.credits?.cast?.slice(0, 6) || [];
  const trailer = movie.videos?.results?.find((v) => v.type === "Trailer");

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[300px] rounded-xl shadow-xl"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-cyan-400">
            {movie.title}{" "}
            <span className="text-gray-400 text-2xl">
              ({movie.release_date?.slice(0, 4) || "N/A"})
            </span>
          </h1>

          <div className="text-sm text-gray-400 flex flex-wrap gap-2">
            <span>{movie.release_date || "Unknown release date"}</span>•
            <span>
              {movie.genres?.map((g) => g.name).join(", ") || "No genres listed"}
            </span>•
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

          <div>
            <h2 className="font-semibold text-lg mt-6 mb-1">Overview</h2>
            <p className="text-gray-300 text-sm">
              {movie.overview || "No overview available."}
            </p>
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

      <div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Top Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {topCast.length > 0 ? (
            topCast.map((actor, i) => (
              <div
                key={i}
                className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md text-center p-2 cursor-pointer"
                onClick={() => navigate(`/actor/${actor.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="text-sm mt-1 text-white font-semibold">{actor.name}</div>
                <div className="text-xs text-gray-400">{actor.character}</div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No cast info available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
