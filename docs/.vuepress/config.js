module.exports = {
    title: "Routegy Docs",
    description: "Documentation for Routegy (https://routegy.com)",
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'theme-color', content: '#25135f' }]
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-150728185-2'
            }
        ]
    ],
    theme: 'routegy',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'How-to', link: '/how-to/' },
            { text: 'Reference', link: '/reference/' },
            { text: 'Topic', link: '/topic/' },
            { text: 'Tutorial', link: '/tutorial/' },
            { text: 'Blog', link: 'https://blog.routegy.com' },
        ],
        sidebar: 'auto',
        repo: 'routegy/routegy-docs',
        docsDir: 'docs',
        editLinks: true,
        lastUpdated: true,
        footer: {
            contact: [
              {
                type: 'github',
                link: 'https://github.com/routegy',
              },
              {
                type: 'twitter',
                link: 'https://twitter.com/routegy',
              },
              {
                type: 'linkedin',
                link: 'https://www.linkedin.com/company/routegy/about/',
              },
            ],
            copyright: [
                {
                  text: '© 2019 Routegy, Inc',
                  link: 'https://routegy.com',
                },
              ],
          },
    }
  }
