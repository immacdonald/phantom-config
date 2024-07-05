const createPathGroup = (pattern, group = 'internal') => [
    {
        pattern,
        group,
        position: 'after'
    },
    {
        pattern: `${pattern}/**`,
        group,
        position: 'after'
    }
];

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
        '@typescript-eslint/explicit-function-return-type': 'warn',
        'import-x/no-named-as-default': 'off',
        'import-x/no-default-export': 'error',
        'import-x/order': [
            'error',
            {
                pathGroups: [
                    ...createPathGroup('@types', 'type'),
                    ...createPathGroup('@api'),
                    ...createPathGroup('@assets'),
                    ...createPathGroup('@components'),
                    ...createPathGroup('@config'),
                    ...createPathGroup('@contexts'),
                    ...createPathGroup('@data'),
                    ...createPathGroup('@hooks'),
                    ...createPathGroup('@styles'),
                    ...createPathGroup('@utility'),
                    ...createPathGroup('@views')
                ],
                groups: ['type', 'external', 'builtin', 'internal', 'parent', 'sibling', 'index']
            }
        ]
    }
};
