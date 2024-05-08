import { CellProps } from "@/utils/generateInitialMaze";
import Maze from "./maze";
import { CellTypes } from "@/components/maze/cell";
import delay from "@/delay";
import NoSolutionError from "@/errors/noSolutionError";
import GreedySolver from "./Greedy/solver";
import AStarSolver from "./AS/solver";
import { EXPLORED, SOLUTION, START, TARGET } from "@/utils/types";

export default async function generalSolver(
  solver: Maze | GreedySolver | AStarSolver,
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  try {
    solver.solve();
  } catch (error) {
    if (error instanceof NoSolutionError) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  } finally {
    for (let node of solver.exploredPath) {
      if (
        cells[node.row][node.col].value !== START &&
        cells[node.row][node.col].value !== TARGET
      ) {
        setCellValue(node.row, node.col, EXPLORED);
      }
      await delay(interval);
    }
    for (let node of solver.solution) {
      if (
        cells[node.row][node.col].value !== START &&
        cells[node.row][node.col].value !== TARGET
      ) {
        setCellValue(node.row, node.col, SOLUTION);
      }
      await delay(100);
    }
  }
}
