import * as i18next from "i18next";

export class C4CLanguageDetector implements i18next.LanguageDetectorModule {
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
            idlabel: "Customer ID",
          },
          corporateaccount: {
            customer: "Customer",
            idlabel: "Account ID",
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
            customer: "Bestandeskunde",
            idlabel: "Kundennummer",
          },
          corporateaccount: {
            customer: "Bestandeskunde",
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
