---
title: "Events | Reference"
description: "What are Routegy events?"
---

# Events

Events are created when people interact with a [app](/reference/apps/).

A event contains [app data](/reference/app-data/) data needed to fulfill the [pattern](/refernce/pattern/) of the [app](/reference/apps/).

Each event created will be run through every [action](/reference/actions/) attached to its [app](/reference/apps/).

## Relations

A event is made up of the following relations:

* [App](/reference/apps/) (many-to-one)
* [AppData](/reference/app-data/) (many-to-one)

## Permissions

Events inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
