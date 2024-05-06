import { languageOptions } from "@/languages/choices";
import { useLanguageStore } from "@/store/useLanguageStore";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import USFlag from "../../../public/us.svg";
import BRFlag from "../../../public/br.svg";
import Image from "next/image";
import GeneralDropdown from "../ui/dropdown";

const languageSelectorMap = {
  en: USFlag,
  "pt-BR": BRFlag,
};

export default function LanguageSelector() {
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  return (
    <GeneralDropdown
      buttonLabel={
        <Image
          className="w-6"
          src={languageSelectorMap[selectedLanguage.title]}
          alt="Contry flag"
        />
      }
    >
      {languageOptions.map((option, index) => (
        <DropdownMenu.Item
          className="rounded-[3px] flex items-center justify-start gap-2 p-2 outline-none data-[disabled]:pointer-events-none cursor-pointer hover:bg-zinc-200"
          key={index}
          onClick={() => setSelectedLanguage(option)}
        >
          <Image
            className="w-6"
            src={languageSelectorMap[option.title]}
            alt="Contry flag"
          />
        </DropdownMenu.Item>
      ))}
    </GeneralDropdown>
  );
}
