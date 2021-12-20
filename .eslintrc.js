module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
    ],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'vue/one-component-per-file': 'off',
        'vue/max-attributes-per-line': 'off'
    }
};