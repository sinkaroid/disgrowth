module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-model-argument": "off",
    "vue/valid-v-model": "off",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "indent": ["error", 2]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};