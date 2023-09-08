import { C4CLanguageDetector } from "./i18n";
export class LanguagePicker implements C4CAdminUIPlugin {
  name: string = "LanguageSwitcher";
  type: PluginType = "ui";
  public run(stats: StatsRecord): JQuery<HTMLElement> {
    const languagePicker = $(`<select id="languagePicker"></select>`);
    const languages = ["en", "de", "fr", "it"];
    const currentLanguage = new C4CLanguageDetector().detect();
    languages.forEach((language) => {
      const selected = language === currentLanguage ? "selected" : "";
      const option = $(
        `<option value="${language}" ${selected}>${language.toUpperCase()}</option>`,
      );
      languagePicker.append(option);
    });
    languagePicker.on("change", () => {
      const language = languagePicker.val().toString();
      const url = new URL(window.location.href);
      url.searchParams.set("sap-language", language);
      window.location.href = url.href;
      console.log("languagePicker", language);
    });
    return languagePicker;
  }
}
