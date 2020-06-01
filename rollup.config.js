const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');

export default {
  input: 'src/js/index.ts',
  output: {
    dir: 'src/core',
    format: 'esm'
  },
  plugins: [
    typescript(),
    buble()
  ],
  watch: {
    include: 'src/js/**'
  }
};