import Hero from "@/components/Hero/Hero";
import AiringTodayTv from "@/components/Movie/AiringTodayTv";
import NowPlayingMovie from "@/components/Movie/NowPlayingMovie";
import SearchResult from "@/components/Movie/SearchResult";
import TopRatedMovies from "@/components/Movie/TopRatedMovies";
import TopRatedTv from "@/components/Movie/TopRatedTv";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchResult />
      <TopRatedMovies />
      <NowPlayingMovie />
      <TopRatedTv />
      <AiringTodayTv />
    </>
  );
}
