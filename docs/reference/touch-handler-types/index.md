---
title: "Reference: Touch Handler Types"
description: "Routegy Touch Handlers Types"
sidebar: false
---

# Touch Handler Types

A touch handler type represents a type of action that can be run for every [touch](/reference/touches) created by a [touchpoint](/reference/touchpoints).

Some examples of touch handler types could be:

* Send SMS
* Send email
* Create ticket in the Trello board
* Send pager alert via Pagerduty
* Invoke AWS Lambda function

## Relations

A touch handler type is made up of the following relations:

* [Workspace](/reference/workspaces) (many-to-one)
* [Schema](/reference/schemas) (many-to-one)
* [TouchHandler](/reference/touch-handlers) (one-to-many)

## Permissions

Touch handler types inherit permissions from their [Workspace](/reference/workspaces) and its [Organization](/reference/organizations). Read more about permission inheritance [here](/reference/permissions).