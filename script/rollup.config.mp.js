import replace from '@rollup/plugin-replace';

const commonConifg = require('./rollup.config.base')


export default [
  {
    ...commonConifg,
    output: {
      file: 'example/wx-mp/canvas-renderer.js',
      format: 'esm'
    },
    plugins: commonConifg.plugins.concat([
      replace({
        __buildTarget__: JSON.stringify('mp'),
        preventAssignment: true
      })
    ])
  
  }
];