module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "eslint:recommended",
        "airbnb-typescript/base",
        "plugin:prettier/recommended",
      ],
      plugins: ["unused-imports"],
    },
  ],
};
