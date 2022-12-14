import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript';

const path = require('path');
const resolvePath = str => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2015",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolvePath('src/lib/index.ts'),
      name: 'http',
      // the proper extensions will be added
      fileName: 'index'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react',"react-dom"],
      plugins:[
        // https://github.com/rollup/plugins/tree/master/packages/typescript
        typescript({
          compilerOptions:{
            "outDir":"dist",
            "rootDir": "src/lib",
            "declaration": true,
          }
        })
      ]
    },
  },
  plugins: [react()]
})
