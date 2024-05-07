import { CellProps } from "@/utils/generateInitialMaze";
import { CellTypes } from "@/components/maze/cell";
import delay from "@/delay";
import NoSolutionError from "@/errors/noSolutionError";
import GreedyFrontier from "../greedyFrontier";
import GreedySolver from "./solver";

export default async function greedySolver(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  const solver = new GreedySolver(cells, new GreedyFrontier());
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
