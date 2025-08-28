import { MOVIE_API } from "@/services/movieApi";
import type { TVSeriesVideosResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseTVSeriesVideosProps {
  language: string;
  id: number;
}

export default function useTVSeriesVideos({ language, id }: UseTVSeriesVideosProps) {
  return useQuery({
    queryKey: ["tv-series-videos", language, id],
    queryFn: async () => {
      delay(1000);
      MOVIE_API.get(`/tv/${id}/videos?language=en-US`);
      const response = await MOVIE_API.get<TVSeriesVideosResponse>(`/tv/${id}/videos`, {
        params: {
          language,
        },
      });
      return response.data;
    },
  });
}
