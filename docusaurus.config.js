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
        property: "og:image",
        content:
          "https://public-assets.memgraph.com/github-readme-images/docs.memgraph-browser.png",
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
        {
          to: "/memgraph-lab/",
          label: "Memgraph Lab",
          position: "left",
          activeBaseRegex: `/lab/`,
        },
        /*
        {
          to: '/memgraph-cloud/',
          label: 'Memgraph Cloud',
          position: 'left',
          activeBaseRegex: `/cloud/`,
        },
        */
        {
          to: "/mage",
          label: "MAGE",
          position: "left",
          activeBaseRegex: `/mage/`,
          items: [
            {
              label: "Overview",
              to: "/mage",
            },
            {
              label: "Installation",
              to: "/mage/installation",
            },
            {
              label: "Using query modules",
              to: "/mage/usage/calling-procedures",
            },
            {
              label: "How-to guides",
              to: "/mage/how-to-guides/create-a-new-module-python",
            },
            {
              label: "Algorithms",
              to: "/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",
            },
            {
              label: "Use cases",
              to: "/mage/use-cases/bioinformatics",
            },
            {
              label: "Contributing",
              to: "/mage/contributing",
            },
          ],
        },
        {
          to: "/cypher-manual/",
          label: "Cypher manual",
          position: "left",
          activeBaseRegex: `/cypher-manual/`,
          items: [
            {
              label: "Overview",
              to: "/cypher-manual/",
            },
            {
              label: "Functions",
              to: "/cypher-manual/functions",
            },
            {
              label: "Clauses",
              to: "/cypher-manual/clauses",
            },
            {
              label: "Other features",
              to: "/cypher-manual/other-features",
            },
            {
              label: "Differences",
              to: "/cypher-manual/differences",
            },
          ],
        },
        {
          to: "/help-center",
          label: "Help Center",
          position: "left",
          activeBaseRegex: `/help-center/`,
        },
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
              to: "/memgraph-lab",
            },
            /*
            {
              label: 'Memgraph Cloud',
              to: '/memgraph-cloud',
            },
            */
            {
              label: "Cypher manual",
              to: "/cypher-manual",
            },
            {
              label: "MAGE",
              to: "/mage",
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
    algolia: {
      apiKey: "05acf33bff73974c131732d34307085e",
      indexName: "g-despot",
      contextualSearch: true,
    },
    prism: {
      additionalLanguages: ["cypher", "php", "rust", "csharp", "java", "docker"],
    },
    hideableSidebar: true,
    announcementBar: {
      id: "app-challenge",
      content:
        '🏆 Keep Rockin’ & Start Coding! Register and win $2,000! <a target="_blank" rel="noopener noreferrer" href="https://memgraph.com/memgraph-app-challenge"><b>Join the challenge</b></a> 🏆',
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
          versions: {
            current: {
              label: `Unreleased 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "lab",
        path: "lab",
        routeBasePath: "memgraph-lab",
        sidebarPath: require.resolve("./sidebars/sidebarsLab.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloud",
        path: "cloud",
        routeBasePath: "memgraph-cloud",
        sidebarPath: require.resolve("./sidebars/sidebarsCloud.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cypher-manual",
        path: "cypher-manual",
        routeBasePath: "cypher-manual",
        sidebarPath: require.resolve("./sidebars/sidebarsCypherManual.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mage",
        path: "mage",
        routeBasePath: "mage",
        sidebarPath: require.resolve("./sidebars/sidebarsMAGE.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "help-center",
        path: "help-center",
        routeBasePath: "help-center",
        sidebarPath: require.resolve("./sidebars/sidebarsHelpCenter.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "errors",
        path: "errors",
        routeBasePath: "errors",
        sidebarPath: require.resolve("./sidebars/sidebarsErrors.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
  ],
  clientModules: [require.resolve("./src/components/analyticsCall.js")],
};
