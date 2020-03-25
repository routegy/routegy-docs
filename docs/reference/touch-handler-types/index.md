---
title: "Reference: Touch Handler Types"
description: "Routegy Touch Handlers Types"
sidebar: false
---

# Touch Handler Types

A touch handler type represents a type of action that can be run for every [touch](/reference/touches.html) created by a [touchpoint](/reference/touchpoints.html).

Some examples of touch handler types could be:

* Send SMS
* Send email
* Create ticket in the Trello board
* Send pager alert via Pagerduty
* Invoke AWS Lambda function

## Available

The following is a list of available touch handler types:

* [Email](/reference/touch-handler-types/email.html)
* [Slack](/reference/touch-handler-types/slack.html)
* [SMS](/reference/touch-handler-types/sms.html)
* [Webhook](/reference/touch-handler-types/webhook.html)

## Relations

A touch handler type is made up of the following relations:

* [Workspace](/reference/workspaces.html) (many-to-one)
* [Schema](/reference/schemas.html) (many-to-one)
* [TouchHandler](/reference/touch-handlers.html) (one-to-many)

## Permissions

Touch handler types inherit permissions from their [Workspace](/reference/workspaces.html) and its [Organization](/reference/organizations.html). Read more about permission inheritance [here](/reference/permissions.html).
