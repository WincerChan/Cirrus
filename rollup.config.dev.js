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
    dir: './static/',
    format: 'cjs',
    entryFileNames: 'bundle.js',
    chunkFileNames: 'bundle.js',
  },
  plugins: plugin(),
},
];
