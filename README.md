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

### Theme Development

If you're working on theme modifications, it's easiest to just use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/) so you can modifications on refresh.

```sh
$ cd routegy-vuepress-theme
$ yarn link
$ cd ../routegy-docs
$ yarn link vuepress-theme-routegy
```

## Technology

* [Vuepress](https://vuepress.vuejs.org)

## Inspiration

* [Django documentation](https://docs.djangoproject.com/en/dev/)
* [What nobody tells you about documentation](https://www.divio.com/blog/documentation/)

## License

See [LICENSE](LICENSE)
