---
title: "Capture supply requests | How-to"
description: "How do I capture supply requests?"
---

# Capture supply requests

The goal of this document is to cover how to create [patterns](/topic/patterns/) that capture supply requests. These are meant to gain immediate insight into supply chain issues, what's out of stock and where to best allocate your resources.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Supply Requests

In most cases, managing supply of items within a space can be handled by a group of checkboxes indicating the items to restock and a free-form text input to capture additional details or other items not previously listed.

### Conference Room Supplies

This pattern snippet capture a supply request for a conference room.

```yaml
type: object
title: Conference room supplies
required:
  - supplies
properties:
  supplies:
    type: array
    attrs:
      type: checkbox
    items:
      - enum:
          - Whiteboard markers
          - Whiteboard erasers
          - A/V adapters
          - Chairs
          - Something else
        type: string
    title: What needs to be restocked?
  additional_comment:
    type: string
    attrs:
      type: textarea
      placeholder: E.g. scissors
    title: Something else or other details?
additionalProperties: false
```

## Related

* [How-to: Capture maintenance requests](/how-to/capture-maintenance-requests/)
* [How-to: Capture hot/cold requests](/how-to/capture-hot-cold-requests/)
