import replace from '@rollup/plugin-replace';

const commonConifg = require('./rollup.config.base')


export default [
  {
    ...commonConifg,
    output: {
      //file: 'dist/cangine.mp.js',
      file: 'example/wx-mp/cangine.mp.js',
      format: 'esm'
    },
    plugins: commonConifg.plugins.concat([
      replace({
        __buildTarget__: JSON.stringify('wx-mp'),
      })
    ])
  
  }
];