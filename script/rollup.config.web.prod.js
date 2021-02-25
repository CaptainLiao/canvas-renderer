const replace = require('@rollup/plugin-replace')
const commonConifg = require('./rollup.config.base')

import { terser } from 'rollup-plugin-terser'

export default {
  ...commonConifg,
  output: {
    file: 'dist/web/canvas-renderer.min.js',
    format: 'esm'
  },

  plugins: commonConifg.plugins.concat([
    replace({
      __buildTarget__: JSON.stringify('web'),
      __buildMode__: JSON.stringify('production'),
      preventAssignment: true
    }),
    terser()
  ])
}