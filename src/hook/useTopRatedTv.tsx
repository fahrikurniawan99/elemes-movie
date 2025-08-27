import { MOVIE_API } from "@/services/movieApi";
import type { TopRatedTvResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseTopRatedTvProps {
  page: number;
  language: string;
}

export default function useTopRatedTv({
  page,
  language,
}: UseTopRatedTvProps) {
  return useQuery({
    queryKey: ["top-rated-tv", page, language],
    queryFn: async () => {
      delay(1000)
      const response = await MOVIE_API.get<TopRatedTvResponse>("/tv/top_rated", {
        params: {
          page,
          language,
        },
      });
      return response.data;
    },
  });
}
