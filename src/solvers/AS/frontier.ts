import { NodeProps } from "../node";
import StackFrontier from "../stackFrontier";

export default class AStarFrontier extends StackFrontier {
  constructor() {
    super();
  }

  remove(): NodeProps {
    if (this.empty()) {
      throw new Error("Empty frontier");
    }

    const bestNode = this.frontier.reduce((acc, node) => {
      if (node.fScore <= acc.fScore) {
        return node;
      }
      return acc;
    }, this.frontier[0]);

    this.frontier = this.frontier.filter(
      (node) =>
        node.state.col !== bestNode.state.col ||
        node.state.row !== bestNode.state.row
    );

    return bestNode;
  }
}
