module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        // Turn off Airbnb React rules
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        // If we turn this on, any regex we are using will be read as an error
        "no-useless-escape": "warn",
        // We need this turned off because we are using _ for BehaviourSubject naming in services
        "no-underscore-dangle": "off",
        // We can use this in the future but right now we are using + to concatenate strings in most of the places
        "prefer-template": "off",
        // No param reassign should be enabled in order to enforce immutable code style
        "no-param-reassign": "off",
        // We need this for new coding style where we use only if and not else and we use early return if the conditions are not met (by dusan's recommendation)
        "no-useless-return": "off",
        // THis disabled using of prototype calls like hasOwnProperty
        "no-prototype-builtins": "off",
        "consistent-return": "off",
        "no-plusplus": "off",
        "array-callback-return": "off",
        "default-case": "off",
        "prefer-destructuring": "off",
        "no-nested-ternary": "off",
        // Should we turn off destructuring of arrays/objects
        "@typescript-eslint/unbound-method": [
          "error",
          {
            ignoreStatic: true,
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            prefix: "app",
            style: "kebab-case",
            type: "element",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            prefix: "app",
            style: "camelCase",
            type: "attribute",
          },
        ],
      },
    },
  ],
};
