import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import * as eslintConfig from '@crawlio/config/default/eslint.config.mjs';

export default defineConfig([
    { 
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.mts'],
        extends: [eslintConfig.default]
    },
    { 
        files: ['**/*.md'], 
        plugins: { markdown }, 
        language: 'markdown/gfm', 
        extends: ['markdown/recommended']
    }
]);
