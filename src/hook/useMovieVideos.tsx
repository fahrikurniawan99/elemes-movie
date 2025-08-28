import { MOVIE_API } from "@/services/movieApi";
import type { MovieVideosResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseMovieVideosProps {
  language: string;
  id: number;
}

export default function useMovieVideos({ language, id }: UseMovieVideosProps) {
  return useQuery({
    queryKey: ["movies-videos", language, id],
    queryFn: async () => {
      delay(1000);
      MOVIE_API.get(`/movie/${id}/videos?language=en-US`);
      const response = await MOVIE_API.get<MovieVideosResponse>(`/movie/${id}/videos`, {
        params: {
          language,
        },
      });
      return response.data;
    },
  });
}
