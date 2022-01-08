const baseUrl = "/";

module.exports = {
  title: "Memgraph Docs",
  tagline: "Welcome to the Memgraph Docs site!",
  url: "https://memgraph-docs-archive.netlify.app",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/social-logo-round-corners.png",
  organizationName: "memgraph",
  projectName: "docs",
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:500,600",
    "https://fonts.googleapis.com/css?family=Roboto:400, 500,600",
  ],
  scripts: [
    {
      src: `https://memgraph.com/docs/js/load-analytics.js`,
      // src: `http://localhost:3000/docs/js/load-analytics.js`,
    },
    {
      src: "https://kit.fontawesome.com/3a9f2eb5b9.js",
    },
  ],
  themeConfig: {
    metadata: [
      {
        name: "robots",
        content:
          "noindex",
      },
    ],
    navbar: {
      title: "Docs",
      logo: {
        alt: "Memgraph Logo",
        src: "img/memgraph-logo-500x380.png",
      },
      items: [
        {
          to: "/memgraph/getting-started",
          label: "Memgraph",
          position: "left",
          activeBaseRegex: `/memgraph/`,
          items: [
            {
              label: "Getting started",
              to: "/memgraph/getting-started",
            },
            {
              label: "Installation",
              to: "/memgraph/installation",
            },
            {
              label: "Connect to Memgraph",
              to: "/memgraph/connect-to-memgraph",
            },
            {
              label: "Import data",
              to: "/memgraph/import-data",
            },
            {
              label: "Reference guide",
              to: "/memgraph/reference-guide",
            },
          ],
        },
        /*
        {
          to: "https://memgraph.com/docs/memgraph-lab/",
          label: "Memgraph Lab",
          position: "left",
        },
        {
          to: "https://memgraph.com/docs/mage",
          label: "MAGE",
          position: "left",
        },
        {
          to: "https://memgraph.com/docs/cypher-manual/",
          label: "Cypher manual",
          position: "left",
        },
        {
          to: "https://memgraph.com/docs/help-center",
          label: "Help Center",
          position: "left",
        },
        */
        {
          type: "docsVersionDropdown",
          docsPluginId: "memgraph",
          position: "right",
        },
        {
          href: "https://github.com/memgraph/memgraph",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Memgraph",
              to: "/memgraph/getting-started",
            },
            {
              label: "Memgraph Lab",
              to: "https://memgraph.com/docs/memgraph-lab/",
            },
            {
              label: "Cypher manual",
              to: "https://memgraph.com/docs/cypher-manual/",
            },
            {
              label: "MAGE",
              to: "https://memgraph.com/docs/mage",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/memgraph",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/memgraphdb",
            },
            {
              label: "Developer Forum",
              href: "https://discourse.memgraph.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/memgraphdb",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/memgraph/memgraph",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg",
            },
          ],
        },
      ],
      logo: {
        alt: "Memgraph Logo",
        src: "img/Memgraph-logo-white-rgb.png",
        href: "https://memgraph.com",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Memgraph. Built by developers, for developers!`,
    },
    prism: {
      additionalLanguages: ["cypher", "php", "rust", "csharp", "java", "docker"],
    },
    hideableSidebar: true,
    announcementBar: {
      id: "app-challenge",
      content:
        'Visit the up-to-date documentation on <a target="_blank" rel="noopener noreferrer" href="https://memgraph.com/docs"><b>https://memgraph.com/docs</b></a>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "memgraph",
          path: "docs",
          routeBasePath: "memgraph",
          sidebarPath: require.resolve("./sidebars/sidebarsMemgraph.js"),
          editUrl: "https://github.com/memgraph/docs/tree/master/",
          includeCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass"
  ],
  clientModules: [require.resolve("./src/components/analyticsCall.js")],
};
