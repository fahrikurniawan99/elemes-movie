import useAiringToday from "@/hook/useAiringTodayTv";
import { getImageUrl } from "@/utils/tmdb";
import { useTranslation } from "react-i18next";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Container from "../Layout/Container";
import Skeleton from "../Loading/Skeleton";
import PosterCard from "../Poster/PosterCard";

export default function AiringTodayTv() {
  const { i18n, t } = useTranslation();
  const { data, isLoading } = useAiringToday({
    page: 1,
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });
  const results = data?.results || [];

  return (
    <Container as={"section"} className="mt-10 sm:mt-28">
      <h1 className="font-bold text-lg sm:text-xl mb-2">
        {i18n.t("airing_today_tv")}
      </h1>
      {results.length > 0 ? (
        <HorizontalScroll
          items={results.map((result) => (
            <PosterCard
              id={result.id}
              type="tv"
              key={result.id}
              title={result.name}
              imgUrl={getImageUrl(result.poster_path)}
              className=""
              imgClassName=""
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
