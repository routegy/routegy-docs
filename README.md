# routegy-docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2eadfbb-4a38-42f9-8b75-896a01be7edc/deploy-status)](https://app.netlify.com/sites/routegy-docs/deploys)

Public documentation for Routegy

## Status

Active development

## Usage

```
⇒  make help
stack-build                    Build stack images
stack-build-no-cache           Build stack images ignoring docker cache
stack-volume-clean             Clean node_modules volume
stack-up                       Run stack from latest built images
stack-down                     Bring down running stack
stack-rm                       Remove any active running stack containers
stack-shell                    Run interactive shell in stack service image
stack-test                     Run all tests for the project
clean                          Clean local compiled state.
shell                          Run shell environment capable of managing dependencies.
help                           Print Makefile usage.
```

## Technology

* [Vuepress](https://vuepress.vuejs.org)

## Inspiration

* [Django documentation](https://docs.djangoproject.com/en/dev/)
* [What nobody tells you about documentation](https://www.divio.com/blog/documentation/)

## License

See [LICENSE](LICENSE)
