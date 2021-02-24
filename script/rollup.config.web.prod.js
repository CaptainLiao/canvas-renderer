const replace = require('@rollup/plugin-replace')
const commonConifg = require('./rollup.config.base')

export default {
  ...commonConifg,
  output: {
    file: 'dist/web/CanvasRenderer.js',
    format: 'esm'
  },

  plugins: commonConifg.plugins.concat([
    replace({
      __buildTarget__: JSON.stringify('web'),
      preventAssignment: true
    }),
  ])
}