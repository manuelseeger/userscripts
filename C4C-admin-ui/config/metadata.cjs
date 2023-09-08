const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: "C4C Admin UI",
  description: "Help our C4C admins",
  namespace: "https://manuelseeger.de",
  version: version,
  author: author,
  source: repository.url,
  match: ["https://*.crm.ondemand.com/*"],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
  ],
  "run-at": "document-end",
};
