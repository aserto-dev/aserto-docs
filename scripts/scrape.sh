#!/bin/sh

docker run -it --env-file=./.env -e "CONFIG=$(cat ./scripts/algolia-config.json)" algolia/docsearch-scraper
