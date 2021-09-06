#!/bin/sh

docker run -it --env-file=./.env -e "CONFIG=$(cat ./scripts/algolia-config.json | jq -r tostring)" algolia/docsearch-scraper
