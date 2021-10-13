const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano")

const production = process.env.NODE_ENV === 'production';
let plugins = [
	//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
	tailwindcss(),
	//But others, like autoprefixer, need to run after,
	autoprefixer(),
];
if (production) {
	plugins.push(
		cssnano({ preset: 'default' })
	)
}

const config = {
	syntax: 'postcss-scss',
	plugins: plugins
};

module.exports = config;