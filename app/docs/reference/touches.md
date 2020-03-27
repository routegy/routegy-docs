---
title: "Touches | Reference"
description: "How do touches work?"
sidebar: false
---

# Touches

Touches are created when people interact with a [touchpoint](/reference/touchpoints/).

A touch contains [schema values](/references/schema-values/) data needed to fulfill the [schema](/refernces/schema/) of the [touchpoint](/reference/touchpoints/).

Each touch created will be run through every [touch handler](/references/touch-handlers/) attached to its [touchpoint](/reference/touchpoints/).

## Relations

A touch is made up of the following relations:

* [Touchpoint](/reference/touchpoints/) (many-to-one)
* [SchemaValues](/reference/schemas/) (many-to-one)

## Permissions

Touches inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through it's [Location](/reference/locations/). Read more about how permission inheritance [here](/reference/permissions/).
