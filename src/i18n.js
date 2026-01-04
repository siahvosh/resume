import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome",
                description: "Front-end Developer"
            }
        },
        fa: {
            translation: {
                welcome: "خوش آمدید",
                description: "توسعه‌دهنده فرانت‌اند"
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;