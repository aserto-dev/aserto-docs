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

## Deployment

The main branch is built and deployed with Netlify to https://doc.aserto.com.

## Contributions

To contribute a change, open a PR against the main branch. Once merged, it will automatically be deployed.

## Algolia search

`scripts/scrape.sh` contains a script that scrapes the doc site to an Algolia account. 

From the room directory of the project, run:

```
$ yarn scrape
```
