---
title: "Workspaces | Reference"
description: "Workspace reference documentation"
sidebar: false
---

# Workspaces

A workspace represents an abstract or physical space used for grouping. An [organization](/reference/organizations/) will have one or more workspaces and all other resources will be grouped under the umbrella of a single workspace.

Some examples of a workspace could be:

* Jamrich Building
* Greater Seattle Area
* 3rd. Ave Building
* Seattle Campus

## Relations

A workspace is made up of the following relations:

* [Organization](/reference/organizations/) (many-to-one)
* [Location](/reference/locations/) (one-to-many)
* [Team](/reference/teams/) (one-to-many)
* [User](/reference/users/) (one-to-many)

## Users

[Users](/reference/users/) can gain permissions to a workspace.

**This feature is not currently used**

## Teams

[Teams](/reference/teams/) can gain permissions to a workspace. When a workspace is created, the following teams are automatically created:

* [Administrators](reference/team/s#administrators)
* [Collaborators](reference/teams/#collaborators)
* [Observers](reference/teams/#observers)

The [user](/reference/users/) that created the workspace is automatically added to the [Administrators](reference/teams/#administrators) team.

## Permissions

[Users](/reference/users/) must have permissions (directly or through a [Team](/reference/teams/) membership) in order to interact with individual workspace. Workspaces support the following permissions:

* [Add](/reference/permissions/#add) - Required to create new workspace
* [Change](/reference/permissions/#change) - Required to modify existing workspace
* [Delete](/reference/permissions/#delete) - Required to delete existing workspace
* [View](/reference/permissions/#view) - Required to view existing workspace
