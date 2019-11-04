---
title: "Reference: Touches"
description: "Routegy Touches"
sidebar: false
---

# Touches

Touches are created when people interact with a [touchpoint](/reference/touchpoints.html).

A touch contains [schema values](/references/schema-values.html) data needed to fulfill the [schema](/refernces/schema.html) of the [touchpoint](/reference/touchpoints.html).

Each touch created will be run through every [touch handler](/references/touch-handlers.html) attached to its [touchpoint](/reference/touchpoints.html).

## Relations

A touch is made up of the following relations:

* [Touchpoint](/reference/touchpoints.html) (many-to-one)
* [SchemaValues](/reference/schemas.html) (many-to-one)

## Permissions

Touches inherit permissions from their [Workspace](/reference/workspaces.html) and its [Organization](/reference/organizations.html) through it's [Location](/reference/locations.html). Read more about how permission inheritance [here](/reference/permissions.html).
