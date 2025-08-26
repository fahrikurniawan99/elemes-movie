import type {
  AiringTodayTvResponse,
  NowPlayingMoviesResponse,
  TopRatedMoviesResponse,
  TopRatedTvResponse,
} from "@/types/api";
import { movieApi } from "./api";

export const getTopRatedMovies = ({
  page,
  region,
}: {
  page: number;
  region: string;
}) =>
  movieApi.get<TopRatedMoviesResponse>(`/movie/top_rated`, {
    params: {
      page,
      region,
    },
  });

export const getNowPlayingMovies = ({
  page,
  region,
  language,
}: {
  page: number;
  region: string;
  language: string;
}) =>
  movieApi.get<NowPlayingMoviesResponse>(`/movie/now_playing`, {
    params: {
      page,
      region,
      language,
    },
  });

export const getTopRatedTv = ({
  page,
  language,
}: {
  page: number;
  language: string;
}) =>
  movieApi.get<TopRatedTvResponse>(`/tv/top_rated`, {
    params: {
      page,
      language,
    },
  });

export const getAiringTodayTv = ({
  page,
  language,
}: {
  page: number;
  language: string;
}) =>
  movieApi.get<AiringTodayTvResponse>(`/tv/airing_today`, {
    params: {
      page,
      language,
    },
  });
