# Phantom Config

## Consistency Across React TypeScript Codebases

This package offers preset configurations for ESLint, Prettier, and Stylelint to be extended when using those tools. It also installs the required packages as peer-dependencies to make managing and upgrading them a breeze.

### Using

#### ESLint

As of `phantom-config@1.0.0`, the supported version of ESLint is ESLint 9 based on flattened configs. For using with ESLint 8, please use `phantom-config@0.17.2`. 

Create an `eslint.config.js` file in the root of the project containing:

```
import phantomConfig from 'phantom-config/eslint'

export default [
    ...phantomConfig,
];
```

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

```json
"lint": "npx eslint . --report-unused-disable-directives --fix && tsc --noEmit --emitDeclarationOnly false",
"prettier": "prettier ./ --write --ignore-path ./node_modules/phantom-config/.prettierignore",
"stylelint": "npx stylelint '**/*.{css,scss}' --fix",
"format": "npm run lint && npm run stylelint && npm run prettier"
```
