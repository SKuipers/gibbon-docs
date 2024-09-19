import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { withMermaid } from "vitepress-plugin-mermaid";

const vitepressSidebarOptions = {
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    capitalizeEachWords: true,
    hyphenToSpace: true,
    collapsed: true,
    collapseDepth: 1,
    manualSortFileNameByPriority: ['welcome.md', 'introduction', 'getting-started', 'administration', 'modules', 'user-guides', 'development'],
    frontmatterOrderDefaultValue: 9,
    sortMenusByFrontmatterOrder: true,
    excludeFilesByFrontmatterFieldName: 'draft',
    excludeFolders: ['templates'],
    excludeFiles: ['README.md'],
    includeFolderIndexFile: false,
    keepMarkdownSyntaxFromTitle: true,
    convertSameNameSubFileToGroupIndexPage: false,
};

// https://vitepress.dev/reference/site-config
export default withMermaid({
    base: "/",
    title: "Gibbon Documentation",
    description: "The Free, Flexible, Open Source School Software",

    outDir: "./deploy",
    assetsDir: "assets",
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],

    srcExclude: ['**/README.md', '/templates/**', '/.obsidian', '*.canvas'],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "Gibbon Docs",
        logo: "/gibbon-logo.png",

        nav: [
            {
                text: "Docs",
                activeMatch: '/introduction',
                items: [
                    { text: "Welcome", link: "/introduction/welcome" },
                    {
                        text: "Introduction",
                        items: [
                            { text: "Installing Gibbon", link: "/introduction/installing-gibbon" },
                            { text: "Getting Started", link: "/getting-started/next-steps" },
                            { text: "Updating Gibbon", link: "/administration/updating-gibbon" },
                        ],
                    },
                    {
                        text: "Developers",
                        items: [
                            { text: "Developer Workflow", link: "/developers/getting-started/developer-workflow" },
                            { text: "Gibbon Road Map", link: "/developers/getting-started/gibbon-road-map" },
                        ],
                    },
                    {
                        text: "By Role",
                        items: [
                            { text: "Administrators", link: "/administrators" },
                            { text: "Developers", link: "/developers" },
                            { text: "Teachers", link: "/teachers" },
                            { text: "Parents", link: "/parents" },
                        ],
                    },
                ],
            },

            {
                text: "Devs",
                activeMatch: '/development',
                items: [
                    { text: "Gibbon Road Map", link: "/development/gibbon-road-map" },
                    {
                        text: "Getting Started",
                        items: [

                            { text: "Developer Workflow", link: "/development/getting-started/developer-workflow" },
                        ],
                    },
                ],
            },

            {
                text: "Support",
                items: [
                    { text: "Forums", link: "https://ask.gibbonedu.org" },
                    { text: "Expert Support", link: "https://gibbonedu.com/" },
                    { text: "Gibbon Partners", link: "https://gibbonedu.com" },
                    { text: "Certification", link: "https://gibbonedu.com/certification.php" },
                    { text: "Open Source Guide", link: "https://ask.gibbonedu.org/t/guide-to-going-open/8063" },
                    { text: "Support Page", link: "https://gibbonedu.org/support" },
                ],
            },
            {
                text: "v27.0.01",
                items: [
                    { text: "Download", link: "https://gibbonedu.org/download" },
                    {
                        text: "Changelog",
                        link: "https://github.com/GibbonEdu/core/blob/main/CHANGELOG.txt",
                    },
                    {
                        text: "Contributing",
                        link: "https://github.com/GibbonEdu/core/blob/main/.github/CONTRIBUTING.md",
                    },
                    { text: "Source Code", link: "https://github.com/GibbonEdu/core" },
                ],
            },
        ],

        sidebar: generateSidebar(vitepressSidebarOptions),

        search: {
            provider: "local",
        },

        editLink: {
            pattern: "https://github.com/GibbonEdu/docs/edit/main/:path",
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/GibbonEdu/core" },
        ],

        footer: {
            message:
                "Caught a mistake or want to improve the documentation? You are welcome to contribute! Look for the edit link on each page.",
            copyright:
                "<br/><div style='font-size: 80%'>Copyright © 2010 <a href='https://gibbonedu.org/'>Gibbon Foundation</a> | Gibbon™ of Gibbon Education Ltd. (Hong Kong)<br/>Founded by Ross Parker at ICHK Secondary | Built by Ross Parker, Sandra Kuipers and the Gibbon community</div>",
        },
    },

    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container 
    },

    // rewrites: {
    //     'administrators/getting-started/installing-gibbon/:file': 'administrators/installing-gibbon/:file'
    // }
});
