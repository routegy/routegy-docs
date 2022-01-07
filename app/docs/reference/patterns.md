---
title: "Patterns | Reference"
description: "How do patterns work?"
sidebar: false
---

# Patterns

A pattern defines what interactions and data are exposed and collected by an [app](/reference/apps/). Pattern definition is a YAML document that consists of two parts: a schema and a descriptor. The schema is a [JSON Schema](https://json-schema.org/) document that defines the information to be captured by an app. The descriptor contains additional information that describes how the data is collected. This includes customization of UI components that represent different parts of the schema (e.g. component type, placeholders and more) as well as customization of the app appearance itself.

A pattern with a `null` document indicates that no information should be collected.

A schema part of a pattern document is used to validate a [AppData](/references/app-data/) document when created. This happens when a [Event](/references/events/) or [Action](/references/actions/) is created.

## Relations

A pattern is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [AppData](/reference/app-data/) (one-to-many)
* [App](/reference/apps/) (one-to-many)
* [ActionType](/reference/action-types/) (one-to-many)

## Permissions

Patterns inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
