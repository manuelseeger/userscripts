declare module "*.less";
declare module "c4clanguagedetector";

type StatsRecord = Record<string, unknown>;

interface JQuery {
  [x: string]: any;
  comments(blnDeep?: boolean): JQuery<any>;
}

interface JQueryStatic {
  t(i: any): string;
}

type PluginType = "ui" | "trigger";

interface C4CAdminUIPlugin {
  name: string;
  type: PluginType;
  run?(stats: StatsRecord): JQuery<HTMLElement>;
  fire?(stats: StatsRecord): void;
}
