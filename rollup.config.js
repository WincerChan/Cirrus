import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const LoadPlugins = () => {
  return [
    resolve({
      browser: true,
    }),
    commonjs(
    ),
    replace({
      __buildEnv__: 'production',
      __buildDate__: () => new Date(),
      __buildVersion: 15,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ]
}

export default [{
  input: 'assets/scripts/workbox.js',
  output: {
    file: 'static/service-worker.js',
    format: 'cjs'
  },
  plugins: LoadPlugins(),
},
{
  input: 'assets/scripts/entrypoint.js',
  output: {
    dir: './wir/js/',
    format: 'cjs',
    entryFileNames: 'defer.[hash].js',
    chunkFileNames: 'defer.[hash].js',
  },
  plugins: LoadPlugins(),
},
];
