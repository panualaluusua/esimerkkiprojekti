module.exports = {
  title: 'Esimerkkiprojekti',
  url: 'https://panualaluusua.fi',
  baseUrl: '/esimerkkiprojekti/',
  favicon: 'img/favicon.ico',
  organizationName: 'panualaluusua',
  projectName: 'esimerkkiprojekti',
  themeConfig: {
    navbar: {
      title: 'Esimerkkiprojekti',
      logo: {
        alt: 'Esimerkkiprojekti logo',
        src: 'img/logo.svg',
        href: 'docs/',
      },
      items: [
        {to: 'docs/', label: 'Dokumentaatio', position: 'left'},
        {href: 'https://github.com/panualaluusua/esimerkkiprojekti', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Panu Alaluusua`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('../config/sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
