import { useEffect, useState } from "react";

export default function useWatchlist(id: number) {
  const [inWatchlist, setInWatchlist] = useState(false);
  function toggleWatchlist() {
    if (!id) return;
    const key = "tmdb_watchlist_v1";
    const parsed: number[] = JSON.parse(localStorage.getItem(key) || "[]");
    const movieIdNum = Number(id);
    if (parsed.includes(movieIdNum)) {
      const filtered = parsed.filter((x) => x !== movieIdNum);
      localStorage.setItem(key, JSON.stringify(filtered));
      setInWatchlist(false);
    } else {
      parsed.push(movieIdNum);
      localStorage.setItem(key, JSON.stringify(parsed));
      setInWatchlist(true);
    }
  }

  useEffect(() => {
    if (!id) return;
    const wl = JSON.parse(localStorage.getItem("tmdb_watchlist_v1") || "[]");
    setInWatchlist(wl.includes(Number(id)));
  }, []);

  return { inWatchlist, toggleWatchlist };
}
