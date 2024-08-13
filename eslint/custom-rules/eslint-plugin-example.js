/* eslint-disable @typescript-eslint/no-require-imports */
const fooBarRule = require("./enforce-foo-bar");
const defaultImportRule = require("./enforce-default-import");
const plugin = {
  rules: {
    "enforce-foo-bar": fooBarRule,
    "enforce-default-import": defaultImportRule,
  },
};
module.exports = plugin;
