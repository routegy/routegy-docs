---
title: "Microapps | Reference"
description: "How do microapps work?"
sidebar: false
---

# Microapps

Microapps are where interactions occur within groups of a workspace.

A person interacting with a Microapp can potentially create a [event](/reference/events/).

## Relations

A microapp is made up of the following relations:

* [Group](/reference/groups/) (many-to-one)
* [Schema](/reference/schemas/) (many-to-one)
* [Action](/reference/actions/) (many-to-many)
* [Event](/reference/events/) (one-to-many)
* [Code](/reference/codes/) (one-to-one)

## Permissions

Microapps inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
