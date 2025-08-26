import axios from "axios";

export const movieApi = axios.create({
  baseURL: process.env.TMDB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});