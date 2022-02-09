---
title: "Capture maintenance requests | How-to"
description: "How do I capture maintenance requests?"
---

# Capture maintenance requests

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture maintenance requests. These are meant to gain immediate insight to the exact area of a problem without requiring additional requests for more information.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Maintenance Requests

In most cases, fielding mantenance requests within a space can be handled by a group of checkboxes indicating the common problems to report and a free-form text input to capture additional details or other items not previously listed.

### Elevator Problem

This pattern snippet would capture a problem with an elevator.

```yaml
schema:
  type: object
  title: Problem with the elevator?
  required:
    - problem
  properties:
    problem:
      type: array
      uniqueItems: true
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
descriptor:
  order:
    - problem
    - additional_comment
  properties:
    problem:
      label: What is the problem?
    additional_comment:
      kind: textarea
      label: Something else or other details?
      attrs:
        placeholder: E.g. 8th floor button does not light up
```

<CaptionedImage
  src="/images/how-tos/capture-elevator.png"
  alt="Capture elevator maintenance request."
  width="85%"
/>

