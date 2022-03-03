---
title: "Groups | Reference"
description: "What is a Routegy group?"
---

# Groups

A group allows for organization of [apps](/reference/apps) in a tree-like hierarchy. Groups can represent physical spaces, virtual spaces, objects, etc. They are structured in a tree hierarchy so you can describe more complex structures with them.

An example of a hierarchy of groups could be:

```
> University Campus
    > Jamrich Building
        > 2nd Floor
            > Classroom 251
```

A group has zero or more [apps](/reference/apps/), which define common interactions relative to that group. For example, an app requesting more printer paper makes sense for an office supply room group but does not make sense for a bathroom group.

## Examples

<CaptionedImage
  src="/images/navigation/office-1st-floor-conference-room-101-tree.png"
  alt="The app tree interface in the Routegy admin app with groups representing an office layout"
  width="70%"
/>

## Permissions

Groups inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about how permission inheritance [here](/reference/permissions/).
