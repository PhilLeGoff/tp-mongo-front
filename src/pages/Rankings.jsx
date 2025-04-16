import React, { useEffect, useState } from "react";
import axios from "axios";

const Rankings = () => {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchPopularByGenre = async () => {
      try {
        const { data: genres } = await axios.get("http://localhost:5000/genres/popular");
        console.log("Genres API response:", genres);


        const genrePromises = genres.map(async (genre) => {
          const response = await axios.get(`http://localhost:5000/genres/${genre.name}`);
          return {
            genre: genre.name,
            movies: response.data,
          };
        });

        const results = await Promise.all(genrePromises);
        setGenreData(results);
      } catch (error) {
        console.error("Erreur lors du chargement des films par genre :", error);
      }
    };

    fetchPopularByGenre();
  }, []);

  return (
    <div className="space-y-6">
      {genreData.map(({ genre, movies }) => (
        <div key={genre}>
          <h2 className="text-xl font-bold mb-2">{genre}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="p-2 border rounded">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded mb-1"
                />
                <p className="text-sm font-medium">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rankings;
