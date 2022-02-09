---
title: "Apps | Reference"
description: "What is a Routegy app?"
---

# Apps

An app is the point where interactions occur within groups of a workspace.

An app is linked to a [code](/reference/codes). This enables referencing an app by an opaque value (URL) that can be encoded into apps like QR codes, NFC tags, API clients, etc.

An app has `name` and `description` fields which define a "call to action", indicating to a person its purpose and what happens when they interact with it. Depending on the physical app used, the length of these values should be limited on a common sense basis.

An app is linked to a [pattern](/reference/patterns) which defines the user experience when interacting with it. It can used to (optionally) prompt the user for additional information.

A person interacting with an app will potentially create an [event](/reference/events). The event contains information gathered by the app (as defined by the app pattern), and it will trigger any [action](/reference/actions) that is tied to the app.

## Examples

| Code (URL) | Name | Description | Image |
| ---------- | ---- | ----------- | ----- |
| https://rtgy.io/yPe9BPD | Need something? | Let us know and we'll bring it to your room | [![A sign saying 'Need something?' with a QR code in a hotel closet](/images/marketing/hotel-closet.jpg)](/images/marketing/hotel-closet.jpg) |
| https://rtgy.io/VRnekwa | Out of coffee? | We'll get you caffeinated in no time | [![An office a sign saying 'Out of coffee?' with a QR code near a coffee machine](/images/marketing/office-coffee.jpg)](/images/marketing/office-coffee.jpg) |
| https://rtgy.io/y42gVPg | How are we doing? | Let us know so we can provide the best service | [![A sign saying 'How are we doing?' with a QR code on a hotel room coffee table](/images/marketing/hotel-survey.jpg)](/images/marketing/hotel-survey.jpg) |

## Permissions

Apps inherit permissions from their [Workspace](/reference/workspaces/) and its [Organization](/reference/organizations/) through its [Group](/reference/groups/). Read more about how permission inheritance [here](/reference/permissions/).
