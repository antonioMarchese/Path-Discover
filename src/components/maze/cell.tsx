"use client";

import { useElementsStore } from "@/store/elementsStore";
import { useMazeStore } from "@/store/useMazeStore";
import { Play, Target, Wall } from "@phosphor-icons/react";
import clsx from "clsx";

export type CellTypes = null | "#" | "A" | "B";

export interface CellGridProps {
  value: CellTypes;
  row: number;
  col: number;
  mouseDown: boolean;
}

const iconValueMapper = {
  A: <Play size={20} weight="fill" className="fill-green-400" />,
  B: <Target size={20} weight="fill" className="fill-red-400" />,
  "#": <Wall weight="fill" className="fill-blue-400 w-full h-full" />,
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
        "flex items-center justify-center border border-1 border-zinc-200 w-8 h-8 bg-zinc-900 cursor-pointer hover:bg-zinc-800 p-0"
      )}
    >
      {value && iconValueMapper[value]}
    </button>
  );
}
