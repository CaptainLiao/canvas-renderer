
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { babel } = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    typescript(),
    babel({
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled'
    }),
  ],
}