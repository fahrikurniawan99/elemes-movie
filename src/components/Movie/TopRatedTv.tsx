import useTopRatedTv from "@/hook/useTopRatedTv";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import MovieCard from "./MovieCard";

export default function TopRatedTv() {
  const { i18n } = useTranslation();
  const { data, isLoading } = useTopRatedTv({
    page: 1,
    language: i18n.language,
  });
  const movies = data?.results || [];

  return (
    <Container as={"section"} className="sm:mt-28 mt-10">
      <h1 className="font-bold text-xl sm:text-2xl mb-2 text-yellow-400 border-l-4 pl-3 border-yellow-400">
        {i18n.t("top_rated_tv")}
      </h1>
      {movies.length > 0 ? (
        <HorizontalScroll
          items={movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              className="w-56 sm:w-60"
              imgClassName="h-80 sm:h-90"
            />
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
