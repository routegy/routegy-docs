# Build image
#
# Image responsible for building the 'node_modules' dependency directory
# and have it available for COPY from other images.
FROM node:alpine as builder

ARG WORKDIR
ARG CACHEDIR
ARG YARN_VERSION_ARG
ARG ENVIRONMENT

RUN test -n "${WORKDIR}" && \
    test -n "${CACHEDIR}" && \
    test -n "${YARN_VERSION_ARG}" && \
    test -n "${ENVIRONMENT}"

RUN apk add --no-cache openssh git python make g++

RUN mkdir -p ${WORKDIR} ${CACHEDIR}

ENV YARN_VERSION=${YARN_VERSION_ARG} \
    YARN_CACHE_FOLDER=${CACHEDIR} \
    ENVIRONMENT=${ENVIRONMENT}

COPY package.json yarn.lock ${WORKDIR}/

WORKDIR ${WORKDIR}

RUN yarn policies set-version ${YARN_VERSION} && \
    yarn install --frozen-lockfile

COPY . ${WORKDIR}/

# =============================================================================

# Local image
#
# Image responsible for running a local version of this app.
FROM node:alpine as local

ARG WORKDIR
ARG SRCDIR
ARG CACHEDIR

RUN test -n "${WORKDIR}" && \
    test -n "${SRCDIR}" && \
    test -n "${CACHEDIR}"

ENV WORKDIR=${WORKDIR} \
    SRCDIR=${SRCDIR} \
    YARN_CACHE_FOLDER=${CACHEDIR} \
    HOST=0.0.0.0

RUN mkdir -p "${SRCDIR}"

COPY --from=builder ${WORKDIR} ${SRCDIR}
COPY --from=builder ${CACHEDIR} ${CACHEDIR}

WORKDIR ${SRCDIR}

CMD ["yarn", "run", "docs:serve"]

# =============================================================================

# Test image
#
# Image responsible for running app tests.
FROM local as test

CMD ["yarn", "run", "test"]
