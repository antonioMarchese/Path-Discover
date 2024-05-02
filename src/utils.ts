import { Play, Target, Wall } from "@phosphor-icons/react";
import { ElementProps } from "./components/elements/element";
import { CellTypes } from "./components/maze/cell";

export interface Coordinates {
  row: number;
  col: number;
}

export interface CandidatesProps {
  action: "up" | "down" | "left" | "right";
  coordinates: Coordinates;
}

export const selectElements: ElementProps[] = [
  {
    title: "Start Node",
    cellValue: "A",
    icon: Play,
  },
  {
    title: "Target Node",
    cellValue: "B",
    icon: Target,
  },
  {
    title: "Wall Node",
    cellValue: "#",
    icon: Wall,
  },
];

export function generateCandidates(state: Coordinates): CandidatesProps[] {
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
      candidate.coordinates.row <= 9 &&
      candidate.coordinates.col <= 9
  );
}

//  Maze utils
const rows = 10;
const columns = 10;

export interface CellProps {
  value: CellTypes;
}

const initialCell: CellProps = {
  value: null,
};

export const initialGrid: CellProps[][] = Array.from({ length: rows }, () =>
  new Array(columns).fill(initialCell)
);
