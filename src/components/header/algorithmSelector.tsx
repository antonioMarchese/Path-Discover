import { useLanguageStore } from "@/store/useLanguageStore";
import GeneralDropdown from "../ui/dropdown";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { itemClass } from ".";
import { useMazeStore } from "@/store/useMazeStore";
import { algorithms } from "@/utils/choices";

interface AlgorithmSelectorProps {
  executable?: boolean;
}

export default function AlgorithmSelector({
  executable = true,
}: AlgorithmSelectorProps) {
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
          onClick={() => {
            if (executable) {
              setAlgorithm(alg);
            }
          }}
        >
          {alg.name}
        </DropdownMenuItem>
      ))}
    </GeneralDropdown>
  );
}
