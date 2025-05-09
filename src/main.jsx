import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Analytics from "./pages/Analytics.jsx";
import Rankings from "./pages/Rankings.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Recommendations from "./pages/Recommendations.jsx";
import Header from "./components/Header.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Explore from "./pages/Explore.jsx";
import ActorDetails from "./pages/ActorDetails.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./context/SearchContext.jsx";
import SearchResults from "./pages/SearchResults.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/actor/:actorId" element={<ActorDetails />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
