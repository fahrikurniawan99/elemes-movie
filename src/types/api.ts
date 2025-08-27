import type { MovieList } from "./movie"

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

export type TopRatedTvResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type AiringTodayTvResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type SearchMovieResponse = {
    page: number,
    results: MovieList[],
    total_pages: number,
    total_results: number
}

export type GuestSessionResponse = {
    success: boolean,
    guest_session_id: string
    expires_at: string
}