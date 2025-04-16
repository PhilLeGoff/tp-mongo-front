import React from "react";
import BarChart from "./BarChart";

export default function AnalyticsSection({ title, data, label, className = "" }) {
  const shouldScroll = data.length > 5;

  return (
    <div className={`bg-gray-800 p-4 rounded-xl ${className}`}>
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      {data.length > 0 ? (
        <div className={`${shouldScroll ? "max-h-64 overflow-y-auto pr-2" : ""}`}>
          <BarChart data={data} label={label} />
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No data available</p>
      )}
    </div>
  );
}
