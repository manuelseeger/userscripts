import { IndividualCustomer, CorporateAccount } from "./customer";
import { Contract } from "./contract";

export class ApiLink implements C4CAdminUIPlugin {
  name: string = "ApiLink";
  type: PluginType = "ui";
  public run(stats: StatsRecord): JQuery<HTMLElement> {
    const div = $(`<div id="apiLink"></div>`);
    const entities = [
      new CorporateAccount(),
      new IndividualCustomer(),
      new Contract(),
    ];

    const entity = entities.find((e) => e.isme());

    if (entity) {
      div.append(entity.getApiLink());
    }
    return div;
  }
}
