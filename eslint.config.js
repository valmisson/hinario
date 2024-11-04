import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'
import standard from './config/eslint-standard.js'

export default ts.config(
  ...standard.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte'],

    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', '*.config.*']
  },
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }]
    }
  }
)
