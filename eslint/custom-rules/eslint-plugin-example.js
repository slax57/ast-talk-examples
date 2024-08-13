/* eslint-disable @typescript-eslint/no-require-imports */
const fooBarRule = require("./enforce-foo-bar");
const plugin = { rules: { "enforce-foo-bar": fooBarRule } };
module.exports = plugin;
