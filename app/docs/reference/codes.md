---
title: "Codes | Reference"
description: "What is a Routegy code?"
---

# Codes

Codes are used to identify [apps](/reference/apps) with an opaque identifier and are commonly seen in a Routegy app URL (E.g. `https://rtgy.io/{code}`). These URLs can be directly linked or encoded in QR codes, NFC tags, API clients, etc.

Creating an [app](/reference/apps/) automatically creates a new code.

## Provisioning codes

You can create codes independent of app creation. This allows for easy provisioning, such as deploying a large number of embedded codes (E.g. QR code signs) and creating apps from them dynamically in the field.

To link a code to an app, simply navigate to a Routegy app URL with a code that has been created but does not correspond to an app. This will automatically open the Routegy admin app and prompt for you to create a new app with the specified code.

## Tracking where app access is coming from

Routegy app URLs can be extended with metadata to indicate the source referencing them.

TODO: specify query param values

## Examples

| Code | URL | Metadata |
| ---- | --- | -------- |
| yPe9BPD | https://rtgy.io/yPe9BPD?o=qr | App is a QR code
| VRnekwa | https://rtgy.io/VRnekwa | App is a Direct link
| y42gVPg | https://rtgy.io/y42gVPg?o=nfc | App is an NFC tag
