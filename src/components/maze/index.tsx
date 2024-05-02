"use client";

import Grid from "./grid";

export default function Maze() {
  return (
    <div className="w-full flex flex-col gap-5 mt-4">
      <h3 className="text-white text-center font-medium text-sm">
        Pick an algorithm and visualize it!
      </h3>
      <Grid />
    </div>
  );
}
