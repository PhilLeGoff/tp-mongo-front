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
      console.log("res data", res.data);
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
  },

  async getMovieDetails(id) {
    try {
      const res = await axios.get(`http://localhost:5000/films/details/${id}`);
      return res.data;
    } catch (err) {
      console.error("MovieService > getMovieDetails:", err);
      return null;
    }
  },
  

  async getActorDetails(actorId) {
    try {
      const res = await axios.get(`http://localhost:5000/actors/${actorId}`);
      console.log("res:", res)
      return res.data;
    } catch (error) {
      console.error("Error fetching actor details:", error);
      return null;
    }
  },

  async updateDB() {
    try {
      const res = await axios.get("http://localhost:5000/films/update-latest");
      console.log("res:", res)
      return res.data;
    } catch (error) {
      console.error("Error updating db", error);
      return null
    }
  }
};
