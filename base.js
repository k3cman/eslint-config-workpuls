module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "airbnb-typescript/base",
        "plugin:prettier/recommended",
      ],
      plugins: ["unused-imports"],
    },
  ],
};
