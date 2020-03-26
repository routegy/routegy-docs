---
title: "Touchpoints | Reference"
description: "Routegy Touchpoints"
sidebar: false
---

# Touchpoints

Touchpoints are where interactions occur within locations of a workspace.

A person interacting with a Touchpoint can potentially create a [touch](/reference/touches.html).

## Relations

A touchpoint is made up of the following relations:

* [Location](/reference/locations.html) (many-to-one)
* [Schema](/reference/schemas.html) (many-to-one)
* [TouchHandler](/reference/touch-handlers.html) (many-to-many)
* [Touch](/reference/touches.html) (one-to-many)
* [Code](/reference/codes.html) (one-to-one)

## Permissions

Touchpoints inherit permissions from their [Workspace](/reference/workspaces.html) and its [Organization](/reference/organizations.html) through it's [Location](/reference/locations.html). Read more about how permission inheritance [here](/reference/permissions.html).
