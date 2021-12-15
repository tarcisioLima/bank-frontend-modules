import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const external = [...Object.keys(pkg.dependencies || {})];

console.log("External dependencies: ", external);

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
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};

export default config;
