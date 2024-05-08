"use client";

import { useLanguageStore } from "@/store/useLanguageStore";

export default function TutorialPage4() {
  const { selectedLanguage } = useLanguageStore();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl w-full text-center font-semibold">
        {selectedLanguage.texts.tutorialPage4Title}
      </h1>
      <h3 className="w-full text-left break-words font-medium">
        {selectedLanguage.texts.tutorialPage4}
      </h3>

      <div className="rounded-md p-2 text-white">
        <button
          disabled
          type="button"
          className="flex items-center justify-center gap-2 text-sm px-5 py-2 bg-zinc-700 hover:cursor-pointer hover:bg-zinc-600 duration-200 rounded-md"
        >
          {selectedLanguage.texts.visualizeButton}
        </button>
      </div>
    </div>
  );
}
