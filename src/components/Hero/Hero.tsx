import { zIndexs } from "@/utils/constant";
import SearchBar from "../Search/SearchBar";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
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
        <SearchBar />
      </div>
      <div className="absolute inset-0 bg-black/80 w-full h-full" />
      <div className="h-[30%] bg-gradient-to-b from-black/90 to-black/0 w-full absolute top-0 left-0" />
      <div className="h-[30%] bg-gradient-to-t from-black/90 to-black/0 w-full absolute bottom-0 left-0" />
    </div>
  );
}
