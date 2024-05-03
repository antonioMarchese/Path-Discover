import { CellProps } from "@/utils";
import Maze from "./maze";
import QueueFrontier from "./queueFrontier";
import StackFrontier from "./stackFrontier";
import { CellTypes } from "@/components/maze/cell";
import delay from "@/delay";

export default async function generalSolver(
  frontier: StackFrontier | QueueFrontier,
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void
) {
  const solver = new Maze(cells, frontier);
  solver.solve();
  for (let node of solver.exploredPath) {
    if (
      cells[node.row][node.col].value !== "A" &&
      cells[node.row][node.col].value !== "B"
    ) {
      setCellValue(node.row, node.col, "E");
    }
    await delay(100);
  }
  for (let node of solver.solution.cells) {
    setTimeout(() => {
      if (
        cells[node.row][node.col].value !== "A" &&
        cells[node.row][node.col].value !== "B"
      )
        setCellValue(node.row, node.col, "S");
    }, 1000);
  }
}
