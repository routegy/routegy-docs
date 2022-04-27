---
title: "Capture supply requests | How-to"
description: "How do I capture supply requests?"
---

# Capture supply requests

This how-to covers how to create [patterns](/reference/patterns/) that capture supply requests. These are meant to gain immediate insight into what's out of stock and, over time, help to determine where to best allocate resources.

## Prerequisite

You should be familiar with [creating new patterns](/how-to/create-new-patterns/).

## Conference room supply request example

This pattern captures a supply request for a conference room using a group of [checkboxes](/reference/patterns.html#multiple-checkboxes) indicating the items to restock and a free-form text input to capture additional details or items that aren't listed.

```yaml
supplies:
  type: checkboxes
  items:
    - Whiteboard markers
    - Whiteboard erasers
    - A/V adapters
    - Chairs
    - Something else
  title: What needs to be restocked?
additional_comment:
  type: textarea
  title: Something else or other details?
  placeholder: E.g. Red pens
```

<CaptionedImage
  src="/images/how-tos/capture-conf-room-supplies.png"
  alt="Routegy app for capturing supply requests in a conference room with checkboxes and a text area for additional information."
  width="85%"
/>
