---
title: "Reference: Locations"
description: "Routegy Locations"
sidebar: false
---

# Locations

A location represents a physical space within a workspace. A [workspace](/reference/workspaces.html) will have one or more locations that form a hierarchical representation of the physical properties of the workspace.

An example of a hierarchy of locations could be:

```
> University Campus
    > Building #28
        > Floor #3
            > North Breakroom
```

## Relations

A location is made up of the following relations:

* [Workspace](/reference/workspaces.html) (many-to-one)
* [Location](/reference/locations.html) (one-to-many)
* [Touchpoint](/reference/touchpoints.html) (one-to-many)

## Permissions

Locations inherit permissions from their [Workspace](/reference/workspaces.html) and its [Organization](/reference/organizations.html). Read more about how permission inheritance [here](/reference/permissions.html).
