import React, { useEffect, useState } from "react";
import { MovieService } from "../services/MovieService";
import "swiper/css";
import MovieRow from "../components/MovieRow";

export default function Explore() {
  const [exploreData, setExploreData] = useState({});

  useEffect(() => {
    const fetchSections = async () => {
      const sections = [
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

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        {Object.entries(exploreData).map(([key, movies]) => (
          <MovieRow key={key} title={toLabel(key)} movies={movies} />
        ))}
      </div>
    </div>
  );
}

function toLabel(key) {
  return (
    {
      newReleases: "🆕 Upcomming Releases",
      mostPopular: "🔥 Most Popular Now",
      criticallyAcclaimed: "🏅 Critically Acclaimed",
      underrated: "💎 Underrated Treasures",
      bestFrench: "🇫🇷 Best French Films",
    bestAction: "💥 Top Action Picks",
      nostalgia90s: "📼 90s Nostalgia",
      sciFi: "👽 Sci-Fi Madness",
      trueStories: "📖 Based on True Stories",
    }[key] || key
  );
}
