module.exports = {
  title: 'The Tao of Life Itself',
  description: 'Guide to our way of being and doing',
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://gitlab.com/artearthtech/tao',
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'About', items: [
          { text: 'About', link: '/#about' },
          { text: 'Plans', link: '/plans/' },
          { text: 'Governance', link: '/governance/' }
        ]
      },
      { text: 'Why', items: [
          { text: 'Narrative', link: '/narrative/' },
          { text: 'Reason for existence (SCQH)', link: '/scqh/' }
        ]
      },
      { text: 'Culture', link: '/culture/' },
      { text: 'Hubs', link: '/hubs/' },
      { text: 'Getting Stuff Done', link: '/#getting-stuff-done' },
      { text: 'Reference', link: '/#reference' } 
    ]
  },
  plugins: [
    [
      'vuepress-plugin-mermaidjs',
      '@vuepress/plugin-google-analytics',
      {
        'ga': ''
      }
    ]
  ]
}
