import { MOVIE_API } from "@/services/movieApi";
import type { SearchTvSeriesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface SearchTvSeriesProps {
  query: string
  page: number
}

export default function useSearchTvSeries({ query, page }: SearchTvSeriesProps) {
  return useQuery(
   {
    queryKey: ["search-tv-series", query, page],
    queryFn: async () => {
      await delay(1000)
      const response = await MOVIE_API.get<SearchTvSeriesResponse>("/search/tv", {
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