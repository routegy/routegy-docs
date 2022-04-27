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
    logo: '/images/routegy-logo-light.svg',
    logoAlt: 'Routegy logo containing an illustration of a purple mountain with a pink flag flying at the summit',
    logoUrl: 'https://routegy.com',
    wordmark: '/images/routegy-wordmark-light.svg',
    wordmarkAlt: 'Text image that says \'Routegy\'',
    separator: '/images/separator.svg',
    subdomain: 'Docs',
    subdomainLogo: '/images/routegy-docs-logo-light.svg',
    subdomainLogoAlt: 'Text image that says \'Docs\'',
    hostname: 'https://docs.routegy.com',
    joinCta: 'Start today!',
    nav: [
      {
        text: 'API Docs',
        link: 'https://api.docs.routegy.com'
      },
      {
        text: 'Blog',
        link: 'https://blog.routegy.com'
      },
      {
        text: 'Sign in',
        link: 'https://web.routegy.com'
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Routegy documentation',
        path: '/',
        collapsable: false,
        children: [
          {
            title: 'At a glance',
            path: '/tutorial/routegy-at-a-glance',
          },
          {
            title: 'Getting started',
            path: '/tutorial/getting-started',
          },
          {
            title: 'Common tasks',
            //path: '/how-to/',
            collapsable: false,
            children: [
              {
                title: 'Create an app',
                path: '/how-to/create-new-apps',
              },
              {
                title: 'Create a pattern',
                path: '/how-to/create-new-patterns',
              },
              {
                title: 'Print a QR code',
                path: '/how-to/print-qr-codes',
              },
              {
                title: 'Receive email notifications',
                path: '/how-to/receive-email-notifications',
              },
              {
                title: 'Receive Slack notifications',
                path: '/how-to/receive-slack-notifications',
              },
              {
                title: 'Receive SMS notifications',
                path: '/how-to/receive-sms-notifications',
              },
              {
                title: 'Receive webhook requests',
                path: '/how-to/receive-webhook-requests',
              },
              {
                title: 'Create Trello cards',
                path: '/how-to/create-trello-cards',
              },
            ],
          },
          {
            title: 'Concepts',
            //path: '/reference/',
            collapsable: false,
            children: [
              {
                title: 'Activity',
                path: '/reference/activity',
              },
              {
                title: 'Apps',
                path: '/reference/apps',
              },
              {
                title: 'App data',
                path: '/reference/app-data',
              },
              {
                title: 'Auth',
                path: '/reference/auth',
              },
              {
                title: 'Actions',
                path: '/reference/actions',
                collapsable: false,
                children: [
                  {
                    title: 'Email',
                    path: '/reference/action-types/email',
                  },
                  {
                    title: 'Slack',
                    path: '/reference/action-types/slack-webhook',
                  },
                  {
                    title: 'SMS',
                    path: '/reference/action-types/sms',
                  },
                  {
                    title: 'Trello',
                    path: '/reference/action-types/trello',
                  },
                  {
                    title: 'Webhook',
                    path: '/reference/action-types/webhook',
                  },
                  {
                    title: 'Zapier',
                    path: '/reference/action-types/zapier-rest-hook',
                  },
                ],
              },
              {
                title: 'Codes',
                path: '/reference/codes',
              },
              {
                title: 'Device compatibility',
                path: '/reference/device-compatibility',
              },
              {
                title: 'Events',
                path: '/reference/events',
              },
              {
                title: 'Groups',
                path: '/reference/groups',
              },
              {
                title: 'Organizations',
                path: '/reference/organizations',
              },
              {
                title: 'Patterns',
                path: '/reference/patterns',
              },
              {
                title: 'Templating',
                path: '/reference/templating',
              },
              {
                title: 'Workspaces',
                path: '/reference/workspaces',
              },
            ],
          },
          {
            title: 'How-to guides',
            //path: '/how-to/',
            collapsable: false,
            children: [
              {
                title: 'Capture hot/cold requests',
                path: '/how-to/capture-hot-cold-requests',
              },
              {
                title: 'Capture IT requests',
                path: '/how-to/capture-it-requests',
              },
              {
                title: 'Capture maintenance requests',
                path: '/how-to/capture-problem-reports',
              },
              {
                title: 'Capture rating and review feedback',
                path: '/how-to/capture-rating-review-feedback',
              },
              {
                title: 'Capture supply requests',
                path: '/how-to/capture-supply-requests',
              },
              {
                title: 'Capture survey feedback',
                path: '/how-to/capture-survey-feedback',
              },
            ],
          },
          {
            title: 'Tutorials',
            //path: '/tutorial/',
            collapsable: false,
            children: [
              {
                title: 'Streamline curbside pickup',
                path: '/tutorial/streamline-curbside',
              },
            ],
          },
        ],
      },
    ],
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
          text: '© 2022 Routegy, Inc',
          link: 'https://routegy.com',
        },
        {
          text: 'Terms',
          link: 'https://www.routegy.com/site-policy/routegy-terms-of-service/',
        },
        {
          text: 'Privacy',
          link: 'https://www.routegy.com/site-policy/routegy-privacy-policy/',
        },
      ],
    },
  }
}
