---
title: "Schemas | Reference"
description: "How do schemas work?"
sidebar: false
---

# Schemas

A schema contains a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by a person interacting with a [microapp](/reference/microapps/).

A schema with a `null` document indicates that no information should be collected.

A schema document is used to validate a [SchemaValues](/references/schema-values/) document when created. This happens when a [Event](/references/events/) or [Action](/references/actions/) is created.

## Relations

A schema is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [SchemaValues](/reference/schema-values/) (one-to-many)
* [Microapp](/reference/microapps/) (one-to-many)
* [ActionType](/reference/action-types/) (one-to-many)

## Permissions

Schemas inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
