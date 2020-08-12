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
      { text: 'Home', link: '/' },
      {
        text: "Example menu",
        items: [
          { text: "Guide", link: "/guide/" },
          { text: "How-to guides", link: "/how-to/" },
          { text: "something", link: "/something/" },
          { text: "another thing", link: "/another-thing/" },
        ]
      },
      { text: 'Five Remembrances', link: '/five-remembrances/' },
      { text: 'True Joy in Life', link: '/true-joy-in-life/' },
      { text: 'Primacy of Being', link: '/primacy-of-being/' },
      { text: 'Zen', link: '/zen/' },
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
