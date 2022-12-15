module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier"
  ],
  defaultSeverity: "warning",
  rules: {
    "custom-property-pattern": null,
    "no-missing-end-of-source-newline": null
  },
  ignoreFiles: ["**/node_modules/**"]
};
