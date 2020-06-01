const buble = require('@rollup/plugin-buble'); 
const typescript = require('@rollup/plugin-typescript');

const commonConifg = {
  input: 'src/js/index.ts',
  plugins: [
    typescript(),
    buble()
  ],
  watch: {
    include: 'src/js/**'
  }
}

export default [
  {
    ...commonConifg,
    output: {
      file: 'src/core/index.js',
      format: 'esm'
    },
  },
  {
    ...commonConifg,
    output: {
      file: 'src/wechat-miniprogram/MyTopo.js',
      format: 'esm'
    }
  }
];