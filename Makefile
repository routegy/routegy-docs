.DEFAULT_GOAL := help

TS        ?= $(shell date -u)
COMMIT    ?= $(shell git rev-parse --short HEAD)
VUEPRESS  := vuepress
BUILD_DIR := .vuepress/dist

.PHONY: build
build:  ## Build site.
	@$(VUEPRESS) build

.PHONY: clean
clean:  ## Clean local compiled site.
	@rm -rf $(BUILD_DIR)

.PHONY: serve
serve: ## Serve locally at http://localhost:8080.
	@$(VUEPRESS) dev

.phony: help
help: ## Print Makefile usage.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
