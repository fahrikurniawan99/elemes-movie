import Hero from "@/components/Hero/Hero";
import SearchResult from "@/components/Search/SearchResult";
import NowPlayingMovie from "@/components/Movie/NowPlayingMovie";
import TopRatedMovies from "@/components/Movie/TopRatedMovies";
import AiringTodayTv from "@/components/TVSeries/AiringTodayTv";
import TopRatedTv from "@/components/TVSeries/TopRatedTv";

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
