module.exports = {
  title: 'The Tao of Art Earth Tech',
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
      { text: 'Home', link: '/' },
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': ''
      }
    ]
  ]
}
