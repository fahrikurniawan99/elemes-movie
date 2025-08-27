export const TMDB_IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const TMDB_API_BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL;
export const getImageUrl = (path: string) => `${TMDB_IMAGE_BASE_URL}${path}`;