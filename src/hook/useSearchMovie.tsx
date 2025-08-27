import { MOVIE_API } from "@/services/movieApi";
import type { TopRatedMoviesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface useSearchMovieProps {
  query: string
  page: number
}

export default function useSearchMovie({ query, page }: useSearchMovieProps) {
  return useQuery(
   {
    queryKey: ["search-movie", query, page],
    queryFn: async () => {
      await delay(1000)
      const response = await MOVIE_API.get<TopRatedMoviesResponse>("/search/movie", {
        params: {
            query,
            page,
        },
      });
      return response.data;
    },
    enabled: !!query, 
   }
  );
}