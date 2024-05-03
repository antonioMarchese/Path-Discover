import { CellProps } from "@/utils";
import generalSolver from "../generalSolver";
import StackFrontier from "../stackFrontier";
import { CellTypes } from "@/components/maze/cell";

export default function solverDFS(
  cells: CellProps[][],
  setCellValue: (row: number, col: number, value: CellTypes) => void
) {
  return generalSolver(new StackFrontier(), cells, setCellValue);
}