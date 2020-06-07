const commonConifg = require('./rollup.config.base')

export default [
  {
    ...commonConifg,
    output: {
      file: 'example/web/MyTopo.js',
      format: 'esm'
    },
  }
];