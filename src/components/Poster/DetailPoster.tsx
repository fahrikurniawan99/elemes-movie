import useWatchlist from "@/hook/useWatchlist";
import { LucideYoutube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import Container from "../Layout/Container";

export interface DetailPosterProps {
  background_url: string;
  poster_url: string;
  title: string;
  id: number;
  runtime: number;
  release_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  vote_average: number;
  trailerKey?: string | null;
}

export default function DetailPoster({
  background_url,
  poster_url,
  title,
  runtime,
  release_date,
  genres,
  overview,
  vote_average,
  trailerKey,
  id,
}: DetailPosterProps) {
  const { inWatchlist, toggleWatchlist } = useWatchlist(id);
  const { t } = useTranslation();

  return (
    <div className="relative mt-20">
      <div
        className="fixed h-[60vh] md:h-[80vh]  w-full top-0 left-0 "
        style={{
          backgroundImage: `url(${background_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        <div className="h-full w-full bg-gradient-to-t from-black to-black/50" />
      </div>
      <Container className="md:flex gap-5">
        <div className="relative">
          <img
            src={poster_url}
            alt={title}
            className="md:w-full w-[70%] border-red-700 shrink-0"
          />
        </div>
        <div className="md:w-[70%] w-full shrink-0">
          <div className="mt-4 flex gap-2 ">
            <Button
              className=""
              variant={inWatchlist ? "outline" : "secondary"}
              onClick={toggleWatchlist}
            >
              {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </Button>

            {trailerKey && (
              <a
                href={`https://youtube.com/watch?v=${trailerKey}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 md:py-[6px] py-2 bg-red-500 border-red-500 flex items-center gap-2.5 text-sm rounded-md border text-white"
              >
                {t("watch_trailer")} <LucideYoutube className="w-5 aspect-square" />
              </a>
            )}
          </div>
          <div className="md:col-span-2 mt-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 mt-1">
              {release_date} • {runtime ? `${runtime} min` : ""}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {genres?.map((g) => (
                <span key={g.id} className="px-2 py-1 border rounded text-sm">
                  {g.name}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="font-semibold">{t('overview')}</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{overview}</p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="text-lg font-semibold">{t('rating')}</div>
              <div className="text-xl">
                {vote_average ? vote_average.toFixed(1) : "—"} / 10
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
