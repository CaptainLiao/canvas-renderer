const commonConifg = require('./rollup.config.base')

export default [
  {
    ...commonConifg,
    output: {
      file: 'src/wechat-miniprogram/MyTopo.js',
      format: 'esm'
    },
  }
];