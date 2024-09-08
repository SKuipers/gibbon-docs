import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  useTitleFromFileHeading: true,
  capitalizeEachWords: true,
  hyphenToSpace: true,
  collapsed: true,
  collapseDepth: 2,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Gibbon Docs",
  description: "Free, Flexible, Open Source",
  // tagline: 'fooBar',
  // srcDir: './docs',
  outDir: '../public',
  assetsDir: 'assets',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/gibbon-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GibbonEdu/core' }
    ]
  }
})
