import { CellTypes } from "@/components/maze/cell";
import Maze from "@/solvers/maze";
import QueueFrontier from "@/solvers/queueFrontier";
import { CellProps, Coordinates, initialGrid } from "@/utils";
import css from "styled-jsx/css";
import { create } from "zustand";

export type MazeStoreState = {
  cells: CellProps[][];
  changeCellValue: (row: number, col: number, value: CellTypes) => void;
  clearCells: () => void;
  solve: () => void;
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
  clearCells: () => set({ cells: initialGrid }),

  solve: async () => {
    const newCells = get().cells.map((cellsRow) =>
      cellsRow.map((cell) => ({ ...cell }))
    );
    const solver = new Maze(newCells);
    console.info("Solving maze");
    await solver.solve().then(() => {
      try {
        const explored = solver.exploredPath;
        const solutionCells = solver.solution.cells;
        explored.forEach((coord) => {
          const cell = newCells[coord.row][coord.col];
          try {
            if (cell.value !== "A" && cell.value !== "B") {
              cell.value = "E";
            }
          } catch {}
        });
        solutionCells.forEach((coord: Coordinates) => {
          try {
            const cell = newCells[coord.row][coord.col];
            if (cell.value !== "A" && cell.value !== "B") {
              cell.value = "S";
            }
          } catch (error) {}
        });
      } catch {
        console.error("Error solving maze");
      } finally {
        set((state) => ({ cells: newCells }));
      }
    });
  },
}));
