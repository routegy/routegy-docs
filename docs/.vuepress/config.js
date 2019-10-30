module.exports = {
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['meta', { name: 'theme-color', content: '#25135f' }]
    ],
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
