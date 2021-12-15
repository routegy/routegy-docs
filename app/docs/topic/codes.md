---
title: "Codes | Topic"
description: "What is a topic?"
sidebar: false
---

# Codes

Codes are used to identify [apps](/topic/apps) with an opaque identifier and are normally seen as a URL. These URL's can encoded into apps like QR codes, NFC tags, API clients, etc.

Code URL's will be optionally encoded with metadata as to indicate the physical app referencing them.

Users do not need to worry about managing codes as creating an app will automatically create a code.

If a code is not linked to an app, you must go through the [provision flow](/topic/provision-flow.html) to link them.

### Examples

| Code | URL | Metadata |
| ---- | --- | -------- |
| yPe9BPD | https://rtgy.io/yPe9BPD?o=qr | App is a QR code
| VRnekwa | https://rtgy.io/VRnekwa | App is a Direct link
| y42gVPg | https://rtgy.io/y42gVPg?o=nfc | App is an NFC tag

### Related

* [Topic: Apps](/topic/apps/)
* [Reference: Code](/reference/codes/)
* [Reference: App](/reference/apps/)
