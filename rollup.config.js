import svelte from 'rollup-plugin-svelte';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: 'assets/scripts/workbox.js',
    output: {
        file: 'static/service-worker.js',
        format: 'iife'
    },
    plugins: [
        resolve({
            browser: true,
        }),
        replace({
            __buildEnv__: 'production',
            __buildDate__: () => new Date(),
            __buildVersion: 15,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        terser(),
    ],
}, {
    inlineDynamicImports: true,
    input: 'assets/scripts/main.js',
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: production ? './BlogContent/wir/js/defer.prod.js' : './static/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            },
            preprocess: sveltePreprocess({
                sourceMap: !production,
            }),
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        css({ output: 'bundle.css' }),
        commonjs(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}];