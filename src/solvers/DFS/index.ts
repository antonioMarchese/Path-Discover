import { CellProps } from "@/utils/generateInitialMaze";
import generalSolver from "../generalSolver";
import StackFrontier from "../stackFrontier";
import { CellTypes } from "@/components/maze/cell";
import Maze from "../maze";

export default function solverDFS(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  return generalSolver(
    new Maze(cells, new StackFrontier()),
    cells,
    setCellValue,
    interval
  );
}
