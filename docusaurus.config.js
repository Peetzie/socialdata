// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fastfood and health in the United States of America',
  tagline: 'Social Data and Visualization final exam project',
  url: 'https://github.com',
  baseUrl: '/socialdata/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Peetzie', // Usually your GitHub org/user name.
  projectName: 'socialdata', // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Overview',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Story line',
          },
          {
            href: "https://nbviewer.org/github/Peetzie/SocialData_InteractiveMaps/blob/main/notebook.ipbynb",
            position: 'left',
            label: 'Explainer Notebook',
          },
          {
            href: 'https://github.com/Peetzie/socialdata',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Peetzie/socialdata',
              },
              {
                label: 'About us',
                href: 'https://peetzie.github.io/SocialData_InteractiveMaps/About%20us.html',
              },
              {
                href: "https://nbviewer.org/github/Peetzie/SocialData_InteractiveMaps/blob/main/notebook.ipbynb",
                label: 'Explainer Notebook',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Social Data and Visualisations,  Built with Docusaurus.`,
      },
    }),
};


module.exports = config;
