import React from "react";

export default function BarChart({ data = [], label = "Value" }) {
  // Pour déterminer la largeur relative (valeur max = 100%)
  const maxValue = Math.max(...data.map((d) => d.value || 0), 10);

  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between text-sm text-gray-200 mb-1">
            <span className="truncate">{item.label}</span>
            <span className="ml-2 font-medium text-cyan-400">
              {item.value.toFixed(1)}
            </span>
          </div>
          <div className="w-full h-4 bg-gray-700 rounded">
            <div
              className="h-full bg-cyan-500 rounded transition-all duration-300"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
