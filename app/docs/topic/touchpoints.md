---
title: "Touchpoints | Topic"
description: "What is a touchpoint?"
sidebar: false
---

# Touchpoints

A touchpoint is the point where interactions occur within locations of a workspace.

A touchpoint is linked to a [code](/topic/codes). This enables referencing a touchpoint by an opaque value (URL) that can be encoded into touchpoints like QR codes, NFC tags, API clients, etc.

A touchpoint has `name` and `description` fields which define a "call to action", indicating to a person its purpose and what happens when they interact with it. Depending on the physical touchpoint used, the length of these values should be limited on a common sense basis.

A touchpoint is linked to a [schema](/topic/schemas) which defines the user experience when interacting with it. It can used to (optionally) prompt the user for additional information.

A person interacting with a touchpoint will potentially create a [touch](/topic/touches). The touch contains information gathered from the person, constrained by the schema used.

### Examples

| Code (URL) | Name | Description | Image |
| ---------- | ---- | ----------- | ----- |
| https://rtgy.io/yPe9BPD | Need something? | Let us know and we'll bring it to your room | [![](/images/marketing/hotel-closet.jpg)](/images/marketing/hotel-closet.jpg) |
| https://rtgy.io/VRnekwa | Out of coffee? | We'll get you caffeinated in no time | [![](/images/marketing/office-coffee.jpg)](/images/marketing/office-coffee.jpg) |
| https://rtgy.io/y42gVPg | How are we doing? | Let us know so we can provide the best service | [![](/images/marketing/hotel-survey.jpg)](/images/marketing/hotel-survey.jpg) |

### Related

* [Topic: Code](/topic/codes/)
* [Reference: Code](/reference/codes/)
* [Reference: Touchpoint](/reference/touchpoints/)
