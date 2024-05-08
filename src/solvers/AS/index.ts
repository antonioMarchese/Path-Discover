import { CellProps } from "@/utils/generateInitialMaze";
import { CellTypes } from "@/components/maze/cell";
import generalSolver from "../generalSolver";
import AStarSolver from "./solver";

export default async function solverAStar(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  return generalSolver(new AStarSolver(cells), cells, setCellValue, interval);
}
