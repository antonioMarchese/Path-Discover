"use client";

import { useElementsStore } from "@/store/elementsStore";
import { useMazeStore } from "@/store/useMazeStore";
import { Play, Target } from "@phosphor-icons/react";
import clsx from "clsx";

export type CellTypes = null | "#" | "A" | "B";

export interface CellGridProps {
  value: CellTypes;
  row: number;
  col: number;
}

export default function Cell({ value, row, col }: CellGridProps) {
  const { changeCellValue } = useMazeStore();
  const { selectedElement } = useElementsStore();

  function handleClickCell() {
    changeCellValue(row, col, selectedElement.cellValue);
  }

  return (
    <button
      onClick={handleClickCell}
      type="button"
      className={clsx(
        "flex items-center justify-center border border-1 border-zinc-200 w-8 h-8 bg-zinc-900 cursor-pointer hover:bg-zinc-800",
        {
          "bg-blue-950 hover:bg-blue-900": value === "#",
        }
      )}
    >
      {value === "A" && (
        <Play size={20} weight="fill" className="fill-green-400" />
      )}
      {value === "B" && (
        <Target size={20} weight="fill" className="fill-red-400" />
      )}
    </button>
  );
}
