---
title: "Action Types | Reference"
description: "How do action types work?"
sidebar: false
---

# Action Types

A action type represents a type of action that can be run for every [event](/reference/events/) created by a [microapp](/reference/microapps/).

Some examples of action types could be:

* Send SMS
* Send email
* Create ticket in the Trello board
* Send pager alert via Pagerduty
* Invoke AWS Lambda function

## Available

The following is a list of available action types:

* [Echo](/reference/action-types/echo/)
* [Email](/reference/action-types/email/)
* [Slack Webhook](/reference/action-types/slack-webhook/)
* [SMS](/reference/action-types/sms/)
* [Trello](/reference/action-types/trello/)
* [Webhook](/reference/action-types/webhook/)
* [Zapier REST Hook](/reference/action-types/zapier-rest-hook/)

## Relations

A action type is made up of the following relations:

* [Workspace](/reference/workspaces/) (many-to-one)
* [Pattern](/reference/patterns/) (many-to-one)
* [Action](/reference/actions/) (one-to-many)

## Permissions

Action types inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
