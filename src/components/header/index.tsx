"use client";

import { useMazeStore } from "@/store/useMazeStore";
import { Coordinates } from "@/utils/generateCandidates";
import { useCallback } from "react";
import recursiveDivisionMaze from "@/app/mazes/recursive";
import delay from "@/delay";
import { useLanguageStore } from "@/store/useLanguageStore";
import LanguageSelector from "./languageSelector";
import AlgorithmSelector from "./algorithmSelector";
import SpeedSelector from "./speedSelector";
import { generateInitialMaze } from "@/utils/generateInitialMaze";

export const itemClass =
  "rounded-[3px] flex items-center p-2 outline-none data-[disabled]:pointer-events-none cursor-pointer hover:bg-zinc-200";

export default function Header() {
  const { selectedLanguage } = useLanguageStore();
  const { cells, setCellValue, algorithm, setCells, clearExploredPath, speed } =
    useMazeStore();

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

  async function solveMaze() {
    if (algorithm) {
      clearExploredPath();
      await algorithm.solver(cells, setCellValue, speed.ms);
    }
  }

  async function handleGenerateMaze() {
    calculateInitialMazeDimensions();
    const wallsCoord: Coordinates[] = [];
    recursiveDivisionMaze(
      cells,
      1,
      cells.length - 2,
      1,
      cells[0].length - 2,
      "vertical",
      false,
      "wall",
      wallsCoord
    );
    for (const { row, col } of wallsCoord) {
      setCellValue(row, col, "#");
      await delay(10);
    }
  }

  return (
    <header className="w-full bg-zinc-900 p-5 text-white flex items-center justify-between flex-wrap">
      <h3 className="font-bold text-lg">Pathdiscover Visualizer</h3>
      <button
        onClick={handleGenerateMaze}
        type="button"
        className="text-sm px-5 py-2 bg-zinc-700 hover:bg-zinc-600 duration-200 rounded-md "
      >
        {selectedLanguage.texts.mazeGeneratorButtonText}
      </button>
      <button
        disabled={!algorithm}
        onClick={solveMaze}
        type="button"
        className="flex items-center justify-center gap-2 text-sm px-5 py-2 bg-zinc-700 hover:bg-zinc-600 duration-200 rounded-md disabled:cursor-not-allowed disabled:opacity-55"
      >
        {selectedLanguage.texts.visualizeButton}
        {algorithm && <p>{algorithm.name}</p>}
      </button>
      <ul className="list-none flex items-center justify-between gap-4">
        <AlgorithmSelector />
        <SpeedSelector />
        <LanguageSelector />
      </ul>
    </header>
  );
}
