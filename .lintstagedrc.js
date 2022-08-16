module.exports = {
  '*.[j|t]s?(x)': ['yarn typecheck', 'yarn lint:fix'],
  '*.test.ts?(x)': ['yarn test --bail'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
