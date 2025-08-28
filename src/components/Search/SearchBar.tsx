import { useQueryState } from "@/hook/useQueryState";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";

export default function SearchBar() {
  const { t } = useTranslation();
  const [querySearch, setQuerySearch] = useQueryState<string>("search", "");
  const [search, setSearch] = useState("");
  const [querySearchType, setQuerySearchType] = useQueryState<string>(
    "searchType",
    ""
  );
  const [searchType, setSearchType] = useState("");
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = () => {
    console.log("Searching for:", search);
    setQuerySearch(search);
    setQuerySearchType(searchType);
  };

  const handleClear = () => {
    setSearch("");
    setQuerySearch("");
    setSearchType("movie");
    setQuerySearchType("");
  };

  const handleSearchByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setSearch(querySearch);
    setSearchType(querySearchType || "movie");
  }, [querySearch]);
  return (
    <>
      <div className="w-[90%] justify-center flex mt-10 flex-wrap gap-3 md:mb-5 mb-10">
        <input
          className="w-full max-w-[500px] p-2 rounded-md outline-none border border-gray-100 backdrop-blur-sm"
          placeholder={t("hero_search_placeholder")}
          value={search}
          onKeyDown={handleSearchByEnter}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-100 backdrop-blur-sm px-3 rounded-md h-full max-h-[40px] flex items-center justify-center *:text-gray-800 w-full max-w-[110px] text-center"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="movie">Movie</option>
          <option value="tv">TV Series</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <Button
          ref={searchButtonRef}
          onClick={handleSearch}
          variant="destructive"
        >
          {t("hero_button_search")}
        </Button>
        <Button onClick={handleClear} variant="outline" className="">
          {t("hero_button_clear")}
        </Button>
      </div>
    </>
  );
}
