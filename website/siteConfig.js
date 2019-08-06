// https://docusaurus.io/docs/site-config

const siteConfig = {
  // https://docusaurus.io/docs/en/site-config#baseurl-string
  baseUrl: '/',

  // https://docusaurus.io/docs/en/site-config#cleanurl-string
  cleanUrl: true,

  // https://docusaurus.io/docs/en/site-config#colors-object
  colors: {
    primaryColor: '#684e8a',
    secondaryColor: '#483660',
  },

  // https://docusaurus.io/docs/en/site-config#copyright-string
  copyright: `Copyright © 2018-2019 Routable Inc.`,

  // https://docusaurus.io/docs/en/site-config#docssidenavcollapsible-boolean
  docsSideNavCollapsible: true,

  // https://docusaurus.io/docs/en/site-config#enableupdateby-boolean
  enableUpdateBy: true,

  // https://docusaurus.io/docs/en/site-config#enableupdatetime-boolean
  enableUpdateTime: true,

  // https://docusaurus.io/docs/en/site-config#favicon-string
  favicon: 'img/favicon.ico',

  // https://docusaurus.io/docs/en/site-config#fonts-object
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // https://docusaurus.io/docs/en/site-config#footericon-string
  footerIcon: 'img/favicon.ico',

  // https://docusaurus.io/docs/en/site-config#headericon-string
  headerIcon: 'img/favicon.ico',

  // https://docusaurus.io/docs/en/site-config#headerlinks-array
  headerLinks: [
    { doc: "home", label: "Documentation" },
    { blog: true, label: 'Blog' },
    { page: 'community', label: 'Community' },
    { href: "https://github.com/getroutable", label: "GitHub" },
  ],

  // https://docusaurus.io/docs/en/site-config#highlight
  highlight: {
    theme: 'default',
  },

  // https://docusaurus.io/docs/en/site-config#ogimage-string
  ogImage: 'img/undraw_online.svg',

  // https://docusaurus.io/docs/en/site-config#onpagenav-string
  onPageNav: 'separate',

  // https://docusaurus.io/docs/en/site-config#organizationname-string
  organizationName: 'getroutable',

  // https://docusaurus.io/docs/en/site-config#projectname-string
  projectName: 'routable-docs',

  // https://docusaurus.io/docs/en/site-config#scripts-array
  scripts: ['https://buttons.github.io/buttons.js'],

  // https://docusaurus.io/docs/en/site-config#tagline-string
  tagline: 'Building better workplaces',

  // https://docusaurus.io/docs/en/site-config#title-string
  title: 'Routable | Docs',

  // https://docusaurus.io/docs/en/site-config#twitterimage-string
  twitterImage: 'img/undraw_tweetstorm.svg',

  // https://docusaurus.io/docs/en/site-config#url-string
  url: 'https://getroutable.com',
};

module.exports = siteConfig;
