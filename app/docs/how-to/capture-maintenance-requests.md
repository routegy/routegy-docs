---
title: "Capture maintenance requests | How-to"
description: "How do I capture maintenance requests?"
sidebar: false
---

# Capture maintenance requests

The goal of this document is to cover how to create [patterns](/topic/patterns/) that capture maintenance requests. These are meant to gain immediate insight to the exact area of a problem without requiring additional requests for more information.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Maintenance Requests

In most cases, fielding mantenance requests within a space can be handled by a group of checkboxes indicating the common problems to report and a free-form text input to capture additional details or other items not previously listed.

### Elevator Problem

This pattern snippet would capture a problem with an elevator.

```yaml
type: object
title: 'Problem with the elevator?'
required:
  - request
properties:
  request:
    type: array
    attrs:
      type: checkbox
    items:
      - enum:
          - Making strange sounds
          - Buttons not working
          - Door won't close
          - Stuck
          - Something else
        type: string
    title: What is the problem?
  additional_comment:
    type: string
    attrs:
      type: textarea
      placeholder: E.g. 8th floor button does not light up
      title: Something else or other details?
additionalProperties: false
```

## Related

* [How-to: Capture supply requests](/how-to/capture-supply-requests/)
* [How-to: Capture hot/cold requests](/how-to/capture-hot-cold-requests/)
