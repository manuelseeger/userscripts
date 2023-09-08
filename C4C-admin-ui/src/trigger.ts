jQuery.prototype.comments = function (blnDeep: boolean) {
  var blnDeep = blnDeep || false;
  var jComments = $([]);

  // Loop over each node to search its children for
  // comment nodes and element nodes (if deep search).
  this.each(function (intI: any, objNode: any) {
    var objChildNode = objNode.firstChild;
    var strParentID = $(this).attr("id");

    // Keep looping over the top-level children
    // while we have a node to examine.
    while (objChildNode) {
      // Check to see if this node is a comment.
      if (objChildNode.nodeType === 8) {
        // We found a comment node. Add it to
        // the nodes collection wrapped in a
        // DIV (as we may have HTML).
        jComments = jComments.add(
          "<div rel='" + strParentID + "'>" + objChildNode.nodeValue + "</div>",
        );
      } else if (blnDeep && objChildNode.nodeType === 1) {
        // Traverse this node deeply.
        jComments = jComments.add($(objChildNode).comments(true));
      }

      // Move to the next sibling.
      objChildNode = objChildNode.nextSibling;
    }
  });

  // Return the jQuery comments collection.
  return jComments;
};

export default async function trigger(stats: StatsObject, callback: Function) {
  const newstats: StatsObject = await findPerformanceStats();
  if (stats === null || newstats["ui-step"] !== stats["ui-step"]) {
    stats = newstats;
    callback(stats);
  }
  setTimeout(trigger, 1000, stats, callback);
}

function findPerformanceStats(): Promise<StatsObject> {
  return new Promise((resolve) => {
    const checkStats = () => {
      const comments = $("html").comments();
      if (comments.length === 0) {
        console.log("Will keep looking");
        setTimeout(checkStats, 1000);
      } else {
        if (
          comments[0].innerHTML.startsWith(
            "\n=====Performance Statistics=====\n",
          )
        ) {
          const statsObject = comments[0].innerHTML.match(/\{[^{}]*\}/)[0];
          const newStats: StatsObject = JSON.parse(statsObject);

          if (newStats !== null) {
            resolve(newStats);
          } else {
            setTimeout(checkStats, 1000);
          }
        }
      }
    };

    checkStats();
  });
}
