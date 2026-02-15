import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";
import { eslintConfig } from '@crawlio/config/eslint.config.mjs'

export default defineConfig([
  { 
    files: [ '' ] 
  },
  tseslint.configs.recommended,
  { 
    files: ["**/*.md"], 
    plugins: { markdown }, 
    language: "markdown/gfm", 
    extends: ["markdown/recommended"] },
]);
