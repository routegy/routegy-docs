.DEFAULT_GOAL := help
.SUFFIXES:

export NAME           := $(shell docker run -i --rm stedolan/jq -Mr < package.json '.name')
export WORKDIR        := /app
export APPDIR         := /usr/src/app
export SRCDIR         := /usr/src
export CACHEDIR       := /cache
export ENVIRONMENT    ?= local
export YARN_VERSION   = $(shell docker run -i --rm stedolan/jq -Mr < package.json '.engines.yarn')

export NODE_MODULES_VOLUME := $(NAME)_node_modules
export YARN_CACHE_VOLUME   := $(NAME)_yarn_cache

COMPOSE = @docker-compose --project-name $(NAME)

COMPOSE_BUILD = \
	$(COMPOSE) \
		build

COMPOSE_UP    = $(COMPOSE) up
COMPOSE_DOWN  = $(COMPOSE) down
COMPOSE_RM    = $(COMPOSE) rm
COMPOSE_RUN   = $(COMPOSE) run --rm --service-ports $(NAME)
COMPOSE_SHELL = $(COMPOSE_RUN) /bin/sh
COMPOSE_MAKE  = $(COMPOSE) run --rm $(NAME) make $(1)

NODE_SHELL = @docker run \
		-it \
		--rm \
		--workdir $(WORKDIR) \
		--volume $(PWD):$(WORKDIR) \
		--volume $(NODE_MODULES_VOLUME):$(WORKDIR)/node_modules \
		--volume $(YARN_CACHE_VOLUME):$(CACHEDIR) \
		--env YARN_CACHE_FOLDER=$(CACHEDIR) \
		--env YARN_VERSION=$(YARN_VERSION) \
		--entrypoint $(WORKDIR)/scripts/shell-entrypoint \
		$(1) \
		$(2)

STOPPED_CONTAINERS_LS = docker ps -a -f "status=exited" -f "volume=$(NODE_MODULES_VOLUME)" -q

STOPPED_CONTAINERS_RM = @docker rm $$($(STOPPED_CONTAINERS_LS))

VOLUME_RM = @docker volume rm $(1) --force

COPY_ENV = @cp app/.env.$(ENVIRONMENT) app/.env

.PHONY: stack-build
stack-build: stack-volume-clean ## Build stack images
	$(COPY_ENV)
	$(COMPOSE_BUILD)

.PHONY: stack-build-no-cache
stack-build-no-cache: stack-volume-clean ## Build stack images ignoring docker cache
	$(COPY_ENV)
	$(COMPOSE_BUILD) --no-cache

.PHONY: stack-volume-clean
stack-volume-clean: ## Clean node_modules volume
	$(if $(shell $(STOPPED_CONTAINERS_LS)), $(STOPPED_CONTAINERS_RM))
	$(call VOLUME_RM, $(NODE_MODULES_VOLUME))

.PHONY: stack-up
stack-up:  ## Run stack from latest built images
	$(COMPOSE_UP)

.PHONY: stack-down
stack-down:  ## Bring down running stack
	$(COMPOSE_DOWN)

.PHONY: stack-rm
stack-rm:  ## Remove any active running stack containers
	$(COMPOSE_RM)

.PHONY: stack-shell
stack-shell:  ## Run interactive shell in stack service image
	$(COMPOSE_SHELL)

.PHONY: stack-test
stack-test: ## Run all tests for the project
	$(COMPOSE_RUN) yarn test

.PHONY: clean
clean: ## Clean local compiled state.
	$(COMPOSE_RUN) yarn docs:clean

.PHONY: shell
shell: ## Run shell environment capable of managing dependencies.
	$(call NODE_SHELL,node:alpine,/bin/sh)

.phony: help
help: ## Print Makefile usage.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
