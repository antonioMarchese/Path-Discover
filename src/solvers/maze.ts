import { CellProps } from "@/utils";
import { CandidatesProps, Coordinates, generateCandidates } from "@/utils";
import StackFrontier from "./stackFrontier";
import QueueFrontier from "./queueFrontier";
import Node from "./node";

export default class Maze {
  maze: CellProps[][];
  width: number;
  height: number;
  walls: Array<any>;
  start: Coordinates | null;
  target: Coordinates | null;
  solution: any;
  exploredNum: number;
  frontier: QueueFrontier | StackFrontier;
  exploredPath: Array<Coordinates>;

  constructor(maze: CellProps[][], frontier: QueueFrontier | StackFrontier) {
    //  Validation of start and goal
    const linearMaze = maze.reduce((acc, mazeRow) => [...acc, ...mazeRow], []);
    if (!linearMaze.find((node) => node.value === "A")) {
      throw new Error("Maze must contain one start point");
    }
    if (!linearMaze.find((node) => node.value === "B")) {
      throw new Error("Maze must contain one target point");
    }

    this.maze = maze;
    this.frontier = frontier;
    this.height = maze.length;
    this.width = maze[0].length;
    this.start = this.target = this.solution = null;
    this.exploredNum = 0;
    this.exploredPath = new Array();

    //  Keep track of teh walls
    this.walls = maze.map((mazeRow: CellProps[], row: number) =>
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
    this.frontier.add(startNode);

    //  Keep looping until solution found
    while (true) {
      if (this.frontier.empty()) {
        throw new Error("No solution!");
      }

      //  Chose a node from the frontier
      var node = this.frontier.remove();
      this.exploredNum += 1;

      //  If the node is the target node, then we have the solution
      if (
        node.state.col === this.target?.col &&
        node.state.row === this.target?.row
      ) {
        node.isTarget = true;
        let actions: any[] = [];
        let cells: Coordinates[] = [];

        //  Follow parent nodes to find solution
        while (node.parent) {
          actions = [...actions, node.action];
          cells = [...cells, node.state];
          node = node.parent;
        }
        actions.reverse();
        cells.reverse();
        this.solution = {
          actions,
          cells,
        };
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
          this.frontier.add(
            new Node(candidate.coordinates, node, candidate.action)
          );
        }
      });
    }
  }
}
