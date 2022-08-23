module.exports = {
  // do not auto-generate a sidebar from the docs folder structure
  //sidebar: [{type: 'autogenerated', dirName: '.'}],

  // create a sidebar manually
  sidebar: [
    'index',
    'api-reference',
    {
      Overview: [
        'overview/introduction',
        'overview/authorizer',
        'overview/policy',
        'overview/control-plane',
        'overview/organization',
        'overview/connections',
        'overview/policy-lifecycle',
        'overview/directory',
        'overview/decision-logs',
      ],
    },
    {
      'Getting Started': [
        {
          type: 'category',
          label: 'First Steps',
          collapsed: false,
          items: [
            'getting-started/first-steps/quickstart',
            'getting-started/first-steps/create-account',
            'getting-started/first-steps/orientation',
          ],
        },
        {
          type: 'category',
          label: 'PeopleFinder Quickstart',
          collapsed: false,
          items: [
            'getting-started/peoplefinder/peoplefinder-overview',
            'getting-started/peoplefinder/create-policy',
            'getting-started/peoplefinder/set-up-users',
            'getting-started/peoplefinder/deploy-peoplefinder',
            'getting-started/peoplefinder/explore-peoplefinder',
            'getting-started/peoplefinder/understanding-policies',
            'getting-started/peoplefinder/modify-the-policy',
          ],
        },
        {
          type: 'category',
          label: 'Explore ABAC Policies',
          collapsed: true,
          items: [
            'getting-started/explore-abac-policies/overview',
            'getting-started/explore-abac-policies/creating-an-abac-policy',
            'getting-started/explore-abac-policies/update-app-and-review',
          ],
        },
        {
          type: 'category',
          label: 'Bring Your Own IDP (Auth0)',
          collapsed: true,
          items: [
            'getting-started/bring-your-own-idp/bring-your-own-idp',
            'getting-started/bring-your-own-idp/set-up-auth0',
            'getting-started/bring-your-own-idp/extend-user-attributes',
            'getting-started/bring-your-own-idp/deploy-peoplefinder-auth0',
          ],
        },
        'getting-started/install-onebox',
      ],
    },
    {
      Console: [
        'aserto-console/introduction',

        'aserto-console/directory',
        {
          type: 'category',
          label: 'Managing Connections',
          collapsed: true,
          items: [
            'aserto-console/connections/overview',
            {
              type: 'category',
              label: 'Identity Providers',
              collapsed: true,
              items: [
                'aserto-console/connections/setup-auth0',
                'aserto-console/connections/setup-okta',
              ],
            },
            {
              type: 'category',
              label: 'Source Code Providers',
              collapsed: true,
              items: [
                'aserto-console/connections/setup-github',
                'aserto-console/connections/setup-gitlab',
              ],
            },
            {
              type: 'category',
              label: 'Container Registries',
              collapsed: true,
              items: [
                'aserto-console/connections/setup-opcr',
                'aserto-console/connections/setup-ghcr',
              ],
            },
            'aserto-console/connections/setup-edge',
          ],
        },
        'aserto-console/policies',
        'aserto-console/view-policies',
        'aserto-console/manage-organizations',
        'aserto-console/enabling-getting-started',
      ],
    },
    {
      'Authorizer Guide': [
        'authorizer-guide/overview',
        'authorizer-guide/authz',
        'authorizer-guide/is',
        'authorizer-guide/identity-context',
        'authorizer-guide/policy-context',
        'authorizer-guide/resource-context',
        'authorizer-guide/query',
        'authorizer-guide/display-state-map',
        'authorizer-guide/decisiontree',
        'authorizer-guide/dir',
        'authorizer-guide/directory-resources',
        'authorizer-guide/policy',
        'authorizer-guide/built-ins',
      ],
    },
    {
      'Directory Guide': [
        'directory-guide/graphql',
        'directory-guide/relations',
      ],
    },
    {
      Quickstarts: [
        {
          type: 'category',
          label: 'React and Node',
          collapsed: false,
          items: [
            'quickstarts/react/overview',
            'quickstarts/react/adding-users',
            'quickstarts/react/application-setup',
            'quickstarts/react/service-setup',
            'quickstarts/react/update-the-application',
            'quickstarts/react/create-a-policy',
            'quickstarts/react/use-express-middleware',
            'quickstarts/react/support-more-roles',
            'quickstarts/react/conditional-ui-rendering',
          ],
        },
      ],
    },
    {
      SDKs: [
        'software-development-kits/overview',
        {
          type: 'category',
          label: 'JavaScript',
          collapsed: false,
          items: [
            'software-development-kits/javascript/react',
            'software-development-kits/javascript/spa',
            'software-development-kits/javascript/express',
          ],
        },
        {
          type: 'category',
          label: 'Python',
          collapsed: false,
          items: [
            'software-development-kits/python/api-client',
            'software-development-kits/python/flask',
            {
              type: 'category',
              label: 'Reference',
              collapsed: false,
              items: [
                'software-development-kits/python/identity-providers',
                'software-development-kits/python/authorizers',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Go',
          collapsed: false,
          items: [
            'software-development-kits/go/install',
            'software-development-kits/go/authorizer',
            {
              type: 'category',
              label: 'Middleware',
              collapsed: false,
              items: [
                'software-development-kits/go/middleware-http',
                'software-development-kits/go/middleware-grpc',
              ],
            },
          ],
        },
        'software-development-kits/dotnetcore',
        {
          type: 'category',
          label: 'Ruby',
          collapsed: false,
          items: [
            'software-development-kits/ruby/middleware',
            'software-development-kits/ruby/rails',
          ],
        },
      ],
    },
    {
      CLIs: [
        'command-line-interface/introduction',
        {
          type: 'category',
          label: 'Aserto CLI',
          collapsed: true,
          items: [
            'command-line-interface/aserto-cli/installation',
            'command-line-interface/aserto-cli/login',
            'command-line-interface/aserto-cli/policies',
            'command-line-interface/aserto-cli/connections',
            'command-line-interface/aserto-cli/directory',
            'command-line-interface/aserto-cli/decision-logs',
            'command-line-interface/aserto-cli/onebox',
            'command-line-interface/aserto-cli/control-plane',
          ],
        },
        {
          type: 'category',
          label: 'Policy CLI',
          collapsed: true,
          items: [
            'command-line-interface/policy-cli/download',
            'command-line-interface/policy-cli/login',
            'command-line-interface/policy-cli/init',
            'command-line-interface/policy-cli/build',
            'command-line-interface/policy-cli/images',
            'command-line-interface/policy-cli/tag',
            'command-line-interface/policy-cli/push',
            'command-line-interface/policy-cli/pull',
            'command-line-interface/policy-cli/rm',
            'command-line-interface/policy-cli/export',
            'command-line-interface/policy-cli/repl',
            'command-line-interface/policy-cli/sign',
            'command-line-interface/policy-cli/open-policy-registry',
          ],
        },
        {
          type: 'category',
          label: 'Aserto IDP CLI',
          collapsed: true,
          items: [
            'command-line-interface/aserto-idp-cli/installation',
            'command-line-interface/aserto-idp-cli/plugins',
            'command-line-interface/aserto-idp-cli/configuration',
            'command-line-interface/aserto-idp-cli/usage',
          ],
        },
      ],
    },
    {
      'Decision Logs Guide': [
        'decision-logs-guide/overview',
        'decision-logs-guide/console',
        {
          type: 'category',
          label: 'APIs',
          collapsed: false,
          items: [
            'decision-logs-guide/api/overview',
            'decision-logs-guide/api/decision-logs',
            'decision-logs-guide/api/users',
            'decision-logs-guide/api/query',
            'decision-logs-guide/api/decisions',
          ],
        },
        'decision-logs-guide/schemas',
        {
          type: 'category',
          label: 'Elastic (ELK) Integration',
          collapsed: false,
          items: [
            'decision-logs-guide/elk/configure',
            'decision-logs-guide/elk/decision-logs-conf',
            'decision-logs-guide/elk/users-conf',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Edge Authorizers',
      collapsed: true,
      items: [
        'edge-authorizers/overview',
        'edge-authorizers/deployment-and-operation',
        'edge-authorizers/security-and-management',
        'edge-authorizers/discovery-flow',
        'edge-authorizers/runtime-flow',
        'edge-authorizers/directory-synchronization',
      ],
    },
    {
      Troubleshooting: [
        'troubleshooting/overview',
        'troubleshooting/existing-policy-cannot-be-added',
        'troubleshooting/leaked-secret-keys',
        'troubleshooting/github-connection-cannot-be-removed',
        'troubleshooting/policy-added-but-shows-error',
        'troubleshooting/errors-reference',
      ],
    },
  ],
}
