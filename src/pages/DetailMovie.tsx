import Container from "@/components/Layout/Container";
import Skeleton from "@/components/Loading/Skeleton";
import DetailPoster from "@/components/Poster/DetailPoster";
import useDetailMovie from "@/hook/useDetailMovie";
import useMovieVideos from "@/hook/useMovieVideos";
import { getImageUrl } from "@/utils/tmdb";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export default function DetailMoviePage() {
  const { id } = useParams<{ id: string }>();
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const { i18n, t } = useTranslation();

  const detailMovie = useDetailMovie({
    id: Number(id),
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });
  const movieVideo = useMovieVideos({
    id: Number(id),
    language: i18n.language === "id" ? "id-ID" : "en-US",
  });

  useEffect(() => {
    if (!id) return;
    const youtubeTrailer = movieVideo.data?.results.find(
      (r: any) => r.site === "YouTube" && r.type === "Trailer"
    );
    if (youtubeTrailer) setTrailerKey(youtubeTrailer.key);

    return () => {};
  }, [id, movieVideo?.data]);

  if (detailMovie?.isLoading) {
    return (
      <Container className="">
        <div className="animate-pulse flex mt-20 gap-5">
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

  if (!detailMovie?.data) {
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
    <DetailPoster
      background_url={
        detailMovie?.data.backdrop_path
          ? getImageUrl(detailMovie?.data.backdrop_path)
          : ""
      }
      poster_url={
        detailMovie?.data.poster_path
          ? getImageUrl(detailMovie?.data.poster_path)
          : ""
      }
      title={detailMovie?.data.title || ""}
      id={parseInt(id || "0")}
      runtime={detailMovie?.data.runtime || 0}
      release_date={detailMovie?.data.release_date || ""}
      genres={detailMovie?.data.genres || []}
      overview={detailMovie?.data.overview || ""}
      vote_average={detailMovie?.data.vote_average || 0}
      trailerKey={trailerKey}
    />
  );
}
