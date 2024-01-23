import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint' 
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MyElement Docs',
  description: 'A VitePress Site',
  vite: {    
    plugins: [
      vueJsx(),
      eslint()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  appearance: false,
  themeConfig: {
    siteTitle:  'MyElement Docs',
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件及API', link: '/component' },
      { text: '相关思考', link: '/think' },
    ],

    sidebar: [
      {
        text: '组件及API',
        items: [
          { text: 'Button', link: '/components/button.md' },
          { text: 'Collapse', link: '/components/collapse.md' },
          // { text: 'Icon', link: '/components/Icon.md' },
          { text: 'Form', link: '/components/form.md' },
          { text: 'Input', link: '/components/input.md' },
          { text: 'Message', link: '/components/message.md' },
          { text: 'Select', link: '/components/select.md' },
          { text: 'Switch', link: '/components/switch.md' },
          { text: 'Tooltip', link: '/components/tooltip.md' },
        ],
      },
      {
        text: '相关思考及总结',
        items: [
          { text: '色彩参考', link: '/note/0色彩参考.md' },          
          { text: '基础组件', link: '/note/1基础组件.md' },          
          { text: '表单组件', link: '/note/1表单组件.md' },          
          { text: '需要测试', link: '/note/2你需要测试.md' },          
          { text: '编写测试代码', link: '/note/3编写测试代码.md' },
          { text: '组件通信', link: '/note/4组件通信.md' },
          { text: '了解模块化', link: '/note/5模块化了解.md' },
          { text: '打包发布', link: '/note/6组件库打包.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fridolph/my-element-plus' }
    ],
  },
})
