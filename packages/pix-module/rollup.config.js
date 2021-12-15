/* import commonjs from "@rollup/plugin-commonjs"; */
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: "./lib/cjs/index.js",
      format: "cjs",
    },
    {
      file: "./lib/esm/index.js",
      format: "es",
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    resolve(),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};

export default config;
