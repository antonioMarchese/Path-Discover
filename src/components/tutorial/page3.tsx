"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import AlgorithmSelector from "../header/algorithmSelector";

export default function TutorialPage3() {
  const { selectedLanguage } = useLanguageStore();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl w-full text-center font-semibold">
        {selectedLanguage.texts.tutorialPage3Title}
      </h1>
      <h3 className="w-full text-left break-words font-medium">
        {selectedLanguage.texts.tutorialPage3}
      </h3>

      <div className="bg-zinc-900 rounded-md p-2 text-white">
        <AlgorithmSelector executable={false} />
      </div>
    </div>
  );
}
