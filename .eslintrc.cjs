module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 0,
    'no-new': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    // 以下为vue3的一些规则
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': 0
  },
  globals: {
    defineOptions: 'readonly',
  },
}
