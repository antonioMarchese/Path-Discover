import { Coordinates } from "@/utils/generateCandidates";
import { NodeProps } from "./node";

interface GreedyNodeProps {
  node: NodeProps;
  heuristicValue: number;
}

interface AbstractGreedyFrontier {
  frontier: Array<GreedyNodeProps>;
  add(node: GreedyNodeProps): void;
  containsState(state: Coordinates): boolean;
  empty(): boolean;
  remove(): NodeProps;
}

export default class GreedyFrontier implements AbstractGreedyFrontier {
  frontier: GreedyNodeProps[];

  constructor() {
    this.frontier = new Array();
  }

  add(node: GreedyNodeProps): void {
    this.frontier.push(node);
    console.info(this.frontier);
    this.frontier.sort(
      (nodeA, nodeB) => nodeA.heuristicValue - nodeB.heuristicValue
    );
    console.info({ sorted: this.frontier });
  }

  containsState(state: Coordinates): boolean {
    return this.frontier.some(
      (greedyNode) =>
        greedyNode.node.state.col === state.col &&
        greedyNode.node.state.row === state.row
    );
  }

  empty(): boolean {
    return this.frontier.length === 0;
  }

  remove(): NodeProps {
    if (this.empty()) {
      throw new Error("Empty frontier");
    }

    const minHeuristicValueNode = this.frontier.splice(0, 1)[0];

    return minHeuristicValueNode.node;
  }
}
