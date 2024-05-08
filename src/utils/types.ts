import { Coordinates } from "./generateCandidates";
import { CellProps } from "./generateInitialMaze";

export interface BaseFrontier {
  maze: CellProps[][];
  width: number;
  height: number;
  walls: Array<any>;
  start: Coordinates | null;
  target: Coordinates | null;
  solution: Array<Coordinates>;
  exploredNum: number;
  exploredPath: Array<Coordinates>;
}

export const START = "A";
export const TARGET = "B";
export const WALL = "#";
export const SOLUTION = "S";
export const EXPLORED = "E";
