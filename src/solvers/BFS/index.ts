import { CellProps } from "@/utils";
import QueueFrontier from "../queueFrontier";
import generalSolver from "../generalSolver";
import { CellTypes } from "@/components/maze/cell";

export default function solverBFS(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void
) {
  return generalSolver(new QueueFrontier(), cells, setCellValue);
}