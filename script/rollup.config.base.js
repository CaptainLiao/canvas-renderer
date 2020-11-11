const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');
const { babel } = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/index.js',
  plugins: [
    typescript(),
    babel({
      presets: ['@babel/preset-env']
    }),
  ],
  watch: {
    include: 'src/**'
  }
}