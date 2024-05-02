"use client";

import Cell, { CellGridProps } from "./cell";
import { CellProps, useMazeStore } from "@/store/useMazeStore";

export default function Grid() {
  const { cells } = useMazeStore();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-0">
      {cells.map((cellsRow: CellProps[], row) => (
        <div
          key={row}
          className="w-full flex items-center justify-center gap-0"
        >
          {cellsRow.map((cell: CellProps, col) => (
            <Cell key={`${row}${col}`} value={cell.value} row={row} col={col} />
          ))}
        </div>
      ))}
    </div>
  );
}
