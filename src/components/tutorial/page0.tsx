"use client";

import Image from "next/image";
import pathDistance from "../../../public/path-distance-svgrepo-com.svg";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function TutorialPage0() {
  const { selectedLanguage } = useLanguageStore();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl w-full text-center font-semibold">
        {selectedLanguage.texts.tutorialTitle}
      </h1>
      <h3 className="w-full text-left break-words font-medium">
        {selectedLanguage.texts.tutorialPage0}
      </h3>

      <Image
        src={pathDistance}
        className="w-full max-w-[200px]"
        alt="Path from A to B"
      />
    </div>
  );
}
