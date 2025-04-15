export default function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🎭 Most Common Genres</h2>
        {/* Chart placeholder */}
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