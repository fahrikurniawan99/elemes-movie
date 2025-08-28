import useTopRatedMovies from "@/hook/useTopRatedMovies";
import { getImageUrl } from "@/utils/tmdb";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import PosterCard from "../Poster/PosterCard";

export default function TopRatedMovies() {
  const { i18n, t } = useTranslation();
  const { data, isLoading } = useTopRatedMovies({ page: 1, region: "" });
  const movies = data?.results || [];

  return (
    <Container as={"section"} className="mt-10 md:mt-36">
      <h1 className="font-bold text-xl sm:text-2xl mb-2 text-yellow-400 border-l-4 pl-3 border-yellow-400">
        {i18n.t("top_rated_movies")}
      </h1>
      {movies.length > 0 ? (
        <HorizontalScroll
          items={movies.map((movie) => (
            <PosterCard id={movie.id} key={movie.id} imgUrl={getImageUrl(movie.poster_path)} title={movie.title} className="w-56 sm:w-60" imgClassName="h-80 sm:h-90"/>
          ))}
        />
      ) : (
        <HorizontalScroll
          items={
            isLoading
              ? Array.from({ length: 15 }).map((_, index) => (
                  <Skeleton className="h-64 w-48 shrink-0"  key={index}/>
                ))
              : [<div className="text-gray-500">{t("no_result")}</div>]
          }
        />
      )}
    </Container>
  );
}
