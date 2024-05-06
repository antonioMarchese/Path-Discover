"use client";

import { useElementsStore } from "@/store/elementsStore";
import { useMazeStore } from "@/store/useMazeStore";
import { Play, Target } from "@phosphor-icons/react";
import clsx from "clsx";
import Wall from "./wallCell";

/* 
  # -> Walls
  A -> Start
  B -> Goal
  E -> Explored
  S -> Solution
*/
export type CellTypes = null | "#" | "A" | "B" | "E" | "S";

export interface CellGridProps {
  value: CellTypes;
  row: number;
  col: number;
  mouseDown: boolean;
}

const iconValueMapper = {
  A: <Play size={20} weight="fill" className="fill-green-400 z-50" />,
  B: <Target size={20} weight="fill" className="fill-green-300 z-50" />,
  "#": <Wall />,
};

export default function Cell({ value, row, col, mouseDown }: CellGridProps) {
  const { changeCellValue } = useMazeStore();
  const { selectedElement } = useElementsStore();

  function handleClickCell() {
    changeCellValue(row, col, selectedElement.cellValue);
  }

  function handleMouseEnter() {
    if (mouseDown) {
      handleClickCell();
    }
  }

  return (
    <button
      onMouseDown={handleClickCell}
      onMouseEnter={handleMouseEnter}
      type="button"
      className={clsx(
        "flex items-center justify-center border border-1 border-zinc-200 w-[25px] h-[25px] cursor-pointer p-0",
        {
          "bg-blue-600 animate-grow z-10": value === "E",
          "bg-green-400 animate-grow z-10": value === "S",
          // "bg-zinc-900 hover:bg-zinc-800 ": value === null,
        }
      )}
    >
      {value && value !== "E" && value !== "S" && iconValueMapper[value]}
    </button>
  );
}
