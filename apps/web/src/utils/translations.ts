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
  | "recent.title"
  // ── Editor ──
  | "editor.loading.initializing"
  | "editor.loading.videoEngine"
  | "editor.loading.mediaBridge"
  | "editor.loading.playbackBridge"
  | "editor.loading.renderBridge"
  | "editor.loading.effectsBridge"
  | "editor.loading.transitionBridge"
  | "editor.loading.error"
  // ── Toolbar ──
  | "toolbar.backToHome"
  | "toolbar.autoSaved"
  | "toolbar.exporting"
  | "toolbar.saved"
  | "toolbar.export"
  | "toolbar.searchPlaceholder"
  | "toolbar.undo"
  | "toolbar.redo"
  | "toolbar.actionHistory"
  | "toolbar.keyframeEditor"
  | "toolbar.audioMixer"
  | "toolbar.projectJson"
  | "toolbar.theme"
  | "toolbar.settings"
  | "toolbar.screenRecorder"
  | "toolbar.editorTour"
  | "toolbar.mographTour"
  | "toolbar.helpShortcuts"
  | "toolbar.projectJsonMenu"
  | "toolbar.searchShortcut"
  // ── Export ──
  | "export.mp4Standard"
  | "export.k4Standard"
  | "export.p1080High"
  | "export.p1080p60"
  | "export.audioOnly"
  | "export.bestMatch"
  | "export.customExport"
  | "export.customDesc"
  | "export.initializing"
  | "export.complete"
  | "export.failed"
  | "export.est"
  // ── Recording ──
  | "recording.failedTitle"
  | "recording.failedDesc"
  | "recording.importSuccess"
  | "recording.importFailed"
  | "recording.screenAndWebcam"
  | "recording.screenOnly"
  | "recording.importFailedTitle"
  // ── Settings ──
  | "settings.projectComposition"
  | "settings.compositionDesc"
  | "settings.width"
  | "settings.height"
  | "settings.apply"
  | "settings.autoSave"
  | "settings.enableAutoSave"
  | "settings.autoSaveDesc"
  | "settings.saveEvery"
  | "settings.minute"
  | "settings.minutes"
  | "settings.defaultAiProviders"
  | "settings.aiProvidersDesc"
  | "settings.tts"
  | "settings.llm"
  | "settings.aggregator"
  | "settings.aggregatorDesc";

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
    // ── Editor ──
    "editor.loading.initializing": "Initializing editor…",
    "editor.loading.videoEngine": "Initializing video engine…",
    "editor.loading.mediaBridge": "Initializing media bridge…",
    "editor.loading.playbackBridge": "Initializing playback bridge…",
    "editor.loading.renderBridge": "Initializing render bridge…",
    "editor.loading.effectsBridge": "Initializing effects bridge…",
    "editor.loading.transitionBridge": "Initializing transition bridge…",
    "editor.loading.error": "Error",
    // ── Toolbar ──
    "toolbar.backToHome": "Back to home",
    "toolbar.autoSaved": "Auto saved:",
    "toolbar.exporting": "Exporting…",
    "toolbar.saved": "Saved!",
    "toolbar.export": "Export",
    "toolbar.searchPlaceholder": "Search tools, effects, or ask AI… (⌘K)",
    "toolbar.undo": "Undo (⌘Z)",
    "toolbar.redo": "Redo (⇧⌘Z)",
    "toolbar.actionHistory": "Action history",
    "toolbar.keyframeEditor": "Keyframe editor",
    "toolbar.audioMixer": "Audio mixer",
    "toolbar.projectJson": "Project JSON / Comments",
    "toolbar.theme": "Theme:",
    "toolbar.settings": "Settings & API keys",
    "toolbar.screenRecorder": "Screen recorder",
    "toolbar.editorTour": "Editor tour",
    "toolbar.mographTour": "Animation & effects tour",
    "toolbar.helpShortcuts": "Help & shortcuts (press ?)",
    "toolbar.projectJsonMenu": "Project JSON",
    "toolbar.searchShortcut": "⌘K to search",
    // ── Export ──
    "export.mp4Standard": "MP4 Standard",
    "export.k4Standard": "4K Standard",
    "export.p1080High": "1080p High Quality",
    "export.p1080p60": "1080p 60fps",
    "export.audioOnly": "Audio Only (WAV)",
    "export.bestMatch": "Best match",
    "export.customExport": "Custom export…",
    "export.customDesc": "Full settings with AI upscaling",
    "export.initializing": "Initializing…",
    "export.complete": "Complete!",
    "export.failed": "Export failed",
    "export.est": "Est.",
    // ── Recording ──
    "recording.failedTitle": "Recording failed",
    "recording.failedDesc": "No video data was captured. Please try again.",
    "recording.importSuccess": "recording(s) imported!",
    "recording.importFailed": "Failed to import",
    "recording.screenAndWebcam": "Screen and webcam added to assets. Use the timeline to composite them.",
    "recording.screenOnly": "Screen recording added to assets.",
    "recording.importFailedTitle": "Import failed",
    // ── Settings ──
    "settings.projectComposition": "Project Composition",
    "settings.compositionDesc": "Set the canvas dimensions for your project. Pick a preset for TikTok, Reels, YouTube, or enter custom values.",
    "settings.width": "Width",
    "settings.height": "Height",
    "settings.apply": "Apply",
    "settings.autoSave": "Auto-Save",
    "settings.enableAutoSave": "Enable auto-save",
    "settings.autoSaveDesc": "Automatically save your project at regular intervals",
    "settings.saveEvery": "Save every",
    "settings.minute": "minute",
    "settings.minutes": "minutes",
    "settings.defaultAiProviders": "Default AI Providers",
    "settings.aiProvidersDesc": "Choose which service to use by default for AI features. Configure API keys in the \"API Keys\" tab first.",
    "settings.tts": "Text to Speech/Voice To Speech/Sound Effects",
    "settings.llm": "AI Assistant (LLM)",
    "settings.aggregator": "AI Aggregator",
    "settings.aggregatorDesc": "Video/image generation, upscaling, and creative AI tools",
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
    // ── Editor ──
    "editor.loading.initializing": "Düzenleyici başlatılıyor…",
    "editor.loading.videoEngine": "Video motoru başlatılıyor…",
    "editor.loading.mediaBridge": "Medya köprüsü başlatılıyor…",
    "editor.loading.playbackBridge": "Oynatma köprüsü başlatılıyor…",
    "editor.loading.renderBridge": "İşleme köprüsü başlatılıyor…",
    "editor.loading.effectsBridge": "Efekt köprüsü başlatılıyor…",
    "editor.loading.transitionBridge": "Geçiş köprüsü başlatılıyor…",
    "editor.loading.error": "Hata",
    // ── Toolbar ──
    "toolbar.backToHome": "Ana sayfaya dön",
    "toolbar.autoSaved": "Otomatik kaydedildi:",
    "toolbar.exporting": "Dışa aktarılıyor…",
    "toolbar.saved": "Kaydedildi!",
    "toolbar.export": "Dışa Aktar",
    "toolbar.searchPlaceholder": "Araç, efekt ara veya AI'ya sor… (⌘K)",
    "toolbar.undo": "Geri Al (⌘Z)",
    "toolbar.redo": "İleri Al (⇧⌘Z)",
    "toolbar.actionHistory": "İşlem geçmişi",
    "toolbar.keyframeEditor": "Anahtar kare düzenleyici",
    "toolbar.audioMixer": "Ses mikseri",
    "toolbar.projectJson": "Proje JSON / Yorumlar",
    "toolbar.theme": "Tema:",
    "toolbar.settings": "Ayarlar ve API anahtarları",
    "toolbar.screenRecorder": "Ekran kaydedici",
    "toolbar.editorTour": "Düzenleyici turu",
    "toolbar.mographTour": "Animasyon ve efekt turu",
    "toolbar.helpShortcuts": "Yardım ve kısayollar (? tuşu)",
    "toolbar.projectJsonMenu": "Proje JSON",
    "toolbar.searchShortcut": "⌘K ile ara",
    // ── Export ──
    "export.mp4Standard": "MP4 Standart",
    "export.k4Standard": "4K Standart",
    "export.p1080High": "1080p Yüksek Kalite",
    "export.p1080p60": "1080p 60fps",
    "export.audioOnly": "Yalnızca Ses (WAV)",
    "export.bestMatch": "En uygun",
    "export.customExport": "Özel dışa aktarım…",
    "export.customDesc": "AI yükseltmeli tam ayarlar",
    "export.initializing": "Başlatılıyor…",
    "export.complete": "Tamamlandı!",
    "export.failed": "Dışa aktarma başarısız",
    "export.est": "Tah.",
    // ── Recording ──
    "recording.failedTitle": "Kayıt başarısız",
    "recording.failedDesc": "Hiçbir video verisi yakalanamadı. Lütfen tekrar deneyin.",
    "recording.importSuccess": "kayıt içe aktarıldı!",
    "recording.importFailed": "İçe aktarma başarısız",
    "recording.screenAndWebcam": "Ekran ve kamera kaydı varlıklara eklendi. Zaman çizelgesinde birleştirebilirsiniz.",
    "recording.screenOnly": "Ekran kaydı varlıklara eklendi.",
    "recording.importFailedTitle": "İçe aktarma başarısız",
    // ── Settings ──
    "settings.projectComposition": "Proje Kompozisyonu",
    "settings.compositionDesc": "Projeniz için tuval boyutlarını ayarlayın. TikTok, Reels, YouTube için hazır boyut seçin veya özel değerler girin.",
    "settings.width": "Genişlik",
    "settings.height": "Yükseklik",
    "settings.apply": "Uygula",
    "settings.autoSave": "Otomatik Kaydet",
    "settings.enableAutoSave": "Otomatik kaydı etkinleştir",
    "settings.autoSaveDesc": "Projenizi düzenli aralıklarla otomatik olarak kaydedin",
    "settings.saveEvery": "Kaydetme aralığı",
    "settings.minute": "dakika",
    "settings.minutes": "dakika",
    "settings.defaultAiProviders": "Varsayılan AI Sağlayıcıları",
    "settings.aiProvidersDesc": "AI özellikleri için varsayılan olarak kullanılacak servisi seçin. Önce \"API Anahtarları\" sekmesinde anahtarları yapılandırın.",
    "settings.tts": "Metin Sese/Sese Sese/Ses Efektleri",
    "settings.llm": "AI Asistanı (LLM)",
    "settings.aggregator": "AI Toplayıcı",
    "settings.aggregatorDesc": "Video/görsel oluşturma, yükseltme ve yaratıcı AI araçları",
  },
};

export function t(key: TranslationKey, language: Language): string {
  return translations[language][key];
}
