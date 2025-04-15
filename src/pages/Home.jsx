import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import AnalyticsPanel from "../components/AnalyticsPanel";
import TopLists from "../components/TopLists";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🎬 Movie Explorer</h1>
      <SearchBar />
      <AnalyticsPanel />
      <TopLists />
      <MovieGrid />
    </div>
  );
}