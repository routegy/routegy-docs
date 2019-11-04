---
title: Workspaces
description: "Routegy Workspaces"
sidebar: false
---

# Workspaces

A workspace represents an abstract or physical space used for grouping. An [organization](/reference/organizations.html) will have one or more workspaces and all other resources will be grouped under the umbrella of a single workspace.

Some examples of a workspace could be:

* Jamrich Building
* Greater Seattle Area
* 3rd. Ave Building
* Seattle Campus

## Relations

A workspace is made up of the following relations:

* [Organization](/reference/organizations.html) (many-to-one)
* [Location](/reference/locations.html) (one-to-many)
* [Team](/reference/teams.html) (one-to-many)
* [User](/reference/users.html) (one-to-many)

## Users

[Users](/reference/users.html) can gain permissions to a workspace.

**This feature is not currently used**

## Teams

[Teams](/reference/teams.html) can gain permissions to a workspace. When a workspace is created, the following teams are automatically created:

* [Administrators](reference/team.htmls#administrators)
* [Collaborators](reference/teams.html#collaborators)
* [Observers](reference/teams.html#observers)

The [user](/reference/users.html) that created the workspace is automatically added to the [Administrators](reference/teams.html#administrators) team.

## Permissions

[Users](/reference/users.html) must have permissions (directly or through a [Team](/reference/teams.html) membership) in order to interact with individual workspace. Workspaces support the following permissions:

* [Add](/reference/permissions.html#add) - Required to create new workspace
* [Change](/reference/permissions.html#change) - Required to modify existing workspace
* [Delete](/reference/permissions.html#delete) - Required to delete existing workspace
* [View](/reference/permissions.html#view) - Required to view existing workspace
