const replace = require('@rollup/plugin-replace');
const resolve = require('@rollup/plugin-node-resolve').default;
const { terser } = require("rollup-plugin-terser");
const { babel } = require('@rollup/plugin-babel');
const commonjs = require("@rollup/plugin-commonjs");


const LoadPlugins = () => {
    return [
        resolve({
            browser: true,
        }),
        commonjs(
        ),
        babel({ babelHelpers: 'bundled' }),
        replace({
            __buildEnv__: 'production',
            __buildDate__: () => new Date(),
            __buildVersion: 15,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        terser(),
    ]
}

module.exports = LoadPlugins;