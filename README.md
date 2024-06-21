# Phantom Config

## Consistency Across React TypeScript Codebases

This package offers preset configurations for ESLint, Prettier, and Stylelint to be extended when using those tools. It also installs the required packages as peer-dependencies to make managing and upgrading them a breeze.

### Useful Scripts

These can be included as scripts in the `package.json` to more easily access the linting and formatting tools included in Phantom Config.

```
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives && tsc --noEmit --emitDeclarationOnly false",
"prettier": "prettier ./ --check",
"prettier:fix": "prettier ./ --write",
"stylelint": "npx stylelint '**/*.scss'",
"stylelint:fix": "npx stylelint '**/*.scss' --fix",
"format": "npm run lint && npm run stylelint:fix && npm run prettier:fix"
```