---
title: "Touchpoints | Reference"
description: "How do touchpoints work?"
sidebar: false
---

# Touchpoints

Touchpoints are where interactions occur within locations of a workspace.

A person interacting with a Touchpoint can potentially create a [touch](/reference/touches/).

## Relations

A touchpoint is made up of the following relations:

* [Location](/reference/locations/) (many-to-one)
* [Schema](/reference/schemas/) (many-to-one)
* [TouchHandler](/reference/touch-handlers/) (many-to-many)
* [Touch](/reference/touches/) (one-to-many)
* [Code](/reference/codes/) (one-to-one)

## Permissions

Touchpoints inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Location](/reference/locations/). Read more about how permission inheritance [here](/reference/permissions/).
