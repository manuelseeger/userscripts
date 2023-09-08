import { EntityBase } from "./entityBase";
import i18n from "./i18n";

export class Contract extends EntityBase {
  tabLabels: string[] = [i18n.t("contract.contract")];
  idField: string = "ID";
  service: string = "contract";
  entity = "Contract";

  constructor() {
    super();
    this.id = this.getId();
  }

  isme(): boolean {
    const label = this.getTabLabel();
    return this.tabLabels.includes(label);
  }

  getId(): string {
    return $(
      `.sapMText.sapUiSelectable.sapMTextNoWrap.sapMTextMaxWidth.sapClientMODHAttr`,
    ).text();
  }
}
