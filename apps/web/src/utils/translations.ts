export type Language = "en" | "tr";

export type TranslationKey =
  | "app.name"
  | "welcome.heading"
  | "welcome.subtitle"
  | "welcome.description"
  | "format.vertical.label"
  | "format.vertical.description"
  | "format.horizontal.label"
  | "format.horizontal.description"
  | "format.square.label"
  | "format.square.description"
  | "format.start"
  | "action.browseTemplates"
  | "action.recentProjects"
  | "action.openEditor"
  | "action.back"
  | "action.skipOnStartup"
  | "action.press"
  | "action.toSkip"
  | "templates.title"
  | "recent.title";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "app.name": "Open Reel Video",
    "welcome.heading": "From idea to export.",
    "welcome.subtitle": "In your browser.",
    "welcome.description":
      "Pick a format and start creating. You can change this anytime.",
    "format.vertical.label": "Vertical",
    "format.vertical.description": "TikTok, Reels, Shorts",
    "format.horizontal.label": "Horizontal",
    "format.horizontal.description": "YouTube, Vimeo, Web",
    "format.square.label": "Square",
    "format.square.description": "Instagram, Facebook",
    "format.start": "Start creating",
    "action.browseTemplates": "Browse templates",
    "action.recentProjects": "Recent projects",
    "action.openEditor": "Open editor",
    "action.back": "Back",
    "action.skipOnStartup": "Skip on startup",
    "action.press": "Press",
    "action.toSkip": "to skip",
    "templates.title": "Templates",
    "recent.title": "Recent Projects",
  },
  tr: {
    "app.name": "Open Reel Video",
    "welcome.heading": "Fikirden dışa aktarıma.",
    "welcome.subtitle": "Tarayıcınızda.",
    "welcome.description":
      "Bir format seçin ve oluşturmaya başlayın. Bunu daha sonra değiştirebilirsiniz.",
    "format.vertical.label": "Dikey",
    "format.vertical.description": "TikTok, Reels, Shorts",
    "format.horizontal.label": "Yatay",
    "format.horizontal.description": "YouTube, Vimeo, Web",
    "format.square.label": "Kare",
    "format.square.description": "Instagram, Facebook",
    "format.start": "Oluşturmaya başla",
    "action.browseTemplates": "Şablonlara göz at",
    "action.recentProjects": "Son projeler",
    "action.openEditor": "Editörü aç",
    "action.back": "Geri",
    "action.skipOnStartup": "Açılışta atla",
    "action.press": "Tuşu",
    "action.toSkip": "atlamak için",
    "templates.title": "Şablonlar",
    "recent.title": "Son Projeler",
  },
};

export function t(key: TranslationKey, language: Language): string {
  return translations[language][key];
}
