"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Cell from "./cell";
import { useMazeStore } from "@/store/useMazeStore";
import { CellProps, generateInitialMaze } from "@/utils";

export default function Grid() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const { cells, setCells } = useMazeStore();

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  const calculateInitialMazeDimensions = useCallback(() => {
    if (titleRef.current) {
      const { innerWidth: pageWidth, innerHeight: pageHeight } = window;
      const titleRefOffset = titleRef.current!.offsetTop;
      const initialMaze = generateInitialMaze(
        titleRefOffset,
        pageWidth,
        pageHeight
      );
      setCells(initialMaze);
    }
  }, [titleRef, setCells, generateInitialMaze]);

  useEffect(() => {
    calculateInitialMazeDimensions();
  }, [calculateInitialMazeDimensions]);

  return (
    <div className="w-full flex flex-col gap-5 px-2 pb-2">
      <h3
        id="grid-title"
        ref={titleRef}
        className="text-white text-center font-medium text-sm"
      >
        Pick an algorithm and visualize it!
      </h3>
      <div className="w-full h-full flex flex-col items-center justify-center gap-0">
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
    </div>
  );
}
