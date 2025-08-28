import { MOVIE_API } from "@/services/movieApi";
import type { AiringTodayTvSeriesResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseAiringTodayTvProps {
  page: number;
  language: string;
}

export default function useAiringToday({
  page,
  language,
}: UseAiringTodayTvProps) {
  return useQuery({
    queryKey: ["airing-today-tv", page, language],
    queryFn: async () => {
      await delay(1000)
      const response = await MOVIE_API.get<AiringTodayTvSeriesResponse>(
        "/tv/airing_today",
        {
          params: {
            page,
            language,
          },
        }
      );
      return response.data;
    },
  });
}
