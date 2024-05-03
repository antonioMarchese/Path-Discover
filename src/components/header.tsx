"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown } from "@phosphor-icons/react";
import { useMazeStore } from "@/store/useMazeStore";
import { algorithms, customMaze } from "@/utils";
import delay from "@/delay";

const itemClass =
  "rounded-[3px] flex items-center p-2 outline-none data-[disabled]:pointer-events-none cursor-pointer hover:bg-zinc-200";

export default function Header() {
  const { cells, setCellValue, algorithm, setAlgorithm, setCells } =
    useMazeStore();

  async function solveMaze() {
    if (algorithm) {
      await algorithm.solver(cells, setCellValue);
    }
  }

  async function handleGenerateMaze() {
    setCells(customMaze);
  }

  return (
    <header className="w-full bg-zinc-900 p-5 text-white flex items-center justify-between">
      <h3 className="font-bold text-lg">Pathdiscover Visualizer</h3>
      <button
        onClick={() => handleGenerateMaze()}
        type="button"
        className="px-5 py-2 bg-zinc-700 hover:bg-zinc-600 duration-200 rounded-md "
      >
        Generate Maze
      </button>
      <button
        disabled={!algorithm}
        onClick={solveMaze}
        type="button"
        className="px-5 py-2 bg-zinc-700 hover:bg-zinc-600 duration-200 rounded-md disabled:cursor-not-allowed disabled:opacity-55"
      >
        Visualize
        {algorithm && <p>{algorithm.name}</p>}
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
              {algorithms.map((alg, index) => (
                <DropdownMenu.Item
                  className={itemClass}
                  key={index}
                  onClick={() => setAlgorithm(alg)}
                >
                  {alg.name}
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </ul>
    </header>
  );
}
