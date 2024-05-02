"use client";

import { useElementsStore } from "@/store/elementsStore";
import { useMazeStore } from "@/store/useMazeStore";
import { Play, Target, Wall } from "@phosphor-icons/react";
import clsx from "clsx";

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
  B: <Target size={20} weight="fill" className="fill-red-400 z-50" />,
  "#": <Wall weight="fill" className="fill-blue-400 w-full h-full z-50" />,
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
        "flex items-center justify-center border border-1 border-zinc-200 w-11 h-11 cursor-pointer p-0",
        {
          "bg-red-500 animate-grow z-10": value === "E",
          "bg-yellow-400 animate-grow z-10": value === "S",
          "bg-zinc-900 hover:bg-zinc-800 ": value === null,
        }
      )}
    >
      {value && value !== "E" && value !== "S" && iconValueMapper[value]}
    </button>
  );
}
