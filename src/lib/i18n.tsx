import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Langs
import enLang from "../locale/en.json";
import ptLang from "../locale/pt.json";

const resources = {
  en: { ...enLang },
  pt: { ...ptLang },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
