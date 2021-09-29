import Flags from '../flags'

export default [
  {
    title: 'React.js',
    icon: 'react.svg',
    link: 'https://reactjs.org',
    github: 'https://github.com/aserto-dev/aserto-react',
    docs: '/docs/software-development-kits/javascript/react',
  },
  {
    title: 'JavaScript SPA',
    icon: 'javascript.svg',
    link: 'https://www.javascript.com',
    github: 'https://github.com/aserto-dev/aserto-spa-js',
    docs: '/docs/software-development-kits/javascript/spa',
  },
  {
    title: 'Express.js',
    icon: 'nodejs.svg',
    link: 'https://expressjs.com',
    github: 'https://github.com/aserto-dev/express-jwt-aserto',
    docs: '/docs/software-development-kits/javascript/express',
  },
  ...(Flags.PYTHON_API_CLIENT_DOCS
    ? [
        {
          title: 'Python',
          icon: 'python.svg',
          link: 'https://www.python.org',
          github: 'https://github.com/aserto-dev/aserto-python',
          docs: '/docs/software-development-kits/python/api-client',
        },
      ]
    : []),
  {
    title: 'Flask',
    icon: 'flask.svg',
    link: 'https://flask.palletsprojects.com',
    github: 'https://github.com/aserto-dev/aserto-python/tree/main/packages/flask-aserto',
    docs: '/docs/software-development-kits/python/flask',
  },
  {
    title: 'ASP.NET Core',
    icon: 'dotnet-core.svg',
    link: 'https://dotnet.microsoft.com/apps/aspnet',
    github: 'https://github.com/aserto-dev/aserto-dotnet',
    docs: '/docs/software-development-kits/dotnetcore',
  },
]
