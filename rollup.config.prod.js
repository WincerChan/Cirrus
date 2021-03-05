const plugin = require("./rollup.config")

export default [{
  input: 'assets/scripts/workbox.js',
  output: {
    file: 'static/service-worker.js',
    format: 'cjs'
  },
  plugins: plugin(),
},
{
  input: 'assets/scripts/entrypoint.js',
  output: {
    dir: './wir/js/',
    format: 'cjs',
    entryFileNames: 'defer.[hash].js',
    chunkFileNames: 'defer.[hash].js',
  },
  plugins: plugin(),
},
];
