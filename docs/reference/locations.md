---
title: Locations
description: "Routegy Locations"
sidebar: false
---

# Locations

A location represents a physical space within a workspace. A [workspace](/reference/workspaces) will have one or more locations that form a hierarchical representation of the physical properties of the workspace.

Some examples of a hierarchy of locations could be:

```
> University Campus
    > Building #28
        > Floor #3
            > North Breakroom
```

## Relations

A location is made up of the following relations:

* [Workspace](/reference/workspaces) (many-to-one)
* [Location](/reference/locations) (one-to-many)
* [Touchpoint](/reference/touchpoints) (one-to-many)
