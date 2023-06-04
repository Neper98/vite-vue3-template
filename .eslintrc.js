module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {}
}