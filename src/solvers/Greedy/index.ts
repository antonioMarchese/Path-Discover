import { CellProps } from "@/utils/generateInitialMaze";
import { CellTypes } from "@/components/maze/cell";
import GreedySolver from "./solver";
import generalSolver from "../generalSolver";

export default async function solverGreedy(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  return generalSolver(new GreedySolver(cells), cells, setCellValue, interval);
}
