import React from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import AnalyticsPanel from "../components/AnalyticsPanel";
import TopLists from "../components/TopLists";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <div className="max-w-7xl mx-auto ">
        <SearchBar />
        <AnalyticsPanel />
        <TopLists />
        <MovieGrid />
      </div>
    </div>
  );
}
