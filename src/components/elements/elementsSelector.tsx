"use client";

import { ArrowCounterClockwise } from "@phosphor-icons/react";
import Element from "./element";
import { generateInitialMaze, selectElements } from "@/utils";
import { useMazeStore } from "@/store/useMazeStore";
import { useCallback } from "react";

export default function ElementsSelector() {
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
    <div className="w-full py-2 flex items-center justify-between text-white">
      {selectElements.map((element) => (
        <Element
          title={element.title}
          cellValue={element.cellValue}
          icon={element.icon}
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
        Clear Grid
      </button>
    </div>
  );
}
