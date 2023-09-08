import "./style/main.less";
import GM_fetch from "@trim21/gm-fetch";
import trigger from "./trigger";
import * as pluginModules from "./plugins";

async function main() {
  console.log("C4C UI helper start");
  trigger(null, c4cadminui);
}

// load plugins
const plugins: C4CAdminUIPlugin[] = [];
for (const Plugin of Object.values(pluginModules)) {
  plugins.push(new Plugin());
}

async function c4cadminui(stats: StatsRecord) {
  console.log("c4cadminui", stats);

  const panel = generatePanel();

  // loop over all plugins
  for (const plugin of plugins) {
    if (plugin.type === "ui") {
      const pluginContent = plugin.run(stats);
      panel.find("#c4cadminuipanel-content").append(pluginContent);
    }
    if (plugin.type === "trigger") {
      plugin.fire(stats);
    }
  }
  $("body").append(panel);
}

function generatePanel() {
  const panel = $(`<div id="c4cadminuipanel">
    <p>C4C Admin UI</p>
    <div id="c4cadminuipanel-content"></div>
  </div>`);

  return panel;
}

main().catch((e) => {
  console.log(e);
});
