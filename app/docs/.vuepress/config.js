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
    host: '0.0.0.0',
    port: 3002,
    theme: 'routegy',
    themeConfig: {
        company: 'Routegy',
        subdomain: 'Docs',
        nav: [
          {
            text: 'Navigation',
            items: [
              { text: 'Home', link: '/' },
              { text: 'How-to guides', link: '/how-to/' },
              { text: 'Reference guides', link: '/reference/' },
              { text: 'Topic guides', link: '/topic/' },
              { text: 'Tutorials', link: '/tutorial/' },
            ]
          },
          {
            text: 'API Docs',
            link: 'https://api.docs.routegy.com'
          },
          {
            text: 'Sign in',
            link: 'https://web.routegy.com'
          },
          {
            text: 'Schedule a demo',
            link: 'https://routegy.com/connect'
          }
        ],
        logo: '/images/web-logo-light.svg',
        repo: 'routegy/routegy-docs',
        docsDir: 'app/docs',
        editLinks: true,
        lastUpdated: true,
        footer: {
            contact: [
              {
                type: 'github',
                link: 'https://github.com/routegy',
              },
              {
                type: 'instagram',
                link: 'https://instagram.com/routegy',
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
                  text: '© 2020 Routegy, Inc',
                  link: 'https://routegy.com',
                },
              ],
          },
    }
  }
