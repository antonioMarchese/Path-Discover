import { CellTypes } from "@/components/maze/cell";

const WIDTH = 25;
const HEIGHT = 25;

//  Maze utils
const rows = 15;
const columns = 30;

export interface CellProps {
  value: CellTypes;
}

const initialCell: CellProps = {
  value: null,
};

export function generateInitialMaze(
  titleRefOffset: number,
  pageWidth: number,
  pageHeight: number
): CellProps[][] {
  const initialRows = Math.floor((pageHeight - titleRefOffset - 48) / HEIGHT);
  const initialCols = Math.floor((pageWidth - 16) / WIDTH);
  const initialMaze = Array.from({ length: initialRows }, () =>
    new Array(initialCols).fill(initialCell)
  );
  return initialMaze;
}

export const initialGrid: CellProps[][] = Array.from({ length: rows }, () =>
  new Array(columns).fill(initialCell)
);
