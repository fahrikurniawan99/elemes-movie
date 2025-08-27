import useNowPlayingMovies from "@/hook/useNowPlayingMovie";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import MovieCard from "./MovieCard";

export default function NowPlayingMovie() {
  const { i18n } = useTranslation();
  const { data, isLoading } = useNowPlayingMovies({
    page: 1,
    region: "",
    language: i18n.language,
  });
  const movies = data?.results || [];

  return (
    <Container as={"section"} className="mt-10 sm:mt-28">
      <h1 className="font-bold text-lg sm:text-xl mb-2">{i18n.t("now_playing_movie")}</h1>
      {movies.length > 0 ? (
        <HorizontalScroll
          items={movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        />
      ) : (
        <HorizontalScroll
          items={
            isLoading
              ? Array.from({ length: 15 }).map((_, index) => (
                  <Skeleton className="h-64 w-48 shrink-0" />
                ))
              : [<div className="text-gray-500">No movies found</div>]
          }
        />
      )}
    </Container>
  );
}
