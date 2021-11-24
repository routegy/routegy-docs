---
title: "Events | Reference"
description: "How do events work?"
sidebar: false
---

# Events

Events are created when people interact with a [microapp](/reference/microapps/).

A event contains [schema values](/references/schema-values/) data needed to fulfill the [schema](/refernces/schema/) of the [microapp](/reference/microapps/).

Each event created will be run through every [action](/references/actions/) attached to its [microapp](/reference/microapps/).

## Relations

A event is made up of the following relations:

* [Microapp](/reference/microapps/) (many-to-one)
* [SchemaValues](/reference/schema-values/) (many-to-one)

## Permissions

Events inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
