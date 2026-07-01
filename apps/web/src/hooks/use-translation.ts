import { useUIStore } from "../stores/ui-store";
import { t as translate, type TranslationKey } from "../utils/translations";

export function useTranslation() {
  const language = useUIStore((s) => s.language);

  return {
    t: (key: TranslationKey): string => translate(key, language),
    language,
  };
}
