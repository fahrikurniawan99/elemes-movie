import cn from "@/utils/cn";
import { useTranslation } from "react-i18next";

export interface LanguageProps {
  className?: string;
}

export default function Language(props: LanguageProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      className={cn("border border-gray-300 rounded-md text-white w-fit", props.className)}
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={i18n.language}
      value={i18n.language}
    >
      <option className="text-gray-800 w-fit" value="id">ID</option>
      <option className="text-gray-800 w-fit" value="en">EN</option>
    </select>
  );
}
