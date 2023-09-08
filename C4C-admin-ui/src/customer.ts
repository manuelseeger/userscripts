import { EntityBase } from "./entityBase";
import i18n from "./i18n";

export class IndividualCustomer extends EntityBase {
  tabLabels: string[] = [
    i18n.t("customer.individualcustomer.customer"),
    i18n.t("customer.individualcustomer.prospect"),
  ];
  idField: string = "CustomerID";
  service: string = "customer";
  entity = "IndividualCustomer";

  constructor() {
    super();
    this.id = this.getId();
  }

  isme(): boolean {
    const label = this.getTabLabel();
    return this.tabLabels.includes(label) && this.id != null;
  }

  getId(): string {
    const formElements = $(
      `.sapClientBaseControlsSimpleVLayout.sapClientMFormElement`,
    );

    const idElement = formElements.filter(
      (i, element) =>
        $(element).find("bdi").text() ===
        i18n.t("customer.individualcustomer.idlabel"),
    );

    return idElement.find("span.sapMText").text();
  }
}

export class CorporateAccount extends EntityBase {
  tabLabels: string[] = [i18n.t("customer.corporateaccount.customer")];
  idField: string = "AccountID";
  service: string = "customer";
  entity = "CorporateAccount";

  constructor() {
    super();
    this.id = this.getId();
  }

  isme(): boolean {
    const label = this.getTabLabel();
    return this.tabLabels.includes(label) && this.id != null;
  }

  getId(): string {
    const formElements = $(
      `.sapClientBaseControlsSimpleVLayout.sapClientMFormElement`,
    );

    const idElement = formElements.filter(
      (i, element) =>
        $(element).find("bdi").text() ===
        i18n.t("customer.corporateaccount.idlabel"),
    );

    return idElement.find("span.sapMText").text();
  }
}
