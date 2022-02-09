---
title: "Actions | Reference"
description: "What is a Routegy action?"
---

# Actions

An action is a task that is run for every [event](/reference/events/) created by an [app](/reference/apps/).

An action joins a [action type](/reference/action-types/) with [app data](/reference/app-data/). For example, "Send SMS" would be the action type and "+1-123-123-1234" would be the phone number in the app data.

Some examples of actions could be:

* Send SMS to `+1-123-123-1234`
* Send email to `john@example.com`
* Create ticket in the `Routegy` Trello board
* Send pager alert to `user@example.com` via PagerDuty

## Permissions

Actions inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/). Read more about permission inheritance [here](/reference/permissions/).
