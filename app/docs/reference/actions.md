---
title: "Actions | Reference"
description: "How do actions work?"
sidebar: false
---

# Actions

A action is an action that is run for every [event](/reference/events/) created by a [microapp](/reference/microapps/).

A action joins a [action type](/reference/action-types/) with [microapp data](/reference/microapp-data/). For example, "Send SMS" would be the action type and "+1-123-123-1234" would be the phone number in the microapp data.

Some examples of actions could be:

* Send SMS to `+1-123-123-1234`
* Send email to `john@example.com`
* Create ticket in the `Routegy` Trello board
* Send pager alert to `user@example.com` via PagerDuty

## Relations

A action is made up of the following relations:

* [ActionType](/reference/action-types/) (many-to-one)
* [MicroappData](/reference/microapp-data/) (many-to-one)
* [Microapp](/reference/microapps/) (many-to-many)

## Permissions

Actions inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
