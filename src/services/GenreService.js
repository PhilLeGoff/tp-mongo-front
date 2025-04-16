import axios from "axios";

const BASE_URL = "http://localhost:5000/genres";

export const GenreService = {
  async getPopularGenres() {
    try {
      const res = await axios.get(`${BASE_URL}/popular`);
      if (!res.ok) throw new Error("Failed to fetch genres");
      return await res.json();
    } catch (err) {
      console.error("GenreService > getPopularGenres:", err);
      return [];
    }
  },
};
