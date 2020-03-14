module.exports = {
    env: {
        es6: true,
        node: true,
    },
    plugins: ['prettier'], // prettier plugin adds prettier/prettier eslint rule that uses prettier to analyze AST and fails if code formatting doesn't agree with prettier
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended', // turn off default EsLint rules that might conflict with TypeScript ( like no-undef fails for types )
        'plugin:@typescript-eslint/recommended', // enable awesome @typescript-eslint rules
        'prettier/@typescript-eslint', // disables @typescript-eslint rules that might conflict with prettier
        'plugin:prettier/recommended', // disables eslint formatting related rules so they don't conflict with prettier and sets prettier/prettier eslint rule to "error" ( it disables eslint formatting rules by extending the "eslint-config-prettier" shareable ESLint config, so it needs "eslint-config-prettier" to work properly )
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
    },
    rules: {
        curly: ['error', 'all'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
