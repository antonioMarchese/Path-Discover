import { Coordinates } from "@/utils/generateCandidates";

export interface NodeProps {
  state: Coordinates;
  parent: NodeProps | null;
  action: any;
  isStart: boolean;
  isTarget: boolean;
  gScore: number;
  fScore: number;
}

export default class Node implements NodeProps {
  state: Coordinates;
  parent: NodeProps | null;
  action: any;
  isStart: boolean;
  isTarget: boolean;
  gScore: number;
  fScore: number;

  constructor(state: Coordinates, parent: NodeProps | null, action: any) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.isStart = false;
    this.isTarget = false;
    this.gScore = Infinity;
    this.fScore = Infinity;
  }
}
