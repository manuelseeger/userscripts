const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

// ==UserScript==
// @name         C4C Admin helper
// @namespace    http://www.swisslife.ch
// @version      0.1
// @description  Help our C4C admins
// @author       Manuel Seeger
// @match        https://*my350201-sso.crm.ondemand.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ondemand.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==

module.exports = {
  name: "C4C Admin UI",
  description: "Help our C4C admins",
  namespace: "https://manuelseeger.de",
  version: version,
  author: author,
  source: repository.url,
  match: [
    "https://my344469-sso.crm.ondemand.com/*",
    "https://my343942-sso.crm.ondemand.com/*",
    "https://my350201-sso.crm.ondemand.com/*",
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
  ],
  grant: ["GM.xmlHttpRequest"],
  connect: ["httpbin.org"],
  "run-at": "document-end",
};
