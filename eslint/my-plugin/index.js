// eslint-disable-next-line @typescript-eslint/no-require-imports
const enforceDefaultImportRule = require("./enforce-default-import");
const plugin = {
  rules: { "enforce-default-import": enforceDefaultImportRule },
};
module.exports = plugin;
