import replace from '@rollup/plugin-replace'
const commonConifg = require('./rollup.config.base')

import { terser } from 'rollup-plugin-terser'


export default [
  {
    ...commonConifg,
    output: {
      file: 'dist/mp/canvas-renderer.min.js',
      format: 'esm'
    },
    plugins: commonConifg.plugins.concat([
      replace({
        __buildTarget__: JSON.stringify('mp'),
        preventAssignment: true
      }),
      terser()
    ])
  
  }
];