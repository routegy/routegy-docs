module.exports = {
    title: "Routegy Docs",
    description: "Documentation for Routegy (https://routegy.com)",
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'theme-color', content: '#2E1046' }]
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
        company: 'Routegy',
        subdomain: 'Docs',
        nav: [
          {
            text: 'Routegy',
            items: [
              { text: 'Home', link: 'https://routegy.com' },
              { text: 'Solutions', link: 'https://routegy.com/solutions' },
              { text: 'About', link: 'https://routegy.com/about' },
            ]
          },
          {
            text: 'Blog',
            items: [
              { text: 'Home', link: 'https://blog.routegy.com' },
              { text: 'Posts by tag', link: 'https://blog.routegy.com/tags' },
              { text: 'Posts by author', link: 'https://blog.routegy.com/authors' },
            ]
          },
          {
            text: 'Documentation',
            items: [
              { text: 'Home', link: '/' },
              { text: 'How-to guides', link: '/how-to/' },
              { text: 'Reference guides', link: '/reference/' },
              { text: 'Topic guides', link: '/topic/' },
              { text: 'Tutorials', link: '/tutorial/' },
            ]
          },
        ],
        logo: '/logo-navbar.png',
        repo: 'routegy/routegy-doscs',
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
