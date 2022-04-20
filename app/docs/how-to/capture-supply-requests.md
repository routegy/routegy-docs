---
title: "Capture supply requests | How-to"
description: "How do I capture supply requests?"
---

# Capture supply requests

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture supply requests. These are meant to gain immediate insight into supply chain issues, what's out of stock and where to best allocate your resources.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Supply Requests

In most cases, managing supply of items within a space can be handled by a group of [checkboxes](/reference/patterns.html#multiple-checkboxes) indicating the items to restock and a free-form text input to capture additional details or other items not previously listed.

### Conference Room Supplies

This pattern snippet capture a supply request for a conference room.

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
  alt="Capture conference room supply request."
  width="85%"
/>
