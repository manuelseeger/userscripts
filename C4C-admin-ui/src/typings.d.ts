declare module "*.less";
declare module "c4clanguagedetector";

type StatsObject = Record<string, unknown>;

interface JQuery {
  [x: string]: any;
  comments(blnDeep?: boolean): JQuery<any>;
}

interface JQueryStatic {
  t(i: any): string;
}
