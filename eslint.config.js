import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';

const aliases = ['@assets', '@components', '@config', '@contexts', '@data', '@hoc', '@hooks', '@pages', '@styles', '@utility', '@views'];

const internalGroups = () => {
    const groups = [];
    aliases.forEach((alias) => {
        groups.push(alias);
        groups.push(`${alias}/**`);
    });
    return groups;
};

export default tseslint.config(
    {
        ignores: ['**/dist', '**/lib', '**/.prettierrc.*']
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    jsxA11y.flatConfigs.strict,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'react-refresh': reactRefresh,
            perfectionist
        },
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    disallowTypeAnnotations: false
                }
            ],
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'alphabetical',
                    order: 'asc',
                    ignoreCase: true,
                    newlinesBetween: 'never',
                    matcher: 'minimatch',
                    internalPattern: ['^~/', ...internalGroups()],
                    groups: [
                        'type',
                        'types',
                        ['internal-type', 'parent-type', 'sibling-type', 'index-type'],
                        'react',
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                        'object',
                        'unknown',
                        'style'
                    ],
                    customGroups: {
                        value: {
                            react: ['react', 'react-*'],
                            types: '@types'
                        },
                        type: {
                            react: ['react', 'react-*'],
                            types: '@types'
                        }
                    }
                }
            ],
            'perfectionist/sort-exports': [
                'error',
                {
                    type: 'alphabetical',
                    order: 'asc'
                }
            ]
        }
    }
);
