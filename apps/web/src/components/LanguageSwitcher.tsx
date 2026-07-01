import { Globe } from "lucide-react";
import { useUIStore } from "../stores/ui-store";

export function LanguageSwitcher() {
  const language = useUIStore((s) => s.language);
  const setLanguage = useUIStore((s) => s.setLanguage);

  const toggle = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-[100] flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background-tertiary border border-border hover:bg-background-secondary hover:border-primary/40 transition-all duration-200 text-xs font-medium text-text-muted hover:text-text-primary"
      title={language === "en" ? "Switch to Turkish" : "İngilizce'ye geç"}
      aria-label={language === "en" ? "Switch to Turkish" : "Switch to English"}
    >
      <Globe size={14} />
      <span>{language === "en" ? "EN" : "TR"}</span>
    </button>
  );
}
