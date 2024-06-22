module.exports = {
    semi: true,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 200,
    tabWidth: 4,
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: [
        '<TYPES>^(node:)',
        '<TYPES>',
        '<TYPES>^[.]',
        '^react$',
        '<THIRD_PARTY_MODULES>',
        '^(@api|@components|@config|@data|@icons|@styles|@views)(/.*)$',
        '^(?!.*(?:.css?|.scss)$).*$',
        '.(css|scss)$'
    ]
};
