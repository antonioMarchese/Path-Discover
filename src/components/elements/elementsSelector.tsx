"use client";

import { Target, Play, Wall } from "@phosphor-icons/react";
import Element, { ElementProps } from "./element";

const elements: ElementProps[] = [
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

export default function ElementsSelector() {
  return (
    <div className="w-full p-2 flex items-center justify-between text-white">
      {elements.map((element) => (
        <Element
          title={element.title}
          cellValue={element.cellValue}
          icon={element.icon}
          key={element.title}
        />
      ))}
    </div>
  );
}
