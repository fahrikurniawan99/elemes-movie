import type { MovieList } from "@/types/movie";
import cn from "@/utils/cn";
import { getImageUrl } from "@/utils/tmdb";

export interface MovieCardProps {
  movie: MovieList;
  className?: string;
  imgClassName?: string;
}

export default function MovieCard({
  movie,
  className,
  imgClassName,
}: MovieCardProps) {
  return (
    <div
      className={cn(
        "snap-start flex-shrink-0 w-40 h-fit text-white rounded-lg overflow-hidden shadow",
        className
      )}
    >
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className={cn("w-full object-cover h-56", imgClassName)}
      />
      <div
        className="p-2 text-sm font-semibold text-white
      "
      >
        {movie.title ?? movie.name}
      </div>
    </div>
  );
}
