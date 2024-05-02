import { NodeProps } from "./node";
import StackFrontier from "./stackFrontier";

export default class QueueFrontier extends StackFrontier {
  remove(): NodeProps {
    if (this.empty()) {
      throw new Error("Empty frontier");
    }

    const node = this.frontier.splice(0, 1)[0];
    return node;
  }
}
