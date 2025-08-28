import Hero from "@/components/Hero/Hero";
import NowPlayingMovie from "@/components/Movie/NowPlayingMovie";
import TopRatedMovies from "@/components/Movie/TopRatedMovies";
import SearchResult from "@/components/Search/SearchResult";
import AiringTodayTv from "@/components/TVSeries/AiringTodayTv";
import TopRatedTv from "@/components/TVSeries/TopRatedTv";
import {Helmet} from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Elemes - Home</title>
        <meta name="description" content="Welcome to the home page" />
      </Helmet>
      <Hero />
      <SearchResult />
      <TopRatedMovies />
      <NowPlayingMovie />
      <TopRatedTv />
      <AiringTodayTv />
    </>
  );
}
