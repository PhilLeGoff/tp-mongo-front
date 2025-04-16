import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} 🎬 Movie Explorer. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://developer.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            TMDB API
          </a>
          <a
            href="mailto:contact@movieexplorer.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
