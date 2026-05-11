const dictionaries = {
  tr: {
    welcome: "Hoş Geldiniz, Yüce Amon",
    intel: "İstihbarat",
    vault: "Kasa",
    council: "Konsey"
  },
  en: {
    welcome: "Welcome, Sovereign Amon",
    intel: "Intelligence",
    vault: "The Vault",
    council: "The Citadel"
  },
  fr: {
    welcome: "Bienvenue, Amon Souverain",
    intel: "Intelligence",
    vault: "Le Coffre",
    council: "La Citadelle"
  }
};

export const getDictionary = (lang) => dictionaries[lang] || dictionaries.en;