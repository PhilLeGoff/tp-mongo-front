import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "../services/MovieService";

import HottestSlider from "../components/HottestSlider";
import AnalyticsPanel from "../components/AnalyticsPanel";

export default function Home() {
  const { isLoading, error } = useQuery({
    queryKey: ["update-latest-movies"],
    queryFn: MovieService.updateDB,
    staleTime: 1000 * 60 * 30, // refresh only every 30 minutes
    retry: false,
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {isLoading && (
          <div className="text-center py-6 text-cyan-300">🔄 Updating latest movies...</div>
        )}
        {error && (
          <div className="text-center text-red-400">❌ Failed to update latest movies.</div>
        )}

        <HottestSlider />
        <AnalyticsPanel />
      </div>
    </div>
  );
}