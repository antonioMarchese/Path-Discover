"use client";

import { useState } from "react";
import Cell from "./cell";
import { useMazeStore } from "@/store/useMazeStore";
import { CellProps } from "@/utils";

export default function Grid() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const { cells } = useMazeStore();

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-0">
      {cells.map((cellsRow: CellProps[], row) => (
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          key={row}
          className="w-full flex items-center justify-center gap-0"
        >
          {cellsRow.map((cell: CellProps, col) => (
            <Cell
              key={`${row}${col}`}
              value={cell.value}
              row={row}
              col={col}
              mouseDown={isMouseDown}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
