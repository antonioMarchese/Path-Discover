"use client";

import { ArrowCounterClockwise } from "@phosphor-icons/react";
import Element from "./element";
import { selectElements } from "@/utils";
import { useMazeStore } from "@/store/useMazeStore";

export default function ElementsSelector() {
  const { clearCells } = useMazeStore();

  return (
    <div className="w-full py-2 flex items-center justify-between text-white">
      {selectElements.map((element) => (
        <Element
          title={element.title}
          cellValue={element.cellValue}
          icon={element.icon}
          key={element.title}
        />
      ))}
      <button
        onClick={clearCells}
        type="button"
        className="flex items-center justify-start gap-2 px-5 py-2 rounded-md text-white cursor-pointer hover:bg-zinc-800 group"
      >
        <ArrowCounterClockwise
          size={16}
          weight="fill"
          className="fill-red-500 group-hover:-rotate-180 duration-300"
        />
        Clear Grid
      </button>
    </div>
  );
}
