import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearch } from "../context/SearchContext"; // ajuste le chemin
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar() {
  // const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { query, setQuery, genre, setGenre } = useSearch();

  // Debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);
    return () => clearTimeout(timeout);
  }, [input]);

  // Set query and navigate when debounce triggers
  useEffect(() => {
    if (debouncedInput) {
      setQuery(debouncedInput);
    } else {
      setQuery(""); // Reset query si vide
    }
  }, [debouncedInput]);

  // Debounce pour limiter les appels
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

  // Fetch genres
  const { data: genres } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/genres');
      if (res.status !== 200) {
        console.log("Error fetching genres");
        throw new Error('Error fetching genres');
      }
      console.log(res.data);
      return res.data;
    },
  });

  const handleGenreSelect = (genre) => {
    if (!genre || !genre.name) {
      setGenre("");
    } else {
      setGenre(genre.name);
    }
    setDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Only navigate if not already on Home
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
      <form
           className="max-w-lg mx-auto"
           onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex">
           {/* Dropdown */}
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center
            text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4
            focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600
            dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          >
            {genre || "All genres"}
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {dropdownOpen && (
          <div className="absolute z-10 mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 max-h-60 overflow-y-auto">
              <li>
                <button type="button"
                        onClick={() => handleGenreSelect(null)}
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  All genres
                </button>
              </li>
              {genres?.map((genre) => (
                <li key={genre.id}>
                  <button type="button"
                          onClick={() => handleGenreSelect(genre)}
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="search"
              value={query}
              onChange={handleInputChange}
              placeholder="Search movies..."
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg
              border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:border-blue-500"
            />
            <button type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>

        </div>
    </form>
  );
}
