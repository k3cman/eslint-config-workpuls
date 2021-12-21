module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        // no need to explain
        "no-return-await": "off",
        "no-else-return": "off",
        "no-continue": "off",
        "no-await-in-loop": "off",
        "prefer-destructuring": "off",
        "no-plusplus": "off",
        "no-case-declarations": "off",
        "no-restricted-syntax": "off",
        "no-buffer-constructor": "off",
        "no-console": "off",
        "max-classes-per-file": "off",
        "import/first": "off",
        "import/order": "off",
        "no-empty-function": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/no-empty-function": "off",
        "operator-assignment": "off",
        // strange behavour
        "import/no-useless-path-segments": "off",

        // check about this
        "consistent-return": "off",
        "array-callback-return": "off",
        "prefer-object-spread": "off",
        "no-restricted-globals": "off",

        "unused-imports/no-unused-imports": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "no-useless-escape": "warn",
        "no-underscore-dangle": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "prefer-template": "off",
        "no-useless-return": "off",
        // THis disabled using of prototype calls like hasOwnProperty
        "no-prototype-builtins": "off",
        // Should we turn off destructuring of arrays/objects
        "@typescript-eslint/unbound-method": [
          "error",
          {
            ignoreStatic: true,
          },
        ],
      },
    },
  ],
};
