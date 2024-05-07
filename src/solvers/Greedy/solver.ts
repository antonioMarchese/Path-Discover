import { Coordinates, generateCandidates } from "@/utils/generateCandidates";
import Node from "../node";
import NoSolutionError from "@/errors/noSolutionError";
import GreedyFrontier from "../greedyFrontier";
import { CandidatesProps } from "@/utils/generateCandidates";
import { CellProps } from "@/utils/generateInitialMaze";

export default class GreedySolver {
  maze: CellProps[][];
  width: number;
  height: number;
  walls: Array<any>;
  start: Coordinates | null;
  target: Coordinates | null;
  solution: Array<Coordinates>;
  exploredNum: number;
  frontier: GreedyFrontier;
  exploredPath: Array<Coordinates>;

  constructor(maze: CellProps[][], frontier: GreedyFrontier) {
    //  Validation of start and goal
    const linearMaze = maze.reduce((acc, mazeRow) => [...acc, ...mazeRow], []);
    if (!linearMaze.find((node) => node.value === "A")) {
      throw new Error("Maze must contain one start point");
    }
    if (!linearMaze.find((node) => node.value === "B")) {
      throw new Error("Maze must contain one target point");
    }

    this.maze = maze.map((cellsRow) =>
      cellsRow.map((cell) => {
        if (cell.value === "E" || cell.value === "S") {
          return { value: null };
        }
        return { ...cell };
      })
    );
    this.frontier = frontier;
    this.height = maze.length;
    this.width = maze[0].length;
    this.start = this.target = null;
    this.exploredNum = 0;
    this.exploredPath = new Array();
    this.solution = new Array();

    //  Keep track of teh walls
    this.walls = this.maze.map((mazeRow: CellProps[], row: number) =>
      mazeRow.map((node: CellProps, col: number) => {
        try {
          if (node.value === "A") {
            this.start = {
              row,
              col,
            };
            return false;
          } else if (node.value === "B") {
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

  heuristic(node: Coordinates) {
    if (this.start && this.target) {
      return (
        Math.abs(this.target.col - node.col) +
        Math.abs(this.target.row - node.row)
      );
    }
    return 0;
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

  solve() {
    //  Initialize frotier to just the starting position
    const startNode = new Node(this.start!, null, null);
    startNode.isStart = true;
    this.frontier.add({
      node: startNode,
      heuristicValue: this.heuristic(startNode.state),
    });

    //  Keep looping until solution found
    while (true) {
      if (this.frontier.empty()) {
        throw new NoSolutionError("No solution for that maze!");
      }

      //  Chose a node from the frontier, based on the heuristic value

      var node = this.frontier.remove();
      this.exploredNum += 1;

      //  If the node is the target node, then we have the solution
      if (
        node.state.col === this.target?.col &&
        node.state.row === this.target?.row
      ) {
        node.isTarget = true;

        //  Follow parent nodes to find solution
        while (node.parent) {
          this.solution.push(node.state);
          node = node.parent;
        }
        this.solution.reverse();
        return;
      }

      //  Mark node as explored
      if (!this.isNodeExplored(node.state)) {
        this.exploredPath.push(node.state);
      }

      //  Add neighbors to the frontier
      this.neighbors(node.state).forEach((candidate: CandidatesProps) => {
        const neighborState = candidate.coordinates;
        if (
          !this.frontier.containsState(neighborState) &&
          !this.isNodeExplored(neighborState)
        ) {
          const child = new Node(candidate.coordinates, node, candidate.action);
          this.frontier.add({
            node: child,
            heuristicValue: this.heuristic(child.state),
          });
        }
      });
    }
  }
}
