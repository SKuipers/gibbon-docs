import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  capitalizeEachWords: true,
  hyphenToSpace: true,
  collapsed: true,
  collapseDepth: 2,
  // convertSameNameSubFileToGroupIndexPage: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Gibbon Documentation",
  description: "Free, Flexible, Open Source",

  outDir: './deploy',
  assetsDir: 'assets',
  cleanUrls: true,
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Gibbon Docs",
    logo: '/gibbon-logo.png',

    nav: [
      { text: 'Docs', link: '/welcome' },
      { text: 'Forum', link: 'https://ask.gibbonedu.org' },
      { text: 'Support', link: 'https://gibbonedu.org/support/' },
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/GibbonEdu/docs/edit/main/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GibbonEdu/docs' }
    ],

    footer: {
        message: 'Caught a mistake or want to improve the documentation? You are welcome to contribute! Look for the edit link on each page.',
        copyright: '<br/><p style="font-size: 80%">Copyright © 2010 <a href="https://gibbonedu.org/">Gibbon Foundation</a> | Gibbon™ of Gibbon Education Ltd. (Hong Kong)<br/>Founded by Ross Parker at ICHK Secondary | Built by Ross Parker, Sandra Kuipers and the Gibbon community</p>'
      }
  }
})
