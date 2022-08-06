module.exports = {
  '*.[j|t]s?(x)': ['yarn typecheck', 'yarn lint:fix'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
