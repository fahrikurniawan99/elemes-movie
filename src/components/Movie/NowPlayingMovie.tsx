import useNowPlayingMovies from "@/hook/useNowPlayingMovie";
import { getImageUrl } from "@/utils/tmdb";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import PosterCard from "../Poster/PosterCard";

export default function NowPlayingMovie() {
  const { i18n, t } = useTranslation();
  const { data, isLoading } = useNowPlayingMovies({
    page: 1,
    region: "",
    language: i18n.language === 'id' ? 'id-ID' : 'en-US',
  });
  const movies = data?.results || [];

  return (
    <Container as={"section"} className="mt-10 sm:mt-28">
      <h1 className="font-bold text-lg sm:text-xl mb-2">{i18n.t("now_playing_movie")}</h1>
      {movies.length > 0 ? (
        <HorizontalScroll
          items={movies.map((movie) => (
            <PosterCard id={movie.id} key={movie.id} title={movie.title} imgUrl={getImageUrl(movie.poster_path)} />
          ))}
        />
      ) : (
        <HorizontalScroll
          items={
            isLoading
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
