import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import MovieRow from "../components/MovieRow";

const Rankings = () => {
  const [genreData, setGenreData] = useState(null);

  useEffect(() => {
    const fetchPopularByGenre = async () => {
      try {
        const { data: genres } = await axios.get("http://localhost:5000/genres/popular");

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

  if (!genreData) {
    return <Loader text="Loading movie details..." />;
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="space-y-12">
        {genreData
          .filter(({ movies }) => movies.length > 0)
          .map(({ genre, movies }) => (
            <MovieRow key={genre} title={genre} movies={movies} />
          ))}
      </div>
    </div>
  );
};

export default Rankings;
