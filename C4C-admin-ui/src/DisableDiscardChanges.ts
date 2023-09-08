import { waitForKeyElements } from "./waitForKeyElements";

export class DisableDiscardChanges implements C4CAdminUIPlugin {
  name: string = "DisableDiscardChanges";
  type: PluginType = "trigger";
  fire(stats: StatsRecord): void {
    waitForKeyElements('footer[class="sapMPageFooter"]', this.fireInternal);
  }

  fireInternal(stats: StatsRecord): void {
    // too lazy to figure out how to prevent the UI from overwriting my changes while the
    // adaptation UI is loading
    let bdis = $('footer[class="sapMPageFooter"] bdi');
    if (!bdis.length) {
      return;
    }

    bdis[0].style.color = "grey";
    let buttons = $('footer[class="sapMPageFooter"] button');
    buttons[0].style.pointerEvents = "none";

    setTimeout(() => {
      let bdis = $('footer[class="sapMPageFooter"] bdi');
      bdis[0].style.color = "grey";
      let buttons = $('footer[class="sapMPageFooter"] button');
      buttons[0].style.pointerEvents = "none";
    }, 5 * 1000);
    console.log("DisableDiscardChanges", stats);
  }
}
