.DEFAULT_GOAL := help

TS        ?= $(shell date -u)
COMMIT    ?= $(shell git rev-parse --short HEAD)
YARN      := yarn
YARN_RUN  := $(YARN) run
VUEPRESS  := vuepress

.PHONY: build
build:  ## Build site.
	@$(YARN_RUN) docs:build

.PHONY: clean
clean:  ## Clean local compiled site.
	@$(YARN_RUN) docs:clean

.PHONY: serve
serve: ## Serve locally at http://localhost:8080.
	@$(YARN_RUN) docs:serve

.phony: help
help: ## Print Makefile usage.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
