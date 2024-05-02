"use client";

import { ElementsTypes, useElementsStore } from "@/store/elementsStore";
import { Icon } from "@phosphor-icons/react";
import clsx from "clsx";
import { CellTypes } from "../maze/cell";

export interface ElementProps {
  title: ElementsTypes;
  cellValue: CellTypes;
  icon: Icon;
}

export default function Element({
  title,
  icon: ElementIcon,
  cellValue,
}: ElementProps) {
  const { selectedElement, setSelectedElement } = useElementsStore();

  return (
    <button
      type="button"
      onClick={() =>
        setSelectedElement({
          type: title,
          cellValue,
        })
      }
      className={clsx(
        "flex items-center justify-start gap-2 px-5 py-2 rounded-md cursor-pointer hover:bg-zinc-800",
        {
          "bg-zinc-800 text-sky-500": selectedElement.type === title,
          "text-white": selectedElement.type !== title,
        }
      )}
    >
      <ElementIcon
        size={16}
        weight="fill"
        className={clsx({
          "text-sky-500 fill-sky-500": selectedElement.type === title,
          "text-white fill-white": selectedElement.type !== title,
        })}
      />
      {title}
    </button>
  );
}
