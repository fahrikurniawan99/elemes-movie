import { useQueryState } from "@/hook/useQueryState";
import useSearchMovie from "@/hook/useSearchMovie";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import MovieCard from "./MovieCard";

export default function SearchResult() {
  const { i18n } = useTranslation();
  const [querySearch] = useQueryState("search", "");
  const { isLoading, data } = useSearchMovie({ query: querySearch , page: 1 });
  const movies = data?.results || [];

  if (!querySearch) return null;

  return (
    <Container as={"section"} className="mb-20 sm:mb-32">
      <h1 className="font-bold text-md sm:text-xl mb-2 ">
        {i18n.t("search_result")} ({movies.length})
      </h1>
      {movies.length > 0 ? (
        <HorizontalScroll
          items={movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              className="w-56 h-80 sm:w-60 sm:h-90"
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
