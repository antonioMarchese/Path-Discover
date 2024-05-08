import { ElementProps } from "@/components/elements/element";
import { CellTypes } from "@/components/maze/cell";
import solverAStar from "@/solvers/AS";
import solverBFS from "@/solvers/BFS";
import solverDFS from "@/solvers/DFS";
import solverGreedy from "@/solvers/Greedy";
import { CellProps } from "@/utils/generateInitialMaze";
import { Play, Target, Wall } from "@phosphor-icons/react";
import { START, TARGET, WALL } from "./types";

export interface AlgorithmsProps {
  name: string;
  solver: (
    cells: CellProps[][],
    setCellValue: (row: number, col: number, value: CellTypes) => void,
    interval: number
  ) => Promise<void>;
}

export const selectElements: ElementProps[] = [
  {
    title: "Start Node",
    portugueseTitle: "Nó de Partida",
    cellValue: START,
    icon: Play,
  },
  {
    title: "Target Node",
    portugueseTitle: "Nó de Chegada",
    cellValue: TARGET,
    icon: Target,
  },
  {
    title: "Wall Node",
    portugueseTitle: "Muro",
    cellValue: WALL,
    icon: Wall,
  },
];

export const algorithms: AlgorithmsProps[] = [
  {
    name: "Breath-First Search",
    solver: solverBFS,
  },
  {
    name: "Depth-First Search",
    solver: solverDFS,
  },
  {
    name: "Greedy Best-First Search",
    solver: solverGreedy,
  },
  {
    name: "A* Search",
    solver: solverAStar,
  },
];
