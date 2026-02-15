import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [ 'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }], // https://eslint.org/docs/latest/rules/no-unused-vars
            camelcase: ['error'], // https://eslint.org/docs/latest/rules/camelcase
            'comma-dangle': ['error', 'never'], // https://eslint.org/docs/latest/rules/comma-dangle
            'comma-spacing': ['error', { before: false, after: true }], // https://eslint.org/docs/latest/rules/comma-spacing
            'eol-last': ['error', 'always'], // https://eslint.org/docs/latest/rules/eol-last
            'key-spacing': ['error', { afterColon: true }], // https://eslint.org/docs/latest/rules/key-spacing
            'keyword-spacing': ['error', { before: true, after: true }], // https://eslint.org/docs/latest/rules/keyword-spacing
            'newline-before-return': 'error', // https://eslint.org/docs/latest/rules/newline-before-return
            'no-duplicate-imports': 'error', // https://eslint.org/docs/latest/rules/no-duplicate-imports
            'no-var': 'error', // https://eslint.org/docs/latest/rules/no-var
            'object-curly-spacing': ['error', 'always', { arraysInObjects: false, objectsInObjects: false }], // https://eslint.org/docs/latest/rules/object-curly-spacing
            'object-shorthand': ['error', 'always'], // https://eslint.org/docs/latest/rules/object-shorthand
            'one-var': ['error', 'never'], // https://eslint.org/docs/latest/rules/one-var
            'quote-props': ['error', 'as-needed', { unnecessary: true }], // https://eslint.org/docs/latest/rules/quote-props
            quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }], // https://eslint.org/docs/latest/rules/quotes
            semi: ['error', 'always'], // https://eslint.org/docs/latest/rules/semi
            'space-before-blocks': ['error'], // https://eslint.org/docs/latest/rules/space-before-blocks
            indent: ['error', 4] // https://eslint.org/docs/latest/rules/indent
        },
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        ignores: ['**/*.d.ts', '**/*.js']
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
];
