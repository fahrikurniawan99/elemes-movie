import { useQueryState } from "@/hook/useQueryState";
import useSearchMovie from "@/hook/useSearchMovie";
import useSearchTvSeries from "@/hook/useSearchTvSeries";
import { getImageUrl } from "@/utils/tmdb";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import PosterCard from "../Poster/PosterCard";

export default function SearchResult() {
  const { i18n, t } = useTranslation();
  const [querySearch] = useQueryState("search", "");
  const [querySearchType] = useQueryState("searchType", "movie");
  const {
    isLoading: isLoadingMovie,
    data: dataMovie,
    refetch: refetchMovie,
  } = useSearchMovie({ query: querySearch, page: 1 });
  const {
    isLoading: isLoadingTvSeries,
    data: dataTvSeries,
    refetch: refetchTvSeries,
  } = useSearchTvSeries({ query: querySearch, page: 1 });
  const isMovieSearch = querySearchType === "movie";
  const checkResult = isMovieSearch
    ? dataMovie?.results ?? []
    : dataTvSeries?.results ?? [];

  useEffect(() => {
    if (querySearch) {
      if (isMovieSearch) {
        refetchMovie();
      } else {
        refetchTvSeries();
      }
    }
  }, [querySearch, querySearchType]);

  if (!querySearch) return null;

  return (
    <Container as={"section"} className="mb-20 sm:mb-32">
      <h1 className="font-bold text-md sm:text-xl mb-2 ">
        {i18n.t("search_result")} ({checkResult.length})
      </h1>
      {checkResult.length > 0 ? (
        isMovieSearch ? (
          <HorizontalScroll
            items={
              dataMovie?.results.map((result) => (
                <PosterCard
                  id={result.id}
                  key={result.id}
                  imgUrl={getImageUrl(result.poster_path)}
                  title={result.title}
                  imgClassName={"h-80 sm:h-90"}
                  className="w-56 sm:w-60"
                />
              )) ?? []
            }
          />
        ) : (
          <HorizontalScroll
            items={
              dataTvSeries?.results.map((result) => (
                <PosterCard
                  id={result.id}
                  key={result.id}
                  imgUrl={getImageUrl(result.poster_path)}
                  title={result.name}
                  imgClassName={"h-80 sm:h-90"}
                  className="w-56 sm:w-60"
                />
              )) ?? []
            }
          />
        )
      ) : (
        <HorizontalScroll
          items={
            isLoadingMovie || isLoadingTvSeries
              ? Array.from({ length: 15 }).map((_, index) => (
                  <Skeleton className="h-64 w-48 shrink-0" key={index} />
                ))
              : [<div className="text-gray-500">{t("no_result")}</div>]
          }
        />
      )}
    </Container>
  );
}
