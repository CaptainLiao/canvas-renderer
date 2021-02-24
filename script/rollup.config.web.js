const replace = require('@rollup/plugin-replace')
const commonConifg = require('./rollup.config.base')

import serve from 'rollup-plugin-serve';

export default {
  ...commonConifg,
  input: 'example/web/index.js',
  output: {
    file: 'example/web/canvas-renderer.js',
    format: 'esm'
  },

  plugins: commonConifg.plugins.concat([
    replace({
      __buildTarget__: JSON.stringify('web'),
      preventAssignment: true
    }),

    serve({
      open: true, // 自动打开页面
      host: getIPAddress(),
      port: 9000, 
      openPage: '/example/web/index.html', // 打开的页面
      contentBase: ''
    })
  ])
}

function getIPAddress(){
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
      var iface = interfaces[devName];
      for(var i=0;i<iface.length;i++){
          var alias = iface[i];
          if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
              return alias.address;
          }
      }
  }
}
