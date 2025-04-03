import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'only-warn': onlyWarn,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwind,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Import 관련 규칙
      'import/no-unresolved': 'off', // Vite alias 고려
      'import/no-named-default': 'error',
      'import/no-default-export': 'error',

      // Simple Import Sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // TypeScript rules: 중복 검사 방지 no-unused-vars 의 명시적 'off'
      '@typescript-eslint/no-unused-vars': 'off',

      // Unused Imports
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'import/no-unresolved': 'off',
      'import/no-named-default': 'error',

      // React 관련 규칙
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TailwindCSS 관련 규칙
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'off',

      // Prettier 적용
      'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // TypeScript paths 참조
        },
      },
    },
  },
  {
    files: [
      // config 파일 패턴 매칭
      '**/*.config.mjs',
      '**/*.config.js',
      '**/*.config.ts',
      '**/vite.config.*',
      '**/jest.config.*',
      '**/webpack.config.*',
      '**/next.config.*',
      // 필요한 다른 config 파일 패턴 추가
    ],
    rules: {
      'import/no-default-export': 'off', // config 파일들에서는 default export 허용
    },
  }
);
