import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HomePageEn from "/src/locales/en/HomePage.json"
import HomePageFa from "/src/locales/fa/HomePage.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                homePage: HomePageEn,

            },
            fa: {
                homePage: HomePageFa,

            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;