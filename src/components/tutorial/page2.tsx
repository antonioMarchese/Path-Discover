"use client";

import { useLanguageStore } from "@/store/useLanguageStore";

export default function TutorialPage2() {
  const { selectedLanguage } = useLanguageStore();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl w-full text-center font-semibold">
        {selectedLanguage.texts.tutorialPage2Title}
      </h1>
      <h3 className="w-full text-left break-words font-medium">
        {selectedLanguage.texts.tutorialPage2}
      </h3>

      <video
        src="/videos/startNode.mp4"
        autoPlay
        width="320"
        height="240"
        preload="auto"
        loop
      />
    </div>
  );
}
