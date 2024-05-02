"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown } from "@phosphor-icons/react";
import { useMazeStore } from "@/store/useMazeStore";

const itemClass =
  "rounded-[3px] flex items-center p-2 select-none outline-none data-[disabled]:pointer-events-none cursor-pointer hover:bg-zinc-200";

export default function Header() {
  const { solve } = useMazeStore();
  return (
    <header className="w-full bg-zinc-900 p-5 text-white flex items-center justify-between">
      <h3 className="font-bold text-lg">Pathdiscover Visualizer</h3>
      <button
        onClick={solve}
        type="button"
        className="px-5 py-2 bg-zinc-700 hover:bg-zinc-600 duration-200 rounded-md"
      >
        Visualize
      </button>
      <ul className="list-none flex items-center justify-between">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="p-2 text-base font-semibold outline-none flex items-center gap-2 group">
            Algorithms
            <CaretDown
              className="fill-white duration-150 group-data-[state=open]:rotate-180"
              size={16}
              weight="bold"
            />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut transition-all text-black"
              sideOffset={5}
            >
              <DropdownMenu.Item className={itemClass}>
                Breath-First Search
              </DropdownMenu.Item>
              <DropdownMenu.Item className={itemClass}>
                Depth-First Search
              </DropdownMenu.Item>
              <DropdownMenu.Item className={itemClass}>
                A* Search
              </DropdownMenu.Item>

              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </ul>
    </header>
  );
}
