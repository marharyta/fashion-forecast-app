module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    indent: ["warn", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "single"],
    semi: ["error", "always"],
    "prettier/prettier": "error"
  }
};
