import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint' 
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'my-element-docs',
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
    siteTitle:  'My Element Docs',
    logo: './vite.svg',
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
          { text: 'Form', link: '/components/form.md' },
          { text: 'Input', link: '/components/input.md' },
          { text: 'Input', link: '/components/input.md' },
          { text: 'Message', link: '/components/message.md' },
          { text: 'Select', link: '/components/select.md' },
          { text: 'Switch', link: '/components/switch.md' },
          { text: 'Tooltip', link: '/components/tooltip.md' },
        ],
      },
      {
        text: '相关思考',
        items: [
          { text: 'Button', link: '/note/button.md' },
          { text: 'Collapse', link: '/note/collapse.md' },
          { text: 'Form', link: '/note/form.md' },
          { text: 'Input', link: '/note/input.md' },
          { text: 'Input', link: '/note/input.md' },
          { text: 'Message', link: '/note/message.md' },
          { text: 'Select', link: '/note/select.md' },
          { text: 'Switch', link: '/note/switch.md' },
          { text: 'Tooltip', link: '/note/tooltip.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fridolph/my-element-plus' }
    ],
  },
})
