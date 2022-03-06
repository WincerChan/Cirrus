const helper = require('windicss/helpers');

const production = !process.env.NODE_ENV !== 'production';



module.exports = helper.defineConfig({
  extract: { include: ["./layouts/**/*.html", "./assets/**/*.svg", "./assets/**/*.html", "./assets/**/*.svelte"] },
})