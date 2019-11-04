---
title: "Reference: Touch Handlers"
description: "Routegy Touch Handlers"
sidebar: false
---

# Touch Handlers

A touch handler is an action that is run for every [touch](/reference/touches.html) created by a [touchpoint](/reference/touchpoints.html).

A touch handler joins a [touch handler type](/reference/touch-handler-types.html) with [schema values](/reference/schema-values.html). For example, "Send SMS" would be the touch handler type and "+1-123-123-1234" would be the phone number in the schema values.

Some examples of touch handlers could be:

* Send SMS to `+1-123-123-1234`
* Send email to `john@example.com`
* Create ticket in the `Routegy` Trello board
* Send pager alert to `user@example.com` via PagerDuty

## Relations

A touch handler is made up of the following relations:

* [TouchHandlerType](/reference/touch-handler-types.html) (many-to-one)
* [SchemaValues](/reference/schema-values.html) (many-to-one)
* [Touchpoint](/reference/touchpoints.html) (many-to-many)

## Permissions

Touch handlers inherit permissions from their [Workspace](/reference/workspaces.html) and its [Organization](/reference/organizations.html). Read more about permission inheritance [here](/reference/permissions.html).
