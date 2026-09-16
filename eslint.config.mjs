import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Vendored via `npx motion-primitives add`, kept as-installed so future
    // components can be added the same way. Their polymorphic `as` prop
    // pattern (motion.create(dynamicTag) inside the component body) is the
    // library's own documented API and predates the React Compiler rules
    // below, which forbid creating components during render — there's no
    // way to satisfy that rule while keeping the prop polymorphic.
    files: ["components/motion-primitives/**", "hooks/useClickOutside.tsx"],
    rules: {
      "react-hooks/static-components": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
]);

export default eslintConfig;
