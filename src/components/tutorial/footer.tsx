"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { useTutorialStore } from "@/store/useTutorialStore";

export default function TutorialFooter() {
  const { page, setPage, toggleModal } = useTutorialStore();
  const { selectedLanguage } = useLanguageStore();

  return (
    <div className="mt-4 w-full flex items-center justify-between">
      <button
        onClick={toggleModal}
        type="button"
        className="p-2 hover:bg-zinc-200 rounded-md"
      >
        {selectedLanguage.texts.skipTutorialButton}
      </button>

      <div className="flex items-center justify-center gap-2">
        {page !== 0 && (
          <button
            onClick={() => setPage(page - 1)}
            type="button"
            className="p-2 hover:bg-zinc-200 rounded-md"
          >
            {selectedLanguage.texts.prevPageTutorialButton}
          </button>
        )}
        <button
          onClick={() => {
            if (page < 4) {
              setPage(page + 1);
            } else {
              toggleModal();
            }
          }}
          type="button"
          className="p-2 hover:bg-zinc-200 rounded-md"
        >
          {page < 4
            ? selectedLanguage.texts.nextPageTutorialButton
            : selectedLanguage.texts.finishTutorialButton}
        </button>
        <small className="absolute bottom-2 right-2">
          {page + 1}/{5}
        </small>
      </div>
    </div>
  );
}
