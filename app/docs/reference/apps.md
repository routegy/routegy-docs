---
title: "Apps | Reference"
description: "What is a Routegy app?"
---

# Apps

An app is the point where interactions occur within groups of a workspace.

Each app is linked to a [code](/reference/codes). This enables referencing an app by an opaque value (E.g. URL) that can be encoded into links, QR codes, NFC tags, API clients, etc.

## Name and description

An app has `name` and `description` fields which define a "call to action", indicating to a person its purpose and what happens when they interact with it. These fields are displayed when someone interacts with your app, so it's important to be descriptive and concise. For example, a `name` might be "Access request" and the `description` might be "The repo request hub for Acme, Co."

## Attributes

You can optionally define key-value pairs of information for an app. This information is available to the pattern when an app is accessed as well as events triggered by the app. For example, you may have a key:value pair of `printer_id:0001` that is used in the UX by the pattern to confirm to a person that the app they're accessing corresponds to the proper context, as well as in actions for help in routing, categorizing, etc.

::: warning
Attributes are publicly available and should be treated as such. If you're unsure about how best to process sensitive data, please contact us at [support@routegy.com](mailto:support@routegy.com).
:::

## Pattern

Every app is linked to a [pattern](/reference/patterns), which defines the user experience when interacting with it. It can used to (optionally - see [instant patterns](/reference/patterns#instant-events)) prompt the user for additional information.

## Events and actions

A person interacting with an app will potentially create an [event](/reference/events). The event contains information gathered by the app as defined by the app's pattern, and it will trigger any [action](/reference/actions) that is tied to the app.

## Examples

| Code (URL) | Name | Description | Image |
| ---------- | ---- | ----------- | ----- |
| https://rtgy.io/yPe9BPD | Need something? | Let us know and we'll bring it to your room | [![A sign saying 'Need something?' with a QR code in a hotel closet](/images/marketing/hotel-closet.jpg)](/images/marketing/hotel-closet.jpg) |
| https://rtgy.io/VRnekwa | Out of coffee? | We'll get you caffeinated in no time | [![An office a sign saying 'Out of coffee?' with a QR code near a coffee machine](/images/marketing/office-coffee.jpg)](/images/marketing/office-coffee.jpg) |
| https://rtgy.io/y42gVPg | How are we doing? | Let us know so we can provide the best service | [![A sign saying 'How are we doing?' with a QR code on a hotel room coffee table](/images/marketing/hotel-survey.jpg)](/images/marketing/hotel-survey.jpg) |

## Permissions

Apps inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
