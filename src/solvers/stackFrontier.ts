import { NodeProps } from "./node";

interface AbstractFrontier {
  frontier: Array<NodeProps>;
  add(node: NodeProps): void;
  containsState(state: any): boolean;
  empty(): boolean;
  remove(): NodeProps;
}

export default class StackFrontier implements AbstractFrontier {
  frontier: NodeProps[];

  constructor() {
    this.frontier = new Array();
  }

  add(node: NodeProps): void {
    this.frontier.push(node);
  }

  containsState(state: any): boolean {
    return this.frontier.some(
      (node) => node.state.col === state.col && node.state.row === state.row
    );
  }

  empty(): boolean {
    return this.frontier.length === 0;
  }

  remove(): NodeProps {
    if (this.empty()) {
      throw new Error("Empty frontier");
    }

    const node = this.frontier.splice(this.frontier.length - 1)[0];
    return node;
  }
}
