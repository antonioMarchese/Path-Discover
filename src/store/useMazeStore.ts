import { CellTypes } from "@/components/maze/cell";
import Maze from "@/solvers/maze";
import QueueFrontier from "@/solvers/queueFrontier";
import { CellProps, Coordinates, initialGrid } from "@/utils";
import css from "styled-jsx/css";
import { create } from "zustand";

export type MazeStoreState = {
  cells: CellProps[][];
  changeCellValue: (row: number, col: number, value: CellTypes) => void;
  setCellValue: (row: number, col: number, value: CellTypes) => void;
  clearCells: () => void;
};

export const useMazeStore = create<MazeStoreState>((set, get) => ({
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
  setCellValue: (row: number, col: number, value: CellTypes) =>
    set((state) => {
      const newCells = state.cells.slice();
      newCells[row][col].value = value;

      return { cells: newCells };
    }),
  clearCells: () => set({ cells: initialGrid }),
}));
