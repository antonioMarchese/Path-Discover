import {
  CandidatesProps,
  Coordinates,
  generateCandidates,
} from "./generateCandidates";
import { CellProps } from "./generateInitialMaze";
import { BaseFrontier, START, TARGET } from "./types";

export default class BaseSolver implements BaseFrontier {
  maze: CellProps[][];
  width: number;
  height: number;
  walls: Array<any>;
  start: Coordinates | null;
  target: Coordinates | null;
  solution: Array<Coordinates>;
  exploredNum: number;
  exploredPath: Array<Coordinates>;

  constructor(maze: CellProps[][]) {
    this.maze = maze.map((cellsRow) =>
      cellsRow.map((cell) => {
        if (cell.value === "E" || cell.value === "S") {
          return { value: null };
        }
        return { ...cell };
      })
    );
    this.height = maze.length;
    this.width = maze[0].length;
    this.start = this.target = null;
    this.exploredNum = 0;
    this.exploredPath = new Array();
    this.solution = new Array();

    //  Keep track of the walls
    this.walls = this.maze.map((mazeRow: CellProps[], row: number) =>
      mazeRow.map((node: CellProps, col: number) => {
        try {
          if (node.value === START) {
            this.start = {
              row,
              col,
            };
            return false;
          } else if (node.value === TARGET) {
            this.target = {
              row,
              col,
            };
            return false;
          } else if (node.value === null) {
            return false;
          } else return true;
        } catch {
          return false;
        }
      })
    );
  }

  neighbors(state: Coordinates): CandidatesProps[] {
    //  Get all possible actions
    const candidates: CandidatesProps[] = generateCandidates(
      state,
      this.width,
      this.height
    );

    //  Ensure actions are valid
    const actions: CandidatesProps[] = candidates.reduce((acc, candidate) => {
      const { row, col } = candidate.coordinates;
      try {
        if (!this.walls[row][col]) {
          return [...acc, candidate];
        }
        return [...acc];
      } catch {
        return [...acc];
      }
    }, new Array());

    return actions;
  }

  isNodeExplored(state: Coordinates) {
    return this.exploredPath.find(
      (exploredNode) =>
        exploredNode.row === state.row && exploredNode.col === state.col
    );
  }
}
