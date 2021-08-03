module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: [],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/no-mutating-props': 0, // 允许props修改
    'vue/no-parsing-error': 0
  }
}
