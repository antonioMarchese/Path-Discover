import { Coordinates, generateCandidates } from "@/utils/generateCandidates";
import Node from "../node";
import NoSolutionError from "@/errors/noSolutionError";
import GreedyFrontier from "../greedyFrontier";
import { CandidatesProps } from "@/utils/generateCandidates";
import { CellProps } from "@/utils/generateInitialMaze";
import BaseSolver from "@/utils/baseSolver";

export default class GreedySolver extends BaseSolver {
  frontier: GreedyFrontier;

  constructor(maze: CellProps[][]) {
    super(maze);

    this.frontier = new GreedyFrontier();
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
