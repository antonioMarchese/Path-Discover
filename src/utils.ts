import { Play, Target, Wall } from "@phosphor-icons/react";
import { ElementProps } from "./components/elements/element";
import { CellTypes } from "./components/maze/cell";
import solverBFS from "./solvers/BFS";
import solverDFS from "./solvers/DFS";

const WIDTH = 25;
const HEIGHT = 25;

export interface Coordinates {
  row: number;
  col: number;
}

export interface CandidatesProps {
  action: "up" | "down" | "left" | "right";
  coordinates: Coordinates;
}

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
    cellValue: "A",
    icon: Play,
  },
  {
    title: "Target Node",
    portugueseTitle: "Nó de Chegada",
    cellValue: "B",
    icon: Target,
  },
  {
    title: "Wall Node",
    portugueseTitle: "Muro",
    cellValue: "#",
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
    name: "A* Search",
    solver: solverBFS,
  },
];

export function generateCandidates(
  state: Coordinates,
  width: number,
  height: number
): CandidatesProps[] {
  const { row, col } = state;

  const candidates: CandidatesProps[] = [
    {
      action: "up",
      coordinates: {
        row: row - 1,
        col,
      },
    },
    {
      action: "down",
      coordinates: {
        row: row + 1,
        col,
      },
    },
    {
      action: "left",
      coordinates: {
        row,
        col: col - 1,
      },
    },
    {
      action: "right",
      coordinates: {
        row,
        col: col + 1,
      },
    },
  ];

  return candidates.filter(
    (candidate) =>
      candidate.coordinates.row >= 0 &&
      candidate.coordinates.col >= 0 &&
      candidate.coordinates.row <= height - 1 &&
      candidate.coordinates.col <= width - 1
  );
}

//  Maze utils
const rows = 15;
const columns = 30;

export interface CellProps {
  value: CellTypes;
}

const initialCell: CellProps = {
  value: null,
};

export function generateInitialMaze(
  titleRefOffset: number,
  pageWidth: number,
  pageHeight: number
): CellProps[][] {
  const initialRows = Math.floor((pageHeight - titleRefOffset - 48) / HEIGHT);
  const initialCols = Math.floor((pageWidth - 16) / WIDTH);
  const initialMaze = Array.from({ length: initialRows }, () =>
    new Array(initialCols).fill(initialCell)
  );
  return initialMaze;
}

export const initialGrid: CellProps[][] = Array.from({ length: rows }, () =>
  new Array(columns).fill(initialCell)
);
