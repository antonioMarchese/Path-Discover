import { CellProps } from "@/utils/generateInitialMaze";
import { CandidatesProps, Coordinates } from "@/utils/generateCandidates";
import Node from "../node";
import NoSolutionError from "@/errors/noSolutionError";
import BaseSolver from "@/utils/baseSolver";
import AStarFrontier from "./frontier";

export default class AStarSolver extends BaseSolver {
  frontier: AStarFrontier;

  constructor(maze: CellProps[][]) {
    super(maze);
    this.frontier = new AStarFrontier();
  }

  heuristic(currentNode: Coordinates, targetNode = this.target) {
    if (targetNode) {
      return (
        Math.abs(targetNode.col - currentNode.col) +
        Math.abs(targetNode.row - currentNode.row)
      );
    }
    return 0;
  }

  solve(): void {
    //  Initialize frotier to just the starting position
    const startNode = new Node(this.start!, null, null);
    startNode.isStart = true;
    startNode.gScore = 0;
    startNode.fScore = this.heuristic(startNode.state);

    this.frontier.add(startNode);

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
        const child = new Node(candidate.coordinates, node, candidate.action);
        const tentativeScore =
          node.gScore + this.heuristic(node.state, neighborState);

        if (tentativeScore < child.gScore) {
          child.gScore = tentativeScore;
          child.fScore = this.heuristic(child.state) + tentativeScore;
          if (
            !this.frontier.containsState(neighborState) &&
            !this.isNodeExplored(neighborState)
          ) {
            this.frontier.add(child);
          }
        }
      });
    }
  }
}
