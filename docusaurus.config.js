const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { sidebar } = require("./sidebars");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Aserto Documentation",
    tagline: "Welcome to modern authorization.",
    url: "https://docs.aserto.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "aserto-dev", // Usually your GitHub org/user name.
    projectName: "aserto-doc", // Usually your repo name.

    plugins: [
      ['docusaurus2-dotenv',
        {
            path: "./.env", // The path to your environment variables.
            safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
            systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
            silent: false, //  If true, all warnings will be suppressed
            expand: false, // Allows your variables to be "expanded" for reusability within your .env file
            defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        }
      ]
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/aserto-dev/aserto-doc/edit/main/",
            routeBasePath: "/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({    
        algolia: {
          apiKey: process.env.REACT_APP_ALGOLIA_API_KEY || '_',
          indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME || '_',

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: see doc section below
          appId: process.env.REACT_APP_ALGOLIA_APP_ID,

          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
        },
        navbar: {
          style: "dark",
          title: "Aserto",
          logo: {
            alt: "Aserto Logo",
            src: "logo.png",
          },
          items: [
            {
              to: "/",
              position: "left",
              label: "Docs",
            },
            {
              to: "https://aserto.com/blog",
              label: "Blog",
              position: "left",
            },
            {
              to: "https://aserto.com/about",
              label: "About",
              position: "left",
            },
            {
              to: "https://aserto.com/careers",
              label: "Careers",
              position: "left",
            },
            {
              to: "https://github.com/aserto-dev/aserto-doc",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "PRODUCT",
              items: [
                {
                  label: "Benefits",
                  to: "https://aserto.com/#the-solution",
                },
                {
                  label: "FAQ",
                  to: "https://aserto.com/faq",
                },
              ],
            },
            {
              title: "DEVELOPERS",
              items: [
                {
                  label: "Docs",
                  to: "/",
                },
                {
                  label: "GitHub",
                  to: "https://github.com/aserto-dev",
                },
                {
                  label: "Slack",
                  to: "https://asertocommunity.slack.com/join/shared_invite/zt-p06gin84-xNswWpTGyPDPxCz0LMux3g#/shared-invite/email",
                },
                {
                  label: "Status",
                  to: "https://aserto.statuspage.io",
                },
              ],
            },
            {
              title: "COMPANY",
              items: [
                {
                  label: "Blog",
                  to: "https://www.aserto.com/blog",
                },
                {
                  label: "About",
                  to: "https://www.aserto.com/about",
                },
                {
                  label: "Careers",
                  to: "https://www.aserto.com/careers",
                },
                {
                  label: "Press",
                  to: "https://www.aserto.com/news",
                },
                {
                  label: "Contact ss",
                  to: "mailto:info@aserto.com",
                },
              ],
            },
            {
              title: "LEGAL",
              items: [
                {
                  label: "Terms of Service",
                  to: "https://www.aserto.com/terms-of-service",
                },
                {
                  label: "Privacy Policy",
                  to: "https://www.aserto.com/privacy-policy",
                },
              ],
            },
            {
              title: "SOCIAL",
              items: [
                {
                  label: "Twitter",
                  to: "https://twitter.com/aserto_com",
                },
                {
                  label: "Medium",
                  to: "https://aserto.medium.com/",
                },
                {
                  label: "Linked In",
                  to: "https://www.linkedin.com/company/aserto-com",
                },
              ],
            },          ],
          copyright: `Copyright © ${new Date().getFullYear()} Aserto Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['powershell', 'csharp', 'rego', 'cmd'],
        },
      }),
  }
);
