---
title: "Capture problem reports | How-to"
description: "How do I capture problem reports?"
---

# Capture problem reports

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture problem reports. These are meant to gain immediate insight to the exact area of a problem without requiring additional requests for more information.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Maintenance Requests

In most cases, fielding problem reports within a space can be handled by a group of [radio butons](/reference/patterns.html#radio-buttons) indicating the common problems to report and a free-form text input to capture additional details or other items not previously listed.

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
      enum:
        - Making strange sounds
        - Buttons not working
        - Door won't close
        - Stuck
        - Something else
      type: string
    additional_comment:
      type: string
descriptor:
  order:
    - problem
    - additional_comment
  properties:
    problem:
      kind: enum
      label: What is the problem?
    additional_comment:
      kind: textarea
      attrs:
        placeholder: E.g. 8th floor button does not light up
      label: Something else or other details?
```

<CaptionedImage
  src="/images/how-tos/capture-elevator.png"
  alt="Capture elevator maintenance request."
  width="85%"
/>
