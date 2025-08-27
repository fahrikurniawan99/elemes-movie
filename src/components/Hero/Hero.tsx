import { useQueryState } from "@/hook/useQueryState";
import { zIndexs } from "@/utils/constant";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [querySearch, setQuerySearch] = useQueryState<string>("search", "");
  const [search, setSearch] = useState("");
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = () => {
    console.log("Searching for:", search);
    setQuerySearch(search);
  };

  const handleClear = () => {
    setSearch("");
    setQuerySearch("");
  }

  const handleSearchByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setSearch(querySearch);
  }, [querySearch]);

  return (
    <div
      className="h-[80vh] relative w-full"
      style={{
        backgroundImage: `url('/images/movies-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          zIndex: zIndexs.heroContent,
        }}
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col justify-center items-center text-white w-[80%]"
      >
        <h1 className="font-bold text-2xl w-full text-center lg:text-5xl">
          {t("hero_title")}
        </h1>
        <p className="mt-3 text-center w-[90%] lg:text-xl">
          {t("hero_subtitle")}
        </p>
        <input
          className="w-full max-w-[400px] p-2 rounded-md outline-none border border-gray-100 backdrop-blur-sm mt-10"
          placeholder={t("hero_search_placeholder")}
          value={search}
          onKeyDown={handleSearchByEnter}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button
          ref={searchButtonRef}
            onClick={handleSearch}
            className="mx-auto mt-3 py-2 px-5 rounded-md text-white bg-red-700 border border-red-700"
          >
            {t("hero_button_search")}
          </button>
          <button
            onClick={handleClear}
            className="mx-auto mt-3 py-2 px-5 rounded-md text-white border border-white"
          >
            {t("hero_button_clear")}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/80 w-full h-full" />
      <div className="h-[30%] bg-gradient-to-b from-black/90 to-black/0 w-full absolute top-0 left-0" />
      <div className="h-[30%] bg-gradient-to-t from-black/90 to-black/0 w-full absolute bottom-0 left-0" />
    </div>
  );
}
