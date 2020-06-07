const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/core/index.ts',
  plugins: [
    typescript(),
    buble()
  ],
  watch: {
    include: 'src/core/**'
  }
}