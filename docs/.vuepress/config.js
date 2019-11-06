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
        ],
        sidebar: 'auto',
        repo: 'getroutable/routable-docs',
        editLinks: true,
        lastUpdated: true
    }
  }
