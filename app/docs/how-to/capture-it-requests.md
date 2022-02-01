---
title: "Capture IT requests | How-to"
description: "How do I capture IT requests?"
---

# Capture IT requests

The goal of this document is to cover how to create [patterns](/topic/patterns/) that capture IT requests. These are meant to gain immediate insight to the exact area of a problem without requiring additional requests for more information.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## IT Requests

IT problems are dynamic in nature but can be handled by a group of checkboxes indicating the common problems to report and a free-form text input to capture additional details or other items not previously listed.

IT related requests tend to be a merge between the patterns used in [maintenance requests](/how-to/capture-maintenance-requests/) and [supply requests](/how-to/capture-supply-requests/).

### Call Room Problems

This pattern snippet would capture isssues within a call room.

```yaml
type: object
title: 'Problem in the call room?'
required:
  - problem
properties:
  problem:
    type: array
    attrs:
      type: checkbox
    items:
      - enum:
          - Call quality is poor
          - WiFi signal is poor
          - Projector/TV not working
          - Audio system not working
          - Web camera not working
          - Tablet battery is dead
          - Missing A/V adapters
          - Something else
        type: string
    title: What is the problem?
  additional_comment:
    type: string
    attrs:
      type: textarea
      placeholder: Provide any additional information here to help us
      title: Something else or other details?
additionalProperties: false
```

## Related

* [How-to: Capture maintenance requests](/how-to/capture-maintenance-requests/)
* [How-to: Capture hot/cold requests](/how-to/capture-hot-cold-requests/)
* [How-to: Capture supply requests](/how-to/capture-supply-requests/)
