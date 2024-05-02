import { CellTypes } from "@/components/maze/cell";
import { create } from "zustand";

const rows = 10;
const columns = 30;

export interface CellProps {
  value: CellTypes;
}

const initialCell: CellProps = {
  value: null,
};

const initialGrid: CellProps[][] = Array.from({ length: rows }, () =>
  new Array(columns).fill(initialCell)
);

export type MazeStoreState = {
  cells: CellProps[][];
  changeCellValue: (row: number, col: number, value: CellTypes) => void;
};

export const useMazeStore = create<MazeStoreState>((set) => ({
  cells: initialGrid,
  changeCellValue: (row: number, col: number, value: CellTypes) =>
    set((state) => {
      var newCells;
      if (value && value !== "#") {
        //  Needs to change the old Start/Target Node to 'null'
        newCells = state.cells.map((cellsRow: CellProps[]) =>
          cellsRow.map((cell: CellProps) => {
            if (cell.value === value) {
              return { value: null };
            }
            return { ...cell };
          })
        );
      } else {
        newCells = state.cells.map((cellsRow: CellProps[]) =>
          cellsRow.map((cell: CellProps) => ({ ...cell }))
        );
      }
      newCells[row][col].value = value;

      return { cells: newCells };
    }),
}));
