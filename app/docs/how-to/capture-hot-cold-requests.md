---
title: "Capture hot/cold requests | How-to"
description: "How do I capture hot/cold requests?"
---

# Capture temperature requests

The goal of this document is to cover how to create [patterns](/reference/patterns/) that capture temperature change requests. These are meant to gain insight into HVAC problems or quickly respond to improve the spaces and people that you serve.

## Prerequisites

Before starting, you should familiarize yourself with the [How to: Create new patterns](/how-to/create-new-patterns/) document. Only once you've read that and are confident in creating new patterns in the Admin web app, should you continue.

## Temperature Changes

Temperature change requests a.k.a "Hot/Cold" requests are simple mutually exclusive choices indicating how the person feels relative to the current temperature.

### Hot/Cold

This pattern snippet would capture a mutually exclusive choice ('hot' and 'cold' string values) for whether it is too hot or cold using a specialized UI component.

```yaml
schema:
  type: object
  properties:
    hot_or_cold:
      type: string
descriptor:
  label: How is the temperature in this room?
  properties:
    hot_or_cold:
      kind: hotorcold
```

<CaptionedImage
  src="/images/how-tos/capture-hot-or-cold.png"
  alt="Capture hot vs. cold request"
  width="85%"
/>
