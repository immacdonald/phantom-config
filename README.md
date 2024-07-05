# Phantom Config

## Consistency Across React TypeScript Codebases

This package offers preset configurations for ESLint, Prettier, and Stylelint to be extended when using those tools. It also installs the required packages as peer-dependencies to make managing and upgrading them a breeze.

### Using

#### ESLint

Create an `.eslintrc.cjs` file in the root of the project containing:

```
module.exports = {
    extends: ['./node_modules/phantom-config/.eslintrc.cjs']
};
```

**Note**: The extension is done using a relative link to `node_modules` rather than the package directly due to ESLint only accepting packages containing `eslint-config` in the name.

#### Prettier

Create a `.prettierrc.cjs` file in the root of the project containing:

```
module.exports = require("phantom-config/prettier");
```

#### Stylelint

Create a `.stylelintrc.json` file in the root of the project containing:

```
{
    "extends": ["phantom-config/stylelint"]
}
```

### Useful Scripts

These can be included as scripts in the `package.json` to more easily access the linting and formatting tools included in Phantom Config.

```
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives && tsc --noEmit --emitDeclarationOnly false",
"lint:fix": "eslint . --ext ts,tsx --report-unused-disable-directives --fix && tsc --noEmit --emitDeclarationOnly false",
"prettier": "prettier ./ --check --ignore-path ./node_modules/phantom-config/.prettierignore",
"prettier:fix": "prettier ./ --write --ignore-path ./node_modules/phantom-config/.prettierignore",
"stylelint": "npx stylelint '**/*.{css,scss}'",
"stylelint:fix": "npx stylelint '**/*.{css,scss}' --fix",
"format": "npm run lint:fix && npm run stylelint:fix && npm run prettier:fix"
```
