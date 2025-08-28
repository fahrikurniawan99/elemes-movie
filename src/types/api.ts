import type { MovieDetail, MovieList, MovieVideo } from "./movie"
import type { TVSeriesDetail, TVSeriesList, TVSeriesVideo } from "./tvSeries"

export type TopRatedMoviesResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type NowPlayingMoviesResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type TopRatedTvSeriesResponse = {
    page: number,
    results: TVSeriesList[],
    total_pages: number,
    total_results: number
}

export type AiringTodayTvSeriesResponse = {
    page: number,
    results: TVSeriesList[],
    total_pages: number,
    total_results: number
}

export type SearchMovieResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type SearchTvSeriesResponse = {
    page: number,
    results: TVSeriesList[],
    total_pages: number,
    total_results: number
}

export type GuestSessionResponse = {
    success: boolean,
    guest_session_id: string
    expires_at: string
}

export type DetailMovieResponse = MovieDetail
export type DetailTvSeriesResponse = TVSeriesDetail

export type MovieVideosResponse = {
    id: number;
    results: MovieVideo[];
}

export type TVSeriesVideosResponse = {
    id: number;
    results: TVSeriesVideo[];
}