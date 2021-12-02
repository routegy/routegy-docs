---
title: "Templating | Reference"
description: "How does templating work?"
sidebar: false
---

# Templating

Routegy supports customizing [actions](/reference/actions/) fields with a template language. This allows actions to react dynamically to the event provided _values_ and the _context_ its being executed in.

Be sure to check out the document for your specific [action type](/reference/action-types/) to see if templating is supported.

## Values

Templates have access to all of the data captured by the [microapp](/reference/microapps/) for the [event](/reference/events/). These values are top-level items in the templating language.

For example, imagine you have a [pattern](/reference/patterns/) that captures problems with a coffee machine. It has two properties: `problem` and `additional_comment`.

These values would be accessed in your [actions](/reference/actions/) fields by using:

* <span v-pre>`{{ problem }}`</span>
* <span v-pre>`{{ additional_comment }}`</span>

## Context

In addition to the values captured from the end user, templates have access to all of the _related_ data. The [microapp](/reference/microapps/) that was used, its [group](/reference/groups/), the [workspace](/reference/workspaces/) these are encapsulated in, etc. All of this values are stored and available to templates through the `context` object.

### Variables

All variables are accessed using the <span v-pre>`{{ variable }}`</span> syntax, e.g. <span v-pre>`{{ context.event.created_at }}`</span>.

| Variable | Description | Example |
| ---------| ----------- | ------- |
| `context.code.id` | ID of the code | d6a1a3af-2bad-40be-9aac-4bbfea50c02e |
| `context.code.url` | URL of the code | https://rtgy.io/e6Por4d |
| `context.code.short_id` | Code short id for the microapp | e6Por4d |
| `context.code.created_at` | Datetime when code was created | 2020-06-04T11:53:25-07:00 |
| `context.code.updated_at` | Datetime when code was last updated | 2020-06-04T12:32:54-07:00 |
| `context.action.id` | ID of the action | 0617c463-a6c4-411e-8747-3dfaccdaf5af |
| `context.action.url` | URL of the action | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/actions/0617c463-a6c4-411e-8747-3dfaccdaf5af |
| `context.action.name` | Name of the action | SMS - Alerts |
| `context.action.slug` | Slug of the action | sms-alerts |
| `context.action.created_at` | Datetime when action was created | 2020-06-04T11:53:25-07:00 |
| `context.action.updated_at` | Datetime when action was last updated | 2020-06-04T12:32:54-07:00 |
| `context.action.pattern.id` | ID of the action pattern | 74e41b0d-3c5a-4cbb-96ab-145984341bc7 |
| `context.action.pattern.url` | URL of the action pattern | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/patterns/74e41b0d-3c5a-4cbb-96ab-145984341bc7 |
| `context.action.pattern.name` | Name of the action pattern | SMS |
| `context.action.pattern.slug` | Slug of the action pattern | sms |
| `context.action.pattern.created_at` | Datetime when action pattern was created | 2020-06-04T11:53:25-07:00 |
| `context.action.pattern.updated_at` | Datetime when action pattern was last updated | 2020-06-04T12:32:54-07:00 |
| `context.group.id` | ID of the group | c47d3b00-28a6-4129-a485-60682d48bddd |
| `context.group.url` | URL of the group | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/tree/groups/c47d3b00-28a6-4129-a485-60682d48bddd |
| `context.group.name` | Name of the group | Kitchen |
| `context.group.slug` | Slug of the group | kitchen |
| `context.group.created_at` | Datetime when group was created | 2020-06-04T11:53:25-07:00 |
| `context.group.updated_at` | Datetime when group was last updated | 2020-06-04T12:32:54-07:00 |
| `context.group.breadcrumbs` | Breadcrumbs of group | Office / First Floor / Kitchen |
| `context.organization.id` | ID of the organization | 319a4ae5-c33f-4685-b43b-3f14959042e8 |
| `context.organization.name` | Name of the organization | My Organization |
| `context.organization.slug` | Slug of the organization | my-organization |
| `context.organization.created_at` | Datetime when organization was created | 2020-06-04T11:53:25-07:00 |
| `context.organization.updated_at` | Datetime when organization was last updated | 2020-06-04T12:32:54-07:00 |
| `context.event.id` | ID of the event | f3496601-92dc-4750-bddc-83afda953013 |
| `context.event.url` | URL of the group | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/events/f3496601-92dc-4750-bddc-83afda953013 |
| `context.event.created_at` | Datetime when event was created | 2020-06-04T11:53:25-07:00 |
| `context.event.updated_at` | Datetime when event was last updated | 2020-06-04T12:32:54-07:00 |
| `context.microapp.id` | ID of the microapp | 8b50a1c8-01c8-4f58-8215-ee5cb22d8585 |
| `context.microapp.url` | URL of the microapp | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/tree/microapps/8b50a1c8-01c8-4f58-8215-ee5cb22d8585 |
| `context.microapp.name` | Name of the microapp | Coffee Machine |
| `context.microapp.slug` | Slug of the microapp | coffee-machine |
| `context.microapp.created_at` | Datetime when microapp was created | 2020-06-04T11:53:25-07:00 |
| `context.microapp.updated_at` | Datetime when microapp was last updated | 2020-06-04T12:32:54-07:00 |
| `context.microapp.breadcrumbs` | Breadcrumbs of microapp | Office / First Floor / Kitchen / Coffee Machine |
| `context.microapp.pattern.id` | ID of the microapp pattern | 8e2e5a9a-e8f0-4f83-839d-246d865c98cb |
| `context.microapp.pattern.url` | URL of the microapp pattern | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/patterns/8e2e5a9a-e8f0-4f83-839d-246d865c98cb |
| `context.microapp.pattern.name` | Name of the microapp pattern | Coffee machine problem |
| `context.microapp.pattern.slug` | Slug of the microapp pattern | coffee-machine-problem |
| `context.microapp.pattern.created_at` | Datetime when microapp pattern was created | 2020-06-04T11:53:25-07:00 |
| `context.microapp.pattern.updated_at` | Datetime when microapp pattern was last updated | 2020-06-04T12:32:54-07:00 |
| `context.user.id` | ID of the organization owner | 2de59476-fa4e-45ea-9cfb-cd11944b5eda |
| `context.user.name` | Name of the organization owner | John Smith |
| `context.user.slug` | Slug of the organization owner | john-smith |
| `context.user.email` | Email address of the organization owner | jsmith@example.org |
| `context.user.created_at` | Datetime when organization owner was created | 2020-06-04T11:53:25-07:00 |
| `context.user.updated_at` | Datetime when organization owner was last updated | 2020-06-04T12:32:54-07:00 |
| `context.user.locale` | Locale of organization owner | en |
| `context.user.time_zone` | Time zone of organization owner | America/Los_Angeles |
| `context.workspace.id` | ID of the workspace | 4e96d27a-7624-45ef-8411-a2ef8f27cc29 |
| `context.workspace.url` | URL of the workspace | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29 |
| `context.workspace.name` | Name of the workspace | Office |
| `context.workspace.slug` | Slug of the workspace | office |
| `context.workspace.created_at` | Datetime when workspace was created | 2020-06-04T11:53:25-07:00 |
| `context.workspace.updated_at` | Datetime when workspace was last updated | 2020-06-04T12:32:54-07:00 |
