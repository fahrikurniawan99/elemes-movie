import { MOVIE_API } from "@/services/movieApi";
import type { DetailTvSeriesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseDetailTVSeriesProps {
  id: number;
  language: string;
}

export default function useDetailTvSeries({ id, language }: UseDetailTVSeriesProps) {
  return useQuery({
    queryKey: ["detail-tv-series", id],
    queryFn: async () => {
      delay(1000);
      const response = await MOVIE_API.get<DetailTvSeriesResponse>(
        `/tv/${id}`,
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
