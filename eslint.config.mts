import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";
import * as eslintConfig from '@crawlio/config/default/eslint.config.mjs'

export default defineConfig([
  { 
    extends: [eslintConfig.default]
  },
  { 
    files: ["**/*.md"], 
    plugins: { markdown }, 
    language: "markdown/gfm", 
    extends: ["markdown/recommended"] },
]);
