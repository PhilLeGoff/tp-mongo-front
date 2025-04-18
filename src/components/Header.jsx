import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const navigate = useNavigate()
  const linkBase =
    "px-4 py-1 rounded-full font-medium text-sm transition-colors duration-150 backdrop-blur-sm";

  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${linkBase} bg-cyan-500/90 text-white shadow-md`
      : `${linkBase} text-gray-200 hover:text-white hover:bg-cyan-500/30`;

  return (
    <header className="bg-gradient-to-r from-[#0f172a] via-[#112b3c] to-[#0f172a] shadow-lg border-b-2 border-cyan-400 sticky top-0 z-50 px-4">
      <div className="max-full mx-auto py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Logo à gauche */}
        <div className="flex justify-center">
          <h1 className="text-2xl hover:cursor-pointer font-bold text-cyan-400 hover:text-cyan-700 tracking-wide drop-shadow" onClick={() => navigate("/")}>
            🎬 Movie Explorer
          </h1>
        </div>

        {/* SearchBar au centre */}
        <div className="flex justify-center">
          <SearchBar />
        </div>

        {/* Navigation à droite */}
        <nav className="flex justify-center flex-wrap gap-3 mt-2 sm:mt-0">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={getLinkClass}>
            Explore
          </NavLink>
          <NavLink to="/analytics" className={getLinkClass}>
            Analytics
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
