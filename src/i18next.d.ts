import "react-i18next";

declare module "react-i18next" {
    interface Resources {
        homePage: typeof import("../src/locales/en/HomePage.json");
    }
}

