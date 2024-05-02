import { CellTypes } from "@/components/maze/cell";
import { create } from "zustand";

export type ElementsTypes = "Wall Node" | "Start Node" | "Target Node";

export type ElementsStoreState = {
  selectedElement: {
    type: ElementsTypes;
    cellValue: CellTypes;
  };
  setSelectedElement: (element: {
    type: ElementsTypes;
    cellValue: CellTypes;
  }) => void;
};

export const useElementsStore = create<ElementsStoreState>((set) => ({
  selectedElement: { type: "Wall Node", cellValue: "#" },
  setSelectedElement: (element: {
    type: ElementsTypes;
    cellValue: CellTypes;
  }) => set({ selectedElement: element }),
}));
