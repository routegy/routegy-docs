---
title: "Microapps | Topic"
description: "What is a microapp?"
sidebar: false
---

# Microapps

A microapp is the point where interactions occur within groups of a workspace.

A microapp is linked to a [code](/topic/codes). This enables referencing a microapp by an opaque value (URL) that can be encoded into microapps like QR codes, NFC tags, API clients, etc.

A microapp has `name` and `description` fields which define a "call to action", indicating to a person its purpose and what happens when they interact with it. Depending on the physical microapp used, the length of these values should be limited on a common sense basis.

A microapp is linked to a [pattern](/topic/patterns) which defines the user experience when interacting with it. It can used to (optionally) prompt the user for additional information.

A person interacting with a microapp will potentially create a [event](/topic/events). The event contains information gathered from the person, constrained by the pattern used.

### Examples

| Code (URL) | Name | Description | Image |
| ---------- | ---- | ----------- | ----- |
| https://rtgy.io/yPe9BPD | Need something? | Let us know and we'll bring it to your room | [![](/images/marketing/hotel-closet.jpg)](/images/marketing/hotel-closet.jpg) |
| https://rtgy.io/VRnekwa | Out of coffee? | We'll get you caffeinated in no time | [![](/images/marketing/office-coffee.jpg)](/images/marketing/office-coffee.jpg) |
| https://rtgy.io/y42gVPg | How are we doing? | Let us know so we can provide the best service | [![](/images/marketing/hotel-survey.jpg)](/images/marketing/hotel-survey.jpg) |

### Related

* [Topic: Code](/topic/codes/)
* [Reference: Code](/reference/codes/)
* [Reference: Microapp](/reference/microapps/)
