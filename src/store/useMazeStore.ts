import { SpeedOption, speedOptions } from "@/components/header/speedSelector";
import { CellTypes } from "@/components/maze/cell";
import { AlgorithmsProps } from "@/utils/choices";
import { CellProps, initialGrid } from "@/utils/generateInitialMaze";
import { create } from "zustand";

export type MazeStoreState = {
  cells: CellProps[][];
  setCells: (cells: CellProps[][]) => void;
  algorithm: AlgorithmsProps | null;
  setAlgorithm: (algorithm: AlgorithmsProps) => void;
  changeCellValue: (row: number, col: number, value: CellTypes) => void;
  setCellValue: (row: number, col: number, value: CellTypes) => void;
  clearExploredPath: () => void;
  speed: SpeedOption;
  setSpeed: (speed: SpeedOption) => void;
};

export const useMazeStore = create<MazeStoreState>((set, get) => ({
  cells: initialGrid,
  setCells: (cells: CellProps[][]) => {
    set(() => ({ cells }));
  },
  algorithm: null,
  setAlgorithm: (algorithm: AlgorithmsProps) => {
    set(() => ({ algorithm }));
  },
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
      const newCells = state.cells.map((cellsRow) =>
        cellsRow.map((cell) => ({ ...cell }))
      );
      newCells[row][col].value = value;

      return { cells: newCells };
    }),
  clearExploredPath: () =>
    set((state) => {
      const newCells = state.cells.map((cellsRow) =>
        cellsRow.map((cell) => {
          if (cell.value === "E" || cell.value === "S") {
            return {
              value: null,
            };
          }
          return { ...cell };
        })
      );
      return { cells: newCells };
    }),
  speed: speedOptions[1],
  setSpeed: (speed: SpeedOption) => set(() => ({ speed })),
}));
