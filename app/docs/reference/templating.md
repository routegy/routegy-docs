---
title: "Templating | Reference"
description: "How does templating work?"
sidebar: false
---

# Templating

Routegy supports customizing [touch handlers](/reference/touch-handlers/) fields with a template language. This allows touch handlers to react dynamically to the touch provided _values_ and the _context_ its being executed in.

Be sure to check out the document for your specific [touch handler type](/reference/touch-handler-types/) to see if templating is supported.

## Values

Templates have access to all of the data captured by the [touchpoint](/reference/touchpoints/) for the [touch](/reference/touches/). These values are top-level items in the templating language.

For example, imagine you have a [schema](/reference/schemas/) that captures problems with a coffee machine. It has two properties: `problem` and `additional_comment`.

These values would be accessed in your [touch handlers](/reference/touch-handlers/) fields by using:

* <span v-pre>`{{ problem }}`</span>
* <span v-pre>`{{ additional_comment }}`</span>

## Context

In addition to the values captured from the end user, templates have access to all of the _related_ data. The [touchpoint](/reference/touchpoints/) that was used, its [location](/reference/locations/), the [workspace](/reference/workspaces/) these are encapsulated in, etc. All of this values are stored and available to templates through the `context` object.

### Variables

All variables are accessed using the <span v-pre>`{{ variable }}`</span> syntax, e.g. <span v-pre>`{{ context.touch.created_at }}`</span>.

| Variable | Description | Example |
| ---------| ----------- | ------- |
| `context.code.id` | ID of the code | d6a1a3af-2bad-40be-9aac-4bbfea50c02e |
| `context.code.url` | URL of the code | https://rtgy.io/e6Por4d |
| `context.code.short_id` | Code short id for the touchpoint | e6Por4d |
| `context.code.created_at` | Datetime when code was created | 2020-06-04T11:53:25-07:00 |
| `context.code.updated_at` | Datetime when code was last updated | 2020-06-04T12:32:54-07:00 |
| `context.handler.id` | ID of the touch handler | 0617c463-a6c4-411e-8747-3dfaccdaf5af |
| `context.handler.url` | URL of the touch handler | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/handlers/0617c463-a6c4-411e-8747-3dfaccdaf5af |
| `context.handler.name` | Name of the touch handler | SMS - Alerts |
| `context.handler.slug` | Slug of the touch handler | sms-alerts |
| `context.handler.created_at` | Datetime when touch handler was created | 2020-06-04T11:53:25-07:00 |
| `context.handler.updated_at` | Datetime when touch handler was last updated | 2020-06-04T12:32:54-07:00 |
| `context.handler.schema.id` | ID of the touch handler schema | 74e41b0d-3c5a-4cbb-96ab-145984341bc7 |
| `context.handler.schema.url` | URL of the touch handler schema | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/schemas/74e41b0d-3c5a-4cbb-96ab-145984341bc7 |
| `context.handler.schema.name` | Name of the touch handler schema | SMS |
| `context.handler.schema.slug` | Slug of the touch handler schema | sms |
| `context.handler.schema.created_at` | Datetime when touch handler schema was created | 2020-06-04T11:53:25-07:00 |
| `context.handler.schema.updated_at` | Datetime when touch handler schema was last updated | 2020-06-04T12:32:54-07:00 |
| `context.location.id` | ID of the location | c47d3b00-28a6-4129-a485-60682d48bddd |
| `context.location.url` | URL of the location | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/tree/locations/c47d3b00-28a6-4129-a485-60682d48bddd |
| `context.location.name` | Name of the location | Kitchen |
| `context.location.slug` | Slug of the location | kitchen |
| `context.location.created_at` | Datetime when location was created | 2020-06-04T11:53:25-07:00 |
| `context.location.updated_at` | Datetime when location was last updated | 2020-06-04T12:32:54-07:00 |
| `context.location.breadcrumbs` | Breadcrumbs of location | Office / First Floor / Kitchen |
| `context.organization.id` | ID of the organization | 319a4ae5-c33f-4685-b43b-3f14959042e8 |
| `context.organization.name` | Name of the organization | My Organization |
| `context.organization.slug` | Slug of the organization | my-organization |
| `context.organization.created_at` | Datetime when organization was created | 2020-06-04T11:53:25-07:00 |
| `context.organization.updated_at` | Datetime when organization was last updated | 2020-06-04T12:32:54-07:00 |
| `context.touch.id` | ID of the touch | f3496601-92dc-4750-bddc-83afda953013 |
| `context.touch.url` | URL of the location | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/touches/f3496601-92dc-4750-bddc-83afda953013 |
| `context.touch.created_at` | Datetime when touch was created | 2020-06-04T11:53:25-07:00 |
| `context.touch.updated_at` | Datetime when touch was last updated | 2020-06-04T12:32:54-07:00 |
| `context.touchpoint.id` | ID of the touchpoint | 8b50a1c8-01c8-4f58-8215-ee5cb22d8585 |
| `context.touchpoint.url` | URL of the touchpoint | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/tree/touchpoints/8b50a1c8-01c8-4f58-8215-ee5cb22d8585 |
| `context.touchpoint.name` | Name of the touchpoint | Coffee Machine |
| `context.touchpoint.slug` | Slug of the touchpoint | coffee-machine |
| `context.touchpoint.created_at` | Datetime when touchpoint was created | 2020-06-04T11:53:25-07:00 |
| `context.touchpoint.updated_at` | Datetime when touchpoint was last updated | 2020-06-04T12:32:54-07:00 |
| `context.touchpoint.breadcrumbs` | Breadcrumbs of touchpoint | Office / First Floor / Kitchen / Coffee Machine |
| `context.touchpoint.schema.id` | ID of the touchpoint schema | 8e2e5a9a-e8f0-4f83-839d-246d865c98cb |
| `context.touchpoint.schema.url` | URL of the touchpoint schema | https://web.routegy.com/workspaces/4e96d27a-7624-45ef-8411-a2ef8f27cc29/schemas/8e2e5a9a-e8f0-4f83-839d-246d865c98cb |
| `context.touchpoint.schema.name` | Name of the touchpoint schema | Coffee machine problem |
| `context.touchpoint.schema.slug` | Slug of the touchpoint schema | coffee-machine-problem |
| `context.touchpoint.schema.created_at` | Datetime when touchpoint schema was created | 2020-06-04T11:53:25-07:00 |
| `context.touchpoint.schema.updated_at` | Datetime when touchpoint schema was last updated | 2020-06-04T12:32:54-07:00 |
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
