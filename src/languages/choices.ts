import { LanguageTexts, portugueseTexts } from "./portuguese";
import englishTexts from "./english";

export interface LanguageOption {
  title: "pt-BR" | "en";
  texts: LanguageTexts;
}

export const languageOptions: LanguageOption[] = [
  {
    title: "en",
    texts: englishTexts,
  },
  {
    title: "pt-BR",
    texts: portugueseTexts,
  },
];
