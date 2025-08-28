import cn from "@/utils/cn";
import { Link, useNavigate } from "react-router-dom";

export interface PosterCardProps {
  title: string;
  imgUrl: string;
  className?: string;
  imgClassName?: string;
  type?: "movie" | "tv";
  id: number
}

export default function PosterCard({
  title,
  imgUrl,
  className,
  imgClassName,
  type = "movie",
  id,
}: PosterCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <div
      className={cn(
        "snap-start flex-shrink-0 w-40 h-fit text-white rounded-lg overflow-hidden shadow relative",
        className
      )}
    >
      <div className="relative group">
        <img
          src={imgUrl}
          alt={title}
          className={cn("w-full object-cover h-56", imgClassName)}
        />
        <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 backdrop-blur-xs transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handleClick}
            className="bg-white text-black p-2 rounded-full text-xs px-5 cursor-pointer"
          >
            Watch Now
          </button>
        </div>
      </div>
      <Link
        to={`/${type}/${id}`}
        className="p-2 text-sm font-semibold text-white
      "
      >
        <p className="line-clamp-2">{title}</p>
      </Link>
    </div>
  );
}
