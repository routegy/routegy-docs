---
title: "Patterns | Reference"
description: "How do patterns work?"
sidebar: false
---

# Patterns

A pattern contains a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by a person interacting with a [microapp](/reference/microapps/).

A pattern with a `null` document indicates that no information should be collected.

A pattern document is used to validate a [MicroappData](/references/microapp-data/) document when created. This happens when a [Event](/references/events/) or [Action](/references/actions/) is created.

## Relations

A pattern is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [MicroappData](/reference/microapp-data/) (one-to-many)
* [Microapp](/reference/microapps/) (one-to-many)
* [ActionType](/reference/action-types/) (one-to-many)

## Permissions

Patterns inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
