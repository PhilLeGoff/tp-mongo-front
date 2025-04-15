import React from "react";

export default function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {[
        { title: "🎭 Most Common Genres" },
        { title: "⭐ Ratings Distribution" },
        { title: "🧑‍🎤 Top Actors" },
        { title: "📆 Movies by Decade" }
      ].map((panel, i) => (
        <div key={i} className="bg-[#1e293b] p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">{panel.title}</h2>
          <div className="h-40 bg-[#334155] rounded flex items-center justify-center text-gray-500">
            Chart Placeholder
          </div>
        </div>
      ))}
    </div>
  );
}