import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearch } from "../context/SearchContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { query, setQuery, genre, setGenre } = useSearch();

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedInput(input), 500);
    return () => clearTimeout(timeout);
  }, [input]);

  useEffect(() => {
    setQuery(debouncedInput || "");
  }, [debouncedInput]);

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/genres");
      if (res.status !== 200) throw new Error("Error fetching genres");
      return res.data;
    },
  });

  useEffect(() => {
    console.log("genre: ", genre)
    if ((genre && genre !== "") && location.pathname !== "/search") {
      navigate("/search");
    } else if (genre === "") navigate("/")
  }, [genre]);

  const handleGenreSelect = (genre) => {
    setGenre(genre?.name || "");
    setDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value); // ✅ just update local input
    if (location.pathname !== "/search") {
      navigate("/search");
    } else if (value === "") navigate("/")
  };
  
  useEffect(() => {
    setQuery(debouncedInput || "");
  }, [debouncedInput]);

  useEffect(() => console.log("query", input), [input])

  return (
    <form className="w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
      <div className="flex">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-[#1e293b] border border-gray-600 rounded-s-lg hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-500"
        >
          {genre || "All genres"}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1l4 4 4-4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown List */}
        {dropdownOpen && (
          <div className="absolute z-20 mt-12 bg-[#1e293b] text-white rounded-md shadow-lg w-44 border border-gray-600">
            <ul className="py-2 text-sm max-h-60 overflow-y-auto">
              <li>
                <button
                  type="button"
                  onClick={() => handleGenreSelect(null)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700"
                >
                  All genres
                </button>
              </li>
              {genres?.map((g) => (
                <li key={g.id}>
                  <button
                    type="button"
                    onClick={() => handleGenreSelect(g)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-700"
                  >
                    {g.name}
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
            value={input}
            onChange={handleInputChange}          
            placeholder="Search movies..."
            className="block p-2.5 w-full z-20 text-sm text-white bg-[#1e293b] border border-gray-600 rounded-e-lg placeholder-gray-400
             focus:outline-none focus:ring-0 focus:border-gray-600"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-cyan-600 border border-cyan-600 rounded-e-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
