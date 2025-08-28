import { MOVIE_API } from "@/services/movieApi";
import type { DetailMovieResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseTopRatedTvProps {
  id: number;
  language: string;
}

export default function useDetailMovie({ id, language }: UseTopRatedTvProps) {
  return useQuery({
    queryKey: ["detail-movie", id],
    queryFn: async () => {
      delay(1000);
      const response = await MOVIE_API.get<DetailMovieResponse>(
        `/movie/${id}`,
        {
          params: {
            language
          },
        }
      );
      return response.data;
    },
  });
}
