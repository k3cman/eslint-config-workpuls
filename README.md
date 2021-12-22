# Workpuls Eslint Configuration

### Installation for Angular

#### Running the migration script from tslint to eslint

[Angular Eslint Repo](https://github.com/angular-eslint/angular-eslint)

Step 1: `ng add @angular-eslint/schematics`

Step 2: `ng g @angular-eslint/schematics:convert-tslint-to-eslint`

#### Installing this configuration

Step 1: Install dependencies:
`npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-unused-imports prettier`

Step 2: Update eslint configuration

We need to replace schematics config with workpuls/base and workpuls/angular configurations for \*.ts files
Here is how the file will look

```ts
{
  "root": true,
  "ignorePatterns": [
    "projects/**/*",
    "**/dist/*",
    "**/plugins/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json",
          "e2e/tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "eslint-config-workpuls/base",
        "eslint-config-workpuls/angular"
      ]
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    }
  ]
}

```

### Installation for NodeJs

#### Install dependencies

`npm install -D eslint-config-airbnb-typescript eslint-plugin-prettier prettier eslint-plugin-unused-imports`

Remove all previous settings in extends, rules and plugins in configuration for ts files.
Then just set extends like this:

```ts
  "extends": [
        "eslint-config-workpuls/base",
        "eslint-config-workpuls/node"
      ]
```

NOTE: Nodejs only containts overridden rules for base configuration

### Additional note

The project we are apllying this configuration to, do not have to have all dependencies installed, its important to have dependencies that are used in the specific configuration, so if you are going to use only base configuration this would be sufficient
`npm install -D eslint-config-airbnb-typescript eslint-plugin-prettier prettier eslint-plugin-unused-imports`
