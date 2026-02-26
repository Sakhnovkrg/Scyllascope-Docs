import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scyllascope Docs",
  description: "Oscilloscope with built-in recorder",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manual', link: '/get-started/introduction' },
      { text: 'Download', link: 'https://dsgdnb.com/plugins/scyllascope' },
      { text: 'Theme Editor', link: 'https://scyllascope-theme-editor.dsgdnb.com/' }
    ],

    sidebar: [
      {
        text: 'Manual',
        items: [
          { text: 'Introduction', link: '/get-started/introduction' },
          { text: 'Installation', link: '/get-started/installation' },
        ]
      }
    ],

    footer: {
      message: '<a href="https://dsgdnb.com/donate">Donate</a>',
      copyright: 'Created by DsgDnB'
    },
  }
})
