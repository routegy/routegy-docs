---
title: "Codes | Topic"
description: "What is a topic?"
sidebar: false
---

# Codes

Codes are used to identify [touchpoints](/topic/touchpoints) with an opaque identifier and are normally seen as a URL. These URL's can encoded into touchpoints like QR codes, NFC tags, API clients, etc.

Code URL's will be optionally encoded with metadata as to indicate the physical touchpoint referencing them.

Users do not need to worry about managing codes as creating a touchpoint will automatically create a code.

If a code is not linked to a touchpoint, you must go through the [provision flow](/topic/provision-flow.html) to link them.

### Examples

| Code | URL | Metadata |
| ---- | --- | -------- |
| yPe9BPD | https://rtgy.io/yPe9BPD?o=qr | Touchpoint is a QR code
| VRnekwa | https://rtgy.io/VRnekwa | Touchpoint is a Direct link
| y42gVPg | https://rtgy.io/y42gVPg?o=nfc | Touchpoint is an NFC tag

### Related

* [Topic: Touchpoints](/topic/touchpoints)
* [Reference: Code](/reference/codes)
* [Reference: Touchpoint](/reference/touchpoints)
