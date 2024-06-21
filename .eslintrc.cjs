module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    root: true,
    env: { browser: true, es2020: true },
    ignorePatterns: ['dist', 'lib', '.eslintrc.cjs'],
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-explicit-any': 'warn'
    }
};
