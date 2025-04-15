import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AnalyticsPanel() {
  
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/genres/popular')
        .then(response => {
          setGenres(response.data);
        })
        .catch(error => {
          console.error('Erreur lors du chargement des genres :', error);
        });
    }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🎭 Most Common Genres</h2>
        <ul>
          {genres.map(([genre, count]) => (
            <li key={genre}>{genre} : {count}</li>
          ))}
        </ul>
        <div className="h-40 bg-gray-700 rounded"></div>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">⭐ Ratings Distribution</h2>
        <div className="h-40 bg-gray-700 rounded"></div>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🧑‍🎤 Top Actors</h2>
        <div className="h-40 bg-gray-700 rounded"></div>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">📆 Movies by Decade</h2>
        <div className="h-40 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}