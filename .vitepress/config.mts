import { defineConfig } from 'vitepress'
import markdownItKbd from 'markdown-it-kbd'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownItKbd)
    }
  },
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
        text: 'Get Started',
        items: [
          { text: 'Introduction', link: '/get-started/introduction' },
          { text: 'Installation', link: '/get-started/installation' },
        ]
      },
      {
        text: 'Header',
        items: [
          { text: 'Mode Selector', link: '/header/mode-selector' },
          { text: 'Waveform Modes', link: '/header/waveform-modes' },
          { text: 'Menu', link: '/header/menu' },
        ]
      },
      {
        text: 'Main',
        items: [
          { text: 'Zoom & Navigation', link: '/main/zoom' },
          { text: 'Time Selection', link: '/main/time-selection' },
          { text: 'dB Ruler', link: '/main/db-label' },
          { text: 'Context Menu', link: '/main/context-menu' },
          { text: 'Instance Sidechain', link: '/main/instance-overlay' },
        ]
      },
      {
        text: 'Footer',
        items: [
          { text: 'Division Selector', link: '/footer/division-selector' },
          { text: 'Gain', link: '/footer/gain' },
          { text: 'BP', link: '/footer/bp' },
          { text: 'Side2SC', link: '/footer/side2sc' },
          { text: 'Hold & Reset', link: '/footer/hold-reset' },
          { text: 'Recorder', link: '/footer/recorder' },
        ]
      },
      {
        text: 'Misc',
        items: [
          { text: 'Hotkeys', link: '/misc/hotkeys' },
        ]
      },
      {
        text: 'Customization',
        items: [
          { text: 'overrides.json', link: '/customization/overrides-json' },
          { text: 'Themes', link: '/customization/themes' },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Sakhnovkrg/Scyllascope-Docs/edit/main/:path',
      text: 'Help to improve'
    },

    footer: {
      message: '<a href="https://dsgdnb.com/donate">Donate</a>',
      copyright: 'Created by DsgDnB'
    },
  }
})
