import * as i18next from "i18next";

class C4CLanguageDetector implements i18next.LanguageDetectorModule {
  type: "languageDetector";
  static type: string = "languageDetector";

  detect(): string | readonly string[] | undefined {
    return $("html").attr("lang");
  }
}

i18next.use(C4CLanguageDetector).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        customer: {
          individualcustomer: {
            prospect: "Prospect",
            customer: "Customer",
            idlabel: "Customer Number",
          },
        },
        contract: {
          contract: "Contract",
        },
      },
    },
    de: {
      translation: {
        customer: {
          individualcustomer: {
            prospect: "Interessent",
            customer: "Kunde",
            idlabel: "Kundennummer",
          },
        },
        contract: {
          contract: "Vertrag",
        },
      },
    },
  },
});

export default i18next;
