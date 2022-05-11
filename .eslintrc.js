module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['json', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off',
    'vue/script-setup-uses-vars': 'warn',
  },
}
