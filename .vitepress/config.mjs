import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = {
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    capitalizeEachWords: true,
    hyphenToSpace: true,
    collapsed: true,
    collapseDepth: 2,
    manualSortFileNameByPriority: ['welcome.md', 'administrators', 'developers', 'teachers', 'parents'],
    frontmatterOrderDefaultValue: 9,
    sortMenusByFrontmatterOrder: true,
    excludeFilesByFrontmatterFieldName: 'exclude',
    includeFolderIndexFile: false,
    keepMarkdownSyntaxFromTitle: true,
    // convertSameNameSubFileToGroupIndexPage: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    title: "Gibbon Documentation",
    description: "The Free, Flexible, Open Source School Software",

    outDir: "./deploy",
    assetsDir: "assets",
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "Gibbon Docs",
        logo: "/gibbon-logo.png",

        nav: [
            {
                text: "Docs",
                activeMatch: '/admin',
                items: [
                    { text: "Welcome", link: "/welcome" },
                    {
                        text: "Introduction",
                        items: [
                            { text: "Installing Gibbon", link: "/administrators/getting-started/installing-gibbon" },
                            { text: "Getting Started", link: "/administrators/getting-started/getting-started-with-gibbon" },
                            { text: "Updating Gibbon", link: "/administrators/getting-started/updating-gibbon" },
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
                text: "Support",
                items: [
                    { text: "Forums", link: "https://ask.gibbonedu.org" },
                    { text: "Expert Support", link: "https://gibbonedu.com/" },
                    { text: "Gibbon Partners", link: "http://localhost:5173/welcome#expert-support" },
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
                '<br/><div style="font-size: 80%">Copyright © 2010 <a href="https://gibbonedu.org/">Gibbon Foundation</a> | Gibbon™ of Gibbon Education Ltd. (Hong Kong)<br/>Founded by Ross Parker at ICHK Secondary | Built by Ross Parker, Sandra Kuipers and the Gibbon community</div>',
        },
    },
});
