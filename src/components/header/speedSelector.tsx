import { useLanguageStore } from "@/store/useLanguageStore";
import GeneralDropdown from "../ui/dropdown";
import { useMazeStore } from "@/store/useMazeStore";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { itemClass } from ".";
import clsx from "clsx";

export interface SpeedOption {
  title: string;
  portugueseTitle: string;
  ms: number;
}

export const speedOptions: SpeedOption[] = [
  {
    title: "Fast",
    portugueseTitle: "Rápido",
    ms: 20,
  },
  {
    title: "Medium",
    portugueseTitle: "Médio",
    ms: 50,
  },
  {
    title: "Slow",
    portugueseTitle: "Devagar",
    ms: 80,
  },
];

export default function SpeedSelector() {
  const { selectedLanguage } = useLanguageStore();
  const { speed, setSpeed } = useMazeStore();

  return (
    <GeneralDropdown buttonLabel={<p>{selectedLanguage.texts.speedButon}</p>}>
      {speedOptions.map((option, index) => (
        <DropdownMenuItem
          className={clsx(itemClass, {
            "bg-zinc-500 text-white hover:bg-zinc-600 hover:text-zinc-200":
              option.title === speed.title,
          })}
          key={index}
          onClick={() => setSpeed(option)}
        >
          {selectedLanguage.title === "en"
            ? option.title
            : option.portugueseTitle}
        </DropdownMenuItem>
      ))}
    </GeneralDropdown>
  );
}
