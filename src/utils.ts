import { Play, Target, Wall } from "@phosphor-icons/react";
import { ElementProps } from "./components/elements/element";

export const selectElements: ElementProps[] = [
  {
    title: "Start Node",
    cellValue: "A",
    icon: Play,
  },
  {
    title: "Target Node",
    cellValue: "B",
    icon: Target,
  },
  {
    title: "Wall Node",
    cellValue: "#",
    icon: Wall,
  },
];
