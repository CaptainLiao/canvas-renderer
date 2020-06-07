const commonConifg = require('./rollup.config.base')

export default [
  {
    ...commonConifg,
    output: {
      file: 'src/web/MyTopo.js',
      format: 'esm'
    },
  }
];