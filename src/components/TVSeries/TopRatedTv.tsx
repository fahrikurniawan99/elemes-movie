import useTopRatedTv from "@/hook/useTopRatedTv";
import { getImageUrl } from "@/utils/tmdb";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import PosterCard from "../Poster/PosterCard";

export default function TopRatedTv() {
  const { i18n, t } = useTranslation();
  const { data, isLoading } = useTopRatedTv({
    page: 1,
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });
  const tvSeries = data?.results || [];

  return (
    <Container as={"section"} className="sm:mt-28 mt-10">
      <h1 className="font-bold text-xl sm:text-2xl mb-2 text-yellow-400 border-l-4 pl-3 border-yellow-400">
        {i18n.t("top_rated_tv")}
      </h1>
      {tvSeries.length > 0 ? (
        <HorizontalScroll
          items={tvSeries.map((series) => (
            <PosterCard
              type="tv"
              id={series.id}
              key={series.id}
              imgUrl={getImageUrl(series.poster_path)}
              title={series.name}
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
                  <Skeleton className="h-64 w-48 shrink-0" key={index} />
                ))
              : [<div className="text-gray-500">{t("no_result")}</div>]
          }
        />
      )}
    </Container>
  );
}
