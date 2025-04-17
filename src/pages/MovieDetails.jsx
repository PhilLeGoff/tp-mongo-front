import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/films/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Erreur chargement film:", err));
  }, [id]);

  useEffect(() => {
    axios.get("http://localhost:5000/favorites")
      .then((res) => {
        const exists = res.data.some((fav) => fav.movie_id === movie.id);
        setIsFavorite(exists);
      });
  }, [movie]);

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
    return <div className="text-white text-center mt-10">Chargement...</div>;
  }

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

            <p className="text-gray-400 text-sm mb-4">{movie.release_date}</p>
            <p className="text-sm text-gray-300 mb-6">{movie.overview}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((genre, i) => (
                <span
                  key={i}
                  className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-4">
            <p>⭐ Note : <span className="text-white font-semibold">{movie.vote_average}</span></p>
            <p>🗳️ Votes : {movie.vote_count}</p>
            <p>🗣️ Langue originale : {movie.original_language?.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
