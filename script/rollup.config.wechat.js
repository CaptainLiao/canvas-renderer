const commonConifg = require('./rollup.config.base')

export default [
  {
    ...commonConifg,
    output: {
      file: 'example/wechat-miniprogram/MyTopo.js',
      format: 'esm'
    },
  }
];