module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/strict', 'plugin:import-x/recommended', 'plugin:import-x/typescript'],
    root: true,
    env: { browser: true, es2020: true },
    ignorePatterns: ['dist', 'lib', '.eslintrc.cjs'],
    settings: {
        'import-x/resolver': {
            typescript: true,
            node: true
        }
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-explicit-any': 'warn',
        'import-x/no-named-as-default': 'off',
        'import-x/no-default-export': 'error'
    }
};
