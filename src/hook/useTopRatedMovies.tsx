import { MOVIE_API } from "@/services/movieApi";
import type { TopRatedMoviesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseTopRatedMoviesProps {
  page: number;
  region: string;
}

export default function useTopRatedMovies({ page, region }: UseTopRatedMoviesProps) {
  return useQuery(
   {
    queryKey: ["top-rated-movies", page, region],
    queryFn: async () => {
      await delay(1000)
      const response = await MOVIE_API.get<TopRatedMoviesResponse>("/movie/top_rated", {
        params: {
          page,
          region,
        },
      });
      return response.data;
    },
   }
  );
}