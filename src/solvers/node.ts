import { Coordinates } from "@/utils";

export interface NodeProps {
  state: Coordinates;
  parent: NodeProps | null;
  action: any;
}

export default class Node implements NodeProps {
  state: Coordinates;
  parent: NodeProps | null;
  action: any;

  constructor(state: Coordinates, parent: NodeProps | null, action: any) {
    this.state = state;
    this.parent = parent;
    this.action = action;
  }
}
