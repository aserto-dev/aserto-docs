# Aserto Docs

This is the source repo for the Aserto documentation [site](https://doc.aserto.com/).

This static documentation site is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. To serve it locally, use:

```
$ yarn serve
```

This will serve the React bundle built in the `build` directory.

### GraphQL API Reference

Reference documentation for the GraphQL API of the Aserto Directory is generated from the schema defined in the
[directory](http://github.com/aserto-dev/directory) repo.

To regenerate the docs:

1. Clone the [directory](http://github.com/aserto-dev/directory) repo if you don't have it.
2. Checkout the `main` branch.
3. Run `DIR_REPO=<path to directory repo> yarn gqlgen`

For example, if you cloned the directory repo into `~/src/aserto-dev/directory`, then the command would be:

        DIR_REPO=~/src/aserto-dev/directory yarn gqlgen


The command doesn't regenerate docs if the API schema hasn't changed since the last run. To force regeneration use the
`-f` flag:

        DIR_REPO=~/src/aserto-dev/directory yarn gqlgen -f

The generated content is placed in `docs/directory-guide/graphql/reference/schema`.

## Deployment

The main branch is built and deployed with Netlify to https://docs.aserto.com.

## Contributions

To contribute a change, open a PR against the main branch. Once merged, it will automatically be deployed.

## Algolia search

`scripts/scrape.sh` contains a script that scrapes the doc site to an Algolia account.

From the room directory of the project, run:

```
$ yarn scrape
```
