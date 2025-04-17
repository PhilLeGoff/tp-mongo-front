// src/components/Loader.jsx
import React from "react";

export default function Loader({ text = "Chargement..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
      <svg className="animate-spin h-10 w-10 text-cyan-400 mb-4" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}
