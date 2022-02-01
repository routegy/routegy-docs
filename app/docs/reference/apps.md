---
title: "Apps | Reference"
description: "How do apps work?"
---

# Apps

Apps are where interactions occur within groups of a workspace.

A person interacting with an app can potentially create a [event](/reference/events/).

## Relations

An app is made up of the following relations:

* [Group](/reference/groups/) (many-to-one)
* [Pattern](/reference/patterns/) (many-to-one)
* [Action](/reference/actions/) (many-to-many)
* [Event](/reference/events/) (one-to-many)
* [Code](/reference/codes/) (one-to-one)

## Permissions

Apps inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
