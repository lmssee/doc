import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
// import * as mdx from 'eslint-plugin-mdx';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // {
  //   ...mdx.flat,
  //   processor: mdx.createRemarkProcessor({
  //     lintCodeBlocks: true,
  //     languageMapper: {},
  //   }),
  // },
  // {
  //   ...mdx.flatCodeBlocks,
  //   rules: {
  //     ...mdx.flatCodeBlocks.rules,
  //   },
  // },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintConfigPrettier,
];
