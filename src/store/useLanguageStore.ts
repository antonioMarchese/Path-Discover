import { LanguageOption, languageOptions } from "@/languages/choices";
import { create } from "zustand";

export type ElementsTypes = "Wall Node" | "Start Node" | "Target Node";

export type LanguagesStoreState = {
  selectedLanguage: LanguageOption;
  setSelectedLanguage: (language: LanguageOption) => void;
};

export const useLanguageStore = create<LanguagesStoreState>((set) => ({
  selectedLanguage: languageOptions[0],
  setSelectedLanguage: (language: LanguageOption) =>
    set(() => ({
      selectedLanguage: language,
    })),
}));
