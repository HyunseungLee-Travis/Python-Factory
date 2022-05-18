// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coding-Insight',
  tagline: 'Learn, Practice, Build and Deploy',
  titleDelimiter: '|',

  url: 'https://coding-insight.com',
  baseUrl: '/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'ko-kr',
    locales: ['ko-kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/beta/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/beta/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/coding-insight.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Coding-Insight',
        logo: {
          alt: 'Coding-Insight Logo Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/python', label: '파이썬', position: 'left' },
          { to: '/docs/c-cpp', label: 'C/C++', position: 'left' },
          { to: '/docs/rust', label: 'Rust', position: 'left' },
          {
            href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '파이썬',
                to: '/docs/python',
              },
              {
                label: 'C/C++',
                to: '/docs/c-cpp',
              },
              {
                label: 'Rust',
                to: '/docs/rust',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributors',
                href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/graphs/contributors',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA',
              },
              {
                label: 'VSCode Extension',
                href: 'https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search',
              },
            ],
          },
        ],
        logo: {
          alt: 'Coding-Insgiht Logo',
          src: 'img/logo.svg',
          href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Coding-Insight`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'rust' ],
      },
    }),
};

module.exports = config;
