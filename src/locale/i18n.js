import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./translationsEn";
import translationsUz from "./translationsUz";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    uz: { translation: translationsUz },
  },
  lng: "en",
  fallbackLng: "uz",
});

export default i18n;
