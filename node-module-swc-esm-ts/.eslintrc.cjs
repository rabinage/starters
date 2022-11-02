module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    node: true,
    "jest/globals": true,
    es2021: true,
  },
  ignorePatterns: "dist/**",
  plugins: ["@typescript-eslint", "import", "prettier", "import", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "import/no-unresolved": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
  },
};
