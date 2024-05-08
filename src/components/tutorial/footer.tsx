"use client";

import { useTutorialStore } from "@/store/useTutorialStore";

export default function TutorialFooter() {
  const { page, setPage, toggleModal } = useTutorialStore();

  return (
    <div className="mt-4 w-full flex items-center justify-between">
      <button
        onClick={toggleModal}
        type="button"
        className="p-2 hover:bg-zinc-200 rounded-md"
      >
        Skip tutorial
      </button>

      <div className="flex items-center justify-center gap-2">
        {page !== 0 && (
          <button
            onClick={() => setPage(page - 1)}
            type="button"
            className="p-2 hover:bg-zinc-200 rounded-md"
          >
            Prev
          </button>
        )}
        {page < 4 && (
          <button
            onClick={() => setPage(page + 1)}
            type="button"
            className="p-2 hover:bg-zinc-200 rounded-md"
          >
            Next
          </button>
        )}
        <small className="absolute bottom-2 right-2">
          {page + 1}/{5}
        </small>
      </div>
    </div>
  );
}
