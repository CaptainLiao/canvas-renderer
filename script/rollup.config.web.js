const commonConifg = require('./rollup.config.base')

export default [
  {
    ...commonConifg,
    output: {
      file: 'example/web/CanvasStage.js',
      format: 'esm'
    },
  }
];