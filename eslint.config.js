import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      {
        plugins: { prettier: prettierPlugin },
        rules: {
          "prettier/prettier": [
            "error",
            {
              semi: true,
              singleQuote: false,
              trailingComma: "all",
              printWidth: 100,
              tabWidth: 2,
              bracketSpacing: true,
              arrowParens: "always",
            },
          ],
        },
      },
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "no-console": "error",
      "react-hooks/rules-of-hooks": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", vars: "all", args: "after-used" },
      ],
    },
  },
]);
