import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/utils/tmdb";
import axios from "axios";
  
export const MOVIE_API = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
});