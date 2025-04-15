import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkBase =
  "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-150 no-underline text-black visited:text-black";

  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${linkBase} text-red-600 font-semibold`
      : `${linkBase} text-black hover:text-red-500`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-black">🎬 Movie Explorer</h1>
        <nav className="flex flex-wrap gap-4 mt-2 sm:mt-0">
          <NavLink to="/" className={getLinkClass}>
            Search
          </NavLink>
          <NavLink to="/analytics" className={getLinkClass}>
            Analytics
          </NavLink>
          <NavLink to="/rankings" className={getLinkClass}>
            Rankings
          </NavLink>
          <NavLink to="/details" className={getLinkClass}>
            Movie Details
          </NavLink>
          <NavLink to="/recommendations" className={getLinkClass}>
            Recommendations
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
