"use client";

import GeneralModal from "../ui/dialog";
import TutorialPage0 from "./page0";
import TutorialFooter from "./footer";
import { useTutorialStore } from "@/store/useTutorialStore";
import TutorialPage1 from "./page1";
import TutorialPage2 from "./page2";
import TutorialPage3 from "./page3";
import TutorialPage4 from "./page4";
import { useEffect } from "react";

type possiblePages = 0 | 1 | 2 | 3 | 4;

const tutorialPagesMap = {
  0: <TutorialPage0 />,
  1: <TutorialPage1 />,
  2: <TutorialPage2 />,
  3: <TutorialPage3 />,
  4: <TutorialPage4 />,
};

export default function Tutorial() {
  const { isModalOpen, toggleModal, page } = useTutorialStore();

  useEffect(() => {
    const haveAccessed = localStorage.getItem("path-discover-visualizer");
    if (!haveAccessed) {
      localStorage.setItem("path-discover-visualizer", "visualized");
      toggleModal();
    }
  }, [toggleModal]);

  return (
    <GeneralModal
      open={isModalOpen}
      onOpenChange={toggleModal}
      triggerTitle={
        <button className="text-white rounded-full border border-zinc-500 flex items-center justify-center w-8 h-8">
          ?
        </button>
      }
    >
      <div className="w-full flex flex-col justify-between items-center text-zinc-700">
        {tutorialPagesMap[page as possiblePages]}
        <TutorialFooter />
      </div>
    </GeneralModal>
  );
}
