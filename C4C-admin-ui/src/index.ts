import "./style/main.less";
import GM_fetch from "@trim21/gm-fetch";
import trigger from "./trigger";
import { IndividualCustomer } from "./customer";
import { Contract } from "./contract";
import i18n from "./i18n";

async function main() {
  console.log("C4C UI helper start");
  trigger(null, c4cadminui);
}

async function c4cadminui(stats: StatsObject) {
  console.log("c4cadminui", stats);

  const panel = generatePanel();

  const entities = [new IndividualCustomer(), new Contract()];

  const entity = entities.find((e) => e.isme());

  if (!entity) {
    return;
  }
  panel.append(entity.getApiLink());

  $("body").append(panel);
}

function generatePanel() {
  const panel = $(`<div id="c4cadminuipanel">
    <p>C4C Admin UI</p>
  </div>`);

  return panel;
}

main().catch((e) => {
  console.log(e);
});
