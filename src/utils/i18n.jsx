import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json"; // Import en.json
import vi from "../locales/vn.json"; // Import vi.json
import ko from "../locales/ko.json"; // Import fr.json

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
  fr: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  detection: {
    order: ["localStorage", "navigator"],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
