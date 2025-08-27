import { MOVIE_API } from "@/services/movieApi";
import type { NowPlayingMoviesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseNowPlayingMoviesProps {
  page: number;
  region: string;
  language: string;
}

export default function useNowPlayingMovies({
  language,
  page,
  region,
}: UseNowPlayingMoviesProps) {
  return useQuery({
    queryKey: ["now-playing-movies", page, region, language],
    queryFn: async () => {
      await delay(1000);
      const response = await MOVIE_API.get<NowPlayingMoviesResponse>(
        "/movie/now_playing",
        {
          params: {
            page,
            region,
            language,
          },
        }
      );
      return response.data;
    },
  });
}
