export default function TopLists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🏆 Top Rated Movies</h2>
        <ul className="text-sm space-y-1">
          <li>The Shawshank Redemption</li>
          <li>The Godfather</li>
          <li>The Dark Knight</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🔥 Most Voted</h2>
        <ul className="text-sm space-y-1">
          <li>Inception</li>
          <li>Avengers: Endgame</li>
          <li>Interstellar</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🎬 Top Directors</h2>
        <ul className="text-sm space-y-1">
          <li>Christopher Nolan</li>
          <li>Steven Spielberg</li>
          <li>Quentin Tarantino</li>
        </ul>
      </div>
    </div>
  );
}