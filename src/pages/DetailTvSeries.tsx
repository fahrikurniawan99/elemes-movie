import Container from "@/components/Layout/Container";
import Skeleton from "@/components/Loading/Skeleton";
import DetailPoster from "@/components/Poster/DetailPoster";
import useDetailTvSeries from "@/hook/useDetailTvSeries";
import useTVSeriesVideos from "@/hook/useTvSeriesVideos";
import { getImageUrl } from "@/utils/tmdb";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export default function DetailTVSeriesPage() {
  const { id } = useParams<{ id: string }>();
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { i18n, t } = useTranslation();

  const detailTVSeries = useDetailTvSeries({
    id: Number(id),
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });
  const tvSeriesVideo = useTVSeriesVideos({
    id: Number(id),
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });

  useEffect(() => {
    if (!id) return;
    const youtubeTrailer = tvSeriesVideo.data?.results.find(
      (r: any) => r.site === "YouTube" && r.type === "Trailer"
    );
    if (youtubeTrailer) setTrailerKey(youtubeTrailer.key);

    return () => {};
  }, [id, tvSeriesVideo?.data]);

  if (detailTVSeries?.isLoading) {
    return (
      <Container className="">
        <div className="animate-pulse md:flex mt-20 gap-5">
          <Skeleton className="w-full md:h-96 h-64 mb-4" />
          <div className="w-[80%] shrink-0">
            <Skeleton className="h-6   w-3/4 mb-2" />
            <Skeleton className="h-4  w-1/2 mb-2" />
            <Skeleton className="h-24 md:h-32 " />
          </div>
        </div>
      </Container>
    );
  }

  if (!detailTVSeries?.data) {
    return (
      <div className="p-6">
        <p>{t("no_result")}</p>
        <Link to="/" className="text-blue-600 underline">
          {t("back_home")}
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Elemes - TV Series</title>
        <meta name="description" content="Welcome to the TV Series page" />
      </Helmet>
      <DetailPoster
        background_url={
          detailTVSeries?.data.backdrop_path
            ? getImageUrl(detailTVSeries?.data.backdrop_path)
            : ""
        }
        poster_url={
          detailTVSeries?.data.poster_path
            ? getImageUrl(detailTVSeries?.data.poster_path)
            : ""
        }
        title={detailTVSeries?.data.name || ""}
        id={parseInt(id || "0")}
        runtime={
          detailTVSeries?.data.episode_run_time.reduce((a, b) => a + b, 0) || 0
        }
        release_date={detailTVSeries?.data.first_air_date || ""}
        genres={detailTVSeries?.data.genres || []}
        overview={detailTVSeries?.data.overview || ""}
        vote_average={detailTVSeries?.data.vote_average || 0}
        trailerKey={trailerKey}
      />
    </>
  );
}
