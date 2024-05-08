import { CellProps } from "@/utils/generateInitialMaze";
import QueueFrontier from "../queueFrontier";
import generalSolver from "../generalSolver";
import { CellTypes } from "@/components/maze/cell";
import Maze from "../maze";

export default function solverBFS(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void,
  interval = 50
) {
  return generalSolver(
    new Maze(cells, new QueueFrontier()),
    cells,
    setCellValue,
    interval
  );
}
