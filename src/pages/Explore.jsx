import React, { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";
import "swiper/css";
import MovieRow from "../components/MovieRow";
import Loader from "../components/Loader";

export default function Explore() {
  const [exploreData, setExploreData] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      const sections = [
        ["recommended", "recommended"],
        ["newReleases", "new-releases"],
        ["mostPopular", "most-popular"],
        ["criticallyAcclaimed", "critically-acclaimed"],
        ["underrated", "underrated"],
        ["bestFrench", "best-french"],
        ["bestAction", "best-action"],
        ["nostalgia90s", "nostalgia-90s"],
        ["sciFi", "sci-fi"],
        ["trueStories", "true-stories"],
      ];

      const fetches = await Promise.all(
        sections.map(([key, endpoint]) =>
          MovieService.getExploreSection(endpoint).then((res) => [key, res])
        )
      );

      const newData = Object.fromEntries(fetches);
      setExploreData(newData);
    };

    fetchSections();
  }, []);

  if (!exploreData) {
    return <Loader text="Loading movie details..." />;
  }
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        {Object.entries(exploreData)
          .filter(([, movies]) => Array.isArray(movies) && movies.length > 0)
          .map(([key, movies]) => (
            <MovieRow key={key} title={toLabel(key)} movies={movies} />
          ))}
      </div>
    </div>
  );
}

function toLabel(key) {
  return (
    {
      recommended: "🎯 Recommanded for you",
      newReleases: "🆕 New Releases",
      mostPopular: "🔥 Most Popular Now",
      criticallyAcclaimed: "🏅 Critically Acclaimed",
      underrated: "💎 Underrated Treasures",
      longWatches: "⏳ Long Watches",
      shortMovies: "⏱️ Short & Sweet",
      nostalgia90s: "📼 90s Nostalgia",
      sciFi: "👽 Sci-Fi Madness",
      trueStories: "📖 Based on True Stories",
      bestFrench: "🥐 Best French Films",
      bestAction: "💥 Best Action Films",
    }[key] || key
  );
}
