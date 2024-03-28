const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) =>
    path.relative(process.cwd(), f),
  )}`;

const buildPrettierComand = 'prettier --write';

const buildTypecheckComand = () => 'pnpm typecheck';

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildTypecheckComand, buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,css,md}': [buildPrettierComand],
};
