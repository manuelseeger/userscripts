export class EntityBase {
  id: string;
  entity: string;
  idField: string;
  tenant: string;
  service: string;
  constructor() {
    this.tenant = this.getTenant();
    this.service = "c4codataapi";
  }

  getApiUrl(): string {
    return `https://${this.tenant}.crm.ondemand.com/sap/c4c/odata-sso/v1/${this.service}/${this.entity}Collection?$format=json&$filter=${this.idField} eq '${this.id}'`;
  }

  getTabLabel(): string {
    return $(
      ".sapClientMTabButtonSelected .sapClientMTabButtonFirstText",
    ).text();
  }

  getApiLink() {
    const link = $(
      `<a href="${this.getApiUrl()}" target="_blank">API: ${this.id}</a>`,
    );
    return link;
  }

  getTenant(): string {
    return window.location.hostname.split(".")[0];
  }
}
