module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0,
        'import/no-unresolved': 0,
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }]
      }
    }
  ],
  settings: {
    'svelte3/ignore-styles': () => true,
    'svelte3/typescript': () => require('typescript')
  },
  ignorePatterns: ['*.cjs'],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }]
  }
}
