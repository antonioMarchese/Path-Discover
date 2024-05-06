import { CellProps } from "@/utils";
import Maze from "./maze";
import QueueFrontier from "./queueFrontier";
import StackFrontier from "./stackFrontier";
import { CellTypes } from "@/components/maze/cell";
import delay from "@/delay";
import NoSolutionError from "@/errors/noSolutionError";

export default async function generalSolver(
  frontier: StackFrontier | QueueFrontier,
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  const solver = new Maze(cells, frontier);
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
        cells[node.row][node.col].value !== "A" &&
        cells[node.row][node.col].value !== "B"
      ) {
        setCellValue(node.row, node.col, "E");
      }
      await delay(interval);
    }
    for (let node of solver.solution) {
      if (
        cells[node.row][node.col].value !== "A" &&
        cells[node.row][node.col].value !== "B"
      ) {
        setCellValue(node.row, node.col, "S");
      }
      await delay(100);
    }
  }
}
