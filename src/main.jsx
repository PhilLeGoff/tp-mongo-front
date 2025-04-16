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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
