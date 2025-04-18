import React, { useState } from "react";
import Loader from "./Loader"; // adjust path if necessary

export default function PowerBIEmbed({ src, height = "600px" }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl border border-cyan-800 relative" style={{ height }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#0f172a]">
          <Loader text="Chargement du tableau PowerBI..." />
        </div>
      )}
      <iframe
        title="Power BI Report"
        width="100%"
        height={height}
        src={src}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full relative z-0"
        onLoad={() => setLoading(false)}
        style={{ visibility: loading ? "hidden" : "visible" }}
      ></iframe>
    </div>
  );
}
