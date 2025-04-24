import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true, // 一般只需要配置  javascriptEnabled就行，modifyVars也可以稍微配置
        charset: false,
        // modifyVars: {
        //   // 更改主题在这里
        //   'primary-color': 'red',
        //   'link-color': '#1DA57A',
        //   'border-radius-base': '2px',
        // },
        //引入了全局的 LESS 文件 global.less  使用全局样式文件更改样式
        additionalData: `@import "./src/assets/css/global.less";`,
      },
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          remUnit: 16,
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['norem'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
