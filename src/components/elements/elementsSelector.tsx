"use client";

import { ArrowCounterClockwise } from "@phosphor-icons/react";
import Element from "./element";
import { generateInitialMaze } from "@/utils/generateInitialMaze";
import { useMazeStore } from "@/store/useMazeStore";
import { useCallback } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { selectElements } from "@/utils/choices";

export default function ElementsSelector() {
  const { selectedLanguage } = useLanguageStore();
  const { setCells } = useMazeStore();

  const calculateInitialMazeDimensions = useCallback(() => {
    const titleRef = document.getElementById("grid-title");
    if (titleRef) {
      const { innerWidth: pageWidth, innerHeight: pageHeight } = window;
      const titleRefOffset = titleRef.offsetTop;
      const initialMaze = generateInitialMaze(
        titleRefOffset,
        pageWidth,
        pageHeight
      );
      setCells(initialMaze);
    }
  }, [setCells, generateInitialMaze]);

  return (
    <div className="w-full py-2 flex items-center justify-between text-white flex-wrap">
      {selectElements.map((element) => (
        <Element
          title={element.title}
          cellValue={element.cellValue}
          icon={element.icon}
          portugueseTitle={element.portugueseTitle}
          key={element.title}
        />
      ))}
      <button
        onClick={calculateInitialMazeDimensions}
        type="button"
        className="flex items-center justify-start gap-2 px-5 py-2 rounded-md text-white cursor-pointer hover:bg-zinc-800 group"
      >
        <ArrowCounterClockwise
          size={16}
          weight="fill"
          className="fill-red-500 group-hover:-rotate-180 duration-300"
        />
        {selectedLanguage.texts.clearButtonText}
      </button>
    </div>
  );
}
