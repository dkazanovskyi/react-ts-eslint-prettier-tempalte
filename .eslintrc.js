module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
  },
  plugins: ["@typescript-eslint", "react", "plugin:import/typescript"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  },
};
