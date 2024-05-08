import { create } from "zustand";

export type TutorialStoreState = {
  page: number;
  setPage: (page: number) => void;
  isModalOpen: boolean;
  toggleModal: () => void;
};

export const useTutorialStore = create<TutorialStoreState>((set) => ({
  page: 0,
  setPage: (page: number) => set(() => ({ page })),
  isModalOpen: false,
  toggleModal: () =>
    set((state) => ({
      isModalOpen: !state.isModalOpen,
      page: 0,
    })),
}));
