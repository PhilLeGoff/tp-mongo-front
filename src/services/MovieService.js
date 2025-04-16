import axios from "axios";

const BASE_URL = "http://localhost:5000/films";

export const MovieService = {
  async getTopRated(limit = 10) {
    try {
      const res = await axios.get(`${BASE_URL}/top-rated`, {
        params: { limit },
      });
      return res.data;
    } catch (err) {
      console.error("MovieService > getTopRated:", err);
      return [];
    }
  },

  async getAnalyticsOverview() {
    try {
      const res = await axios.get(`${BASE_URL}/analytics/overview`);
      console.log("res data", res.data)
      return res.data;
    } catch (err) {
      console.error("MovieService > getAnalyticsOverview:", err);
      return {
        appreciatedGenres: [],
        topMoviesByDecade: [],
        topRated: [],
        surprise: [],
      };
    }
  },

  async getHottest(limit = 20) {
    try {
      const res = await axios.get(`${BASE_URL}/hottest`, {
        params: { limit },
      });
      return res.data;
    } catch (err) {
      console.error("MovieService > getHottest:", err);
      return [];
    }
  },

  async getExploreSection(endpoint) {
    try {
      const res = await axios.get(`${BASE_URL}/${endpoint}`);
      return res.data;
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
      return [];
    }
  }
};


