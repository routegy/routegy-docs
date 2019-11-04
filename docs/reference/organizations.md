---
title: "Reference: Organizations"
description: "Routegy Organizations"
sidebar: false
---

# Organizations

An organization is the **root** object of the ownership hierarchy and maps directly to
a public/private entity that is using the system.

Some examples of an organization could be:

* Routegy, Inc.
* Starbucks
* Pepsi
* Northern Michigan University

## Relations

An organization is made up of the following relations:

* [Contact](/reference/contacts.html) (many-to-one)
* [Workspace](/reference/workspaces.html) (one-to-many)
* [Team](/reference/teams.html) (one-to-many)
* [User](/reference/users.html) (one-to-many)

## Personalized Organization

When a [User](/reference/users.html) is created through the [sign up flow](/topic/signed-up-flow.html), a personalized organization is automatically created. This organization contains resources that help walk the user through the [sign up walkthrough](/tutorials/signed-up-walkthrough.html) and quickly get started. This will be named after the user, e.g. "John Smith Organization".

## Template Organization

The personalized organization for each new user is created from a clone of the **template** organization. Any changes to the template organization will manifest in the personalized organization created for each new user _after_ the change is made.

## Users

[Users](/reference/users.html) can gain permissions to an organization.

**This feature is not currently used**

## Teams

[Teams](/reference/teams.html) can gain permissions to an organization. When an organization is created, the following teams are automatically created:

* [Administrators](reference/teams.html#administrators)
* [Collaborators](reference/teams.html#collaborators)
* [Observers](reference/teams.html#observers)

The [user](/reference/users.html) that created the organization is automatically added to the [Administrators](reference/teams.html#administrators) team.

## Permissions

[Users](/reference/users.html) must have permissions (directly or through a [Team](/reference/teams.html) membership) in order to interact with individual organizations. Organizations support the following permissions:

* [Add](/reference/permissions.html#add) - Required to create new organization
* [Change](/reference/permissions.html#change) - Required to modify existing organization
* [Delete](/reference/permissions.html#delete) - Required to delete existing organization
* [View](/reference/permissions.html#view) - Required to view existing organization
