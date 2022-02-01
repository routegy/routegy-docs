---
title: "Groups | Reference"
description: "How do groups work?"
---

# Groups

A group represents a physical space within a workspace. A [workspace](/reference/workspaces/) will have one or more groups that form a hierarchical representation of the physical properties of the workspace.

An example of a hierarchy of groups could be:

```
> University Campus
    > Building #28
        > Floor #3
            > North Breakroom
```

## Relations

A group is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [Group](/reference/groups/) (one-to-many)
* [App](/reference/apps/) (one-to-many)

## Permissions

Groups inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about how permission inheritance [here](/reference/permissions/).
