import { useLanguageStore } from "@/store/useLanguageStore";
import GeneralDropdown from "../ui/dropdown";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { itemClass } from ".";
import { useMazeStore } from "@/store/useMazeStore";
import { algorithms } from "@/utils/choices";

export default function AlgorithmSelector() {
  const { selectedLanguage } = useLanguageStore();
  const { setAlgorithm } = useMazeStore();

  return (
    <GeneralDropdown
      buttonLabel={<p>{selectedLanguage.texts.algorithmsButtonText}</p>}
    >
      {algorithms.map((alg, index) => (
        <DropdownMenuItem
          className={itemClass}
          key={index}
          onClick={() => setAlgorithm(alg)}
        >
          {alg.name}
        </DropdownMenuItem>
      ))}
    </GeneralDropdown>
  );
}
