import React from "react";

export default function TopLists() {
  const listClasses = "bg-[#1e293b] p-6 rounded-xl";
  const headingClasses = "text-xl font-semibold mb-4 text-cyan-300";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className={listClasses}>
        <h2 className={headingClasses}>🏆 Top Rated Movies</h2>
        <ul className="text-sm space-y-1 text-gray-300">
          <li>The Shawshank Redemption</li>
          <li>The Godfather</li>
          <li>The Dark Knight</li>
        </ul>
      </div>
      <div className={listClasses}>
        <h2 className={headingClasses}>🔥 Most Voted</h2>
        <ul className="text-sm space-y-1 text-gray-300">
          <li>Inception</li>
          <li>Avengers: Endgame</li>
          <li>Interstellar</li>
        </ul>
      </div>
      <div className={listClasses}>
        <h2 className={headingClasses}>🎬 Top Directors</h2>
        <ul className="text-sm space-y-1 text-gray-300">
          <li>Christopher Nolan</li>
          <li>Steven Spielberg</li>
          <li>Quentin Tarantino</li>
        </ul>
      </div>
    </div>
  );
}